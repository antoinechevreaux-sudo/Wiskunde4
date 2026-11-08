package com.tony.wiskunde4

import android.annotation.SuppressLint
import android.app.Activity
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.webkit.WebViewAssetLoader
import org.json.JSONObject
import java.util.Locale

/**
 * Wiskunde 4: la app web (assets/index.html) dentro de un WebView.
 * Se sirve desde un origen https local para que el progreso (localStorage) se guarde
 * y funcione sin conexión. «W4Native» da a la web la pronunciación en neerlandés de Bélgica.
 * El tutor llama a la API de Claude desde la propia web con la clave guardada en el teléfono.
 */
class MainActivity : Activity() {

    private lateinit var web: WebView
    private var tts: TextToSpeech? = null
    private var ttsListo = false

    @SuppressLint("SetJavaScriptEnabled", "JavascriptInterface")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val loader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        web = WebView(this)
        web.setBackgroundColor(getColor(R.color.fondo))
        web.isVerticalScrollBarEnabled = false
        web.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            textZoom = 100
            allowFileAccess = false
            allowContentAccess = false
        }
        web.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                loader.shouldInterceptRequest(request.url)

            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean =
                request.url.host != "appassets.androidplatform.net"
        }
        // Necesario para que funcionen confirm() y prompt() de la web.
        web.webChromeClient = WebChromeClient()
        web.addJavascriptInterface(Puente(), "W4Native")
        setContentView(web)

        tts = TextToSpeech(this) { estado ->
            if (estado == TextToSpeech.SUCCESS) {
                tts?.let { t ->
                    val r = t.setLanguage(Locale("nl", "BE"))
                    if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                        t.setLanguage(Locale("nl", "NL"))
                    }
                    t.setSpeechRate(0.9f)
                    ttsListo = true
                }
            }
        }

        if (savedInstanceState != null) web.restoreState(savedInstanceState)
        else web.loadUrl(URL)
    }

    inner class Puente {
        @JavascriptInterface
        fun speak(texto: String) {
            if (!ttsListo) {
                avisar("La voz en neerlandés aún no está lista")
                return
            }
            tts?.speak(texto, TextToSpeech.QUEUE_FLUSH, null, "w4")
        }
    }

    private fun avisar(msg: String) {
        runOnUiThread {
            web.evaluateJavascript("window.w4Toast && window.w4Toast(${JSONObject.quote(msg)})", null)
        }
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        web.saveState(outState)
    }

    @Deprecated("Se mantiene para Android 7–12")
    override fun onBackPressed() {
        // La web decide: vuelve al paso anterior o al inicio; en el inicio, sale.
        web.evaluateJavascript("(window.w4Back && window.w4Back()) === true") { handled ->
            if (handled != "true") finish()
        }
    }

    override fun onPause() {
        web.onPause()
        super.onPause()
    }

    override fun onResume() {
        super.onResume()
        web.onResume()
    }

    override fun onDestroy() {
        tts?.shutdown()
        super.onDestroy()
    }

    companion object {
        private const val URL = "https://appassets.androidplatform.net/assets/index.html"
    }
}
