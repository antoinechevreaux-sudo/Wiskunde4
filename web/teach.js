"use strict";
/* Teoría de cada lección: tarjetas que se muestran antes de los ejercicios.
   Cada entrada es una función que devuelve una lista de tarjetas {t:"info", q, txt, vis}. */
const K = (q, txt, vis) => ({ t: "info", q, txt, vis, theory: true });
const EX = h => `<div class="ex">${h}</div>`;
const WARN = h => `<div class="warn"><b>Error típico</b>${h}</div>`;

const TEACH = {
/* ================= GETALBEGRIP ================= */
positie: () => [
  K("¿Qué es la positietabel?", `<p>Para escribir cualquier número usamos solo diez ${N("cijfers")} (cifras): 0, 1, 2… 9. Lo que cambia el valor de una cifra es <b>el sitio que ocupa</b>: su posición.</p>
  <p>La ${N("positietabel")} (tabla de valor posicional) ordena esos sitios en columnas. De <b>derecha a izquierda</b>:</p>
  <ul><li><b>E</b> · ${N("eenheden")}: unidades (vale 1)</li><li><b>T</b> · ${N("tientallen")}: decenas (vale 10)</li><li><b>H</b> · ${N("honderdtallen")}: centenas (vale 100)</li><li><b>D</b> · ${N("duizendtallen")}: millares (vale 1 000)</li><li><b>TD</b> · ${N("tienduizendtallen")}: decenas de millar (vale 10 000)</li></ul>
  <p>Cada columna vale <b>10 veces más</b> que la de su derecha.</p>`, () => placeTable(4305, false, 4)),
  K("Ejemplo resuelto: 4 305", `<p>Leemos el número columna a columna:</p>
  ${EX("4 en la columna D → 4 × 1 000 = <b>4 000</b><br>3 en la columna H → 3 × 100 = <b>300</b><br>0 en la columna T → 0 × 10 = <b>0</b><br>5 en la columna E → 5 × 1 = <b>5</b><br>Total: 4 000 + 300 + 0 + 5 = <b>4 305</b>")}
  <p>El <b>0 es imprescindible</b>: dice «aquí no hay decenas» y guarda el sitio. Sin él escribiríamos 435, que es otro número.</p>
  <p>Fíjate en la diferencia entre dos palabras: ${N("het getal")} es el número entero (4 305) y ${N("het cijfer")} es cada símbolo que lo forma. «Het getal 4 305 heeft vier cijfers»: el número 4 305 tiene cuatro cifras.</p>`),
  K("Diez de una columna = una de la siguiente", `<p>Como cada columna vale diez veces más, <b>10 unidades de una columna se cambian por 1 de la columna de la izquierda</b>:</p>
  ${EX("10 E = 1 T &nbsp;·&nbsp; 10 T = 1 H &nbsp;·&nbsp; 10 H = 1 D &nbsp;·&nbsp; 10 D = 1 TD")}
  <p>Por eso en una columna nunca hay más de 9: al llegar a 10, «saltamos» a la columna siguiente. Es lo que pasa en el cuentakilómetros de un coche.</p>
  <p>Una pregunta que confunde: <b>¿cuántos ${N("tientallen")} hay en total en 4 305?</b> No es la cifra de la columna T (que es 0). Se cuentan todas las decenas que caben: tapa la última cifra y lee lo que queda → <b>430</b> decenas (430 × 10 = 4 300, y sobran 5).</p>
  ${WARN("Confundir «la cifra de las decenas» (0) con «cuántas decenas hay» (430).")}`),
  K("Cómo se escriben en Flandes", `<p>Los números grandes se separan en <b>grupos de tres cifras</b> empezando por la derecha, con un espacio: 4 305 · 12 500 · 99 999. A veces verás un punto (12.500).</p>
  <p>Nunca se usa la coma para separar millares: en Bélgica la <b>coma es para los decimales</b> (3,5 es tres y medio).</p>
  <p>En neerlandés los números se dicen pegados: 4 305 = «vierduizend driehonderdvijf». Ojo: las unidades van antes que las decenas, como en alemán: 45 = «vijfenveertig» (cinco y cuarenta).</p>`)
],
tellen: () => [
  K("Contar a saltos", `<p>${N("Tellen met sprongen")} es contar sumando (o restando) siempre la misma cantidad. Esa cantidad es ${N("de sprong")}, el salto.</p>
  <p>Para continuar una serie:</p><ol><li>Mira dos números seguidos.</li><li>Calcula la diferencia: ese es el salto.</li><li>Comprueba que se repite en toda la serie.</li><li>Aplica el salto al último número.</li></ol>
  ${EX("250 · 275 · 300 · ▢<br>275 − 250 = 25 → el salto es +25<br>300 + 25 = <b>325</b>")}
  <p>Si los números crecen, ${N("verder tellen")} (contar hacia delante). Si bajan, ${N("terugtellen")} (hacia atrás): 1 000 · 875 · 750 → salto −125 → 625.</p>`),
  K("Saltos que conviene conocer", `<p>En 4º se practican saltos de 2, 5, 10, 25, 50, 100, 125 y 1 000. Algunos trucos:</p>
  <ul><li><b>25</b>: cuatro saltos de 25 hacen 100 (como cuatro monedas de 25 céntimos = 1 €).</li><li><b>50</b>: dos saltos hacen 100.</li><li><b>125</b>: ocho saltos hacen 1 000 (125, 250, 375, 500, 625, 750, 875, 1 000).</li><li><b>10, 100, 1 000</b>: solo cambia una columna (T, H o D).</li></ul>`),
  K("Cuidado al cruzar una centena o un millar", `<p>Cuando una columna llega a 10, cambia la de su izquierda:</p>
  ${EX("9 800 · 9 900 · <b>10 000</b> (no «9 1000»)<br>4 975 · 5 000 · <b>5 025</b>")}
  ${WARN("Escribir 9 900 + 100 = «91 000» o «9 1000». Piensa: 99 H + 1 H = 100 H = 10 000.")}`)
],
splitsen: () => [
  K("Descomponer y componer", `<p>${N("Splitsen")} (descomponer) es escribir un número como la <b>suma del valor de cada cifra</b>. ${N("Samenstellen")} (componer) es lo contrario: juntar las partes.</p>
  ${EX("4 306 = 4 000 + 300 + 6<br>(no hay sumando para las decenas porque su cifra es 0)")}`, () => chipsSplit(4306)),
  K("Componer con huecos y en desorden", `<p>A veces te dan las partes desordenadas o falta alguna columna. Coloca cada parte en su columna de la ${N("positietabel")}:</p>
  ${EX("20 + 9 000 + 2<br>D: 9 · H: (nada) → 0 · T: 2 · E: 2<br>Resultado: <b>9 022</b>")}
  <p>Cuando una columna no aparece, escribe un 0 en ella.</p>
  ${WARN("Juntar las cifras tal como vienen: 20 + 9 000 + 2 → «2092». Ordena primero por columnas.")}`),
  K("Reorganizar (herstructureren)", `<p>Un mismo número se puede partir de muchas maneras. Todas son correctas:</p>
  ${EX("4 306 = 4 D + 3 H + 6 E<br>4 306 = 43 H + 6 E<br>4 306 = 430 T + 6 E<br>4 306 = 4 000 + 306")}
  <p>Esto ayuda muchísimo a calcular de cabeza. Por ejemplo, 3 500 : 5 es difícil, pero 3 500 = 35 H, y 35 H : 5 = <b>7 H = 700</b>.</p>`)
],
getallenas: () => [
  K("La recta numérica", `<p>La ${N("getallenas")} es una línea donde los números están ordenados: <b>a la izquierda los pequeños, a la derecha los grandes</b>, siempre a la misma distancia entre sí.</p>
  <p>Las rayitas (${N("streepjes")}) marcan saltos iguales. No todas llevan número: tienes que deducir cuánto vale cada salto.</p>`, () => lineSVG(0, 10000, 1000, { labelEvery: 5 })),
  K("Paso 1: averigua el valor del salto", `<p>Elige dos números escritos y cuenta cuántos saltos hay entre ellos:</p>
  ${EX("De 0 a 5 000 hay 5 saltos<br>5 000 : 5 = <b>1 000</b> por salto")}
  ${EX("De 4 000 a 5 000 hay 10 saltos<br>1 000 : 10 = <b>100</b> por salto")}
  <p>Fórmula: (número mayor − número menor) : número de saltos.</p>`),
  K("Paso 2: cuenta desde el número más cercano", `<p>Para leer una flecha o colocar un número, parte del número escrito más próximo y cuenta saltos.</p>
  ${EX("Recta de 4 000 a 5 000, salto 100. ¿Dónde va 4 600?<br>Desde 4 500 (marca grande del medio): +1 salto → <b>4 600</b>")}
  <p>Si la flecha está <b>entre dos rayitas</b>, vale la mitad del salto: entre 7 000 y 7 500 (salto 500), justo en medio está 7 250.</p>
  ${WARN("Suponer que cada rayita vale 1. Calcula siempre el salto primero.")}`)
],
vergelijken: () => [
  K("Cómo comparar dos números", `<ol><li><b>¿Tienen distinto número de cifras?</b> El que tiene más cifras es mayor: 10 000 > 9 999.</li><li><b>¿Tienen las mismas cifras?</b> Compáralos columna a columna, <b>de izquierda a derecha</b>. La primera cifra distinta decide.</li></ol>
  ${EX("4 813 y 4 392<br>D: 4 y 4 → iguales, sigo<br>H: 8 y 3 → 8 es mayor → <b>4 813 &gt; 4 392</b><br>(las cifras de T y E ya no importan)")}`),
  K("Los signos de comparación", `<ul><li><b>&gt;</b> ${N("groter dan")}: mayor que · 7 &gt; 3</li><li><b>&lt;</b> ${N("kleiner dan")}: menor que · 3 &lt; 7</li><li><b>=</b> ${N("gelijk aan")}: igual a</li><li><b>≠</b> ${N("niet gelijk aan")}: distinto de · 5 ≠ 6</li><li><b>≥</b> ${N("groter dan of gelijk aan")}: mayor o igual</li><li><b>≤</b> ${N("kleiner dan of gelijk aan")}: menor o igual</li></ul>
  <p>Truco: la «boca» abierta del signo mira siempre al número mayor; la punta, al menor.</p>
  ${EX(`5 ≥ 5 → ${N("waar")} (verdadero), porque «o igual» lo permite<br>6 ≥ 5 → ${N("waar")}<br>4 ≥ 5 → ${N("niet waar")} (falso)`)}`),
  K("Ordenar varios números", `<p>${N("Ordenen van klein naar groot")}: de menor a mayor. ${N("Van groot naar klein")}: de mayor a menor.</p>
  <p>Método: agrupa primero por la cifra de la izquierda, y dentro de cada grupo mira la siguiente cifra.</p>
  ${EX("2 130 · 1 230 · 2 103 · 1 320<br>Empiezan por 1: 1 230 y 1 320 → 1 230 &lt; 1 320<br>Empiezan por 2: 2 130 y 2 103 → 2 103 &lt; 2 130<br><b>1 230 &lt; 1 320 &lt; 2 103 &lt; 2 130</b>")}`)
],
afronden: () => [
  K("¿Para qué sirve redondear?", `<p>Cuando no hace falta la cifra exacta, usamos un número «redondo» que está cerca. Decimos que es ${N("ongeveer")} (aproximadamente) y lo escribimos con el signo <b>≈</b>.</p>
  ${EX("Al concierto fueron 4 370 personas → ≈ 4 400 personas")}`, () => lineSVG(4300, 4400, 10, { point: 4370, pointLabel: "4 370", labelEvery: 10 })),
  K("La regla, paso a paso", `<ol><li>Decide a qué columna redondeas: decenas (T), centenas (H) o millares (D).</li><li>Mira la cifra <b>justo a la derecha</b> de esa columna.</li><li>Si es 0, 1, 2, 3 o 4 → ${N("naar beneden")}: la columna se queda igual.</li><li>Si es 5, 6, 7, 8 o 9 → ${N("naar boven")}: la columna sube 1.</li><li>Todas las cifras de la derecha se convierten en 0.</li></ol>
  ${EX("4 370 a la centena: miro las decenas → 7 → hacia arriba → <b>4 400</b>")}
  ${EX("4 349 a la centena: miro las decenas → 4 → hacia abajo → <b>4 300</b><br>(el 9 de las unidades no cuenta)")}`),
  K("Casos especiales", `<ul><li><b>Justo en medio</b> (la cifra es 5): siempre hacia arriba. 4 350 → 4 400.</li><li><b>Cuando sube un 9</b>, arrastra a la columna de la izquierda: 3 960 a la centena → 39 H + 1 H = 40 H = <b>4 000</b>.</li><li><b>Al millar</b>, mira las centenas: 38 750 → 7 ≥ 5 → <b>39 000</b>.</li></ul>
  ${WARN("Mirar la última cifra en vez de la que está justo al lado de la columna elegida.")}`)
],
delers: () => [
  K("¿Qué es un divisor (deler)?", `<p>Un ${N("deler")} de un número es otro número que lo <b>divide exactamente, sin que sobre nada</b>.</p>
  ${EX(`12 : 3 = 4, sin resto → 3 <b>es</b> ${N("deler")} de 12<br>12 : 5 = 2 y sobran 2 → 5 <b>no es</b> ${N("deler")} de 12`)}
  <p>Para encontrar todos los divisores, búscalos <b>por parejas</b> cuyo producto dé el número:</p>
  ${EX(`12 = 1 × 12 = 2 × 6 = 3 × 4<br>${N("Delers")} van 12: <b>1, 2, 3, 4, 6, 12</b>`)}`),
  K("¿Qué es un múltiplo (veelvoud)?", `<p>Los ${N("veelvouden")} de un número son los resultados de su tabla de multiplicar. Son infinitos.</p>
  ${EX(`${N("Veelvouden")} van 6: 6, 12, 18, 24, 30, 36…`)}
  <p>Las dos ideas son caras de la misma moneda: <b>si 3 es divisor de 12, entonces 12 es múltiplo de 3</b>.</p>
  <p>Los números ${N("even")} (pares) son los múltiplos de 2: terminan en 0, 2, 4, 6 u 8. Los ${N("oneven")} (impares) terminan en 1, 3, 5, 7 o 9.</p>`),
  K("Reglas de divisibilidad (deelbaar door)", `<p>Sin hacer la división puedes saber si un número es ${N("deelbaar door")} (divisible entre):</p>
  <ul><li><b>2</b>: termina en cifra par.</li><li><b>5</b>: termina en 0 o 5.</li><li><b>10</b>: termina en 0.</li><li><b>100</b>: termina en 00.</li><li><b>1 000</b>: termina en 000.</li></ul>
  <p>Y también el ${N("rest")} (resto):</p>
  ${EX("1 237 : 10 → resto = última cifra = <b>7</b><br>1 237 : 100 → resto = dos últimas cifras = <b>37</b><br>1 237 : 5 → última cifra 7; como 7 ≥ 5, le quito 5 → resto <b>2</b><br>1 237 : 2 → impar → resto <b>1</b>")}`)
],
negatief: () => [
  K("Números por debajo de cero", `<p>La recta numérica no termina en 0: sigue hacia la izquierda con los ${N("negatieve getallen")}: −1, −2, −3… Llevan delante ${N("het minteken")} (el signo menos). Los números normales (1, 2, 3…) son ${N("positieve getallen")}.</p>
  <p>Se leen «min drie» (−3). Los ves en la vida real:</p><ul><li>Temperatura: −5 °C = «vijf graden ${N("onder nul")}».</li><li>El ascensor de un parking: planta −2.</li></ul>`, () => lineSVG(-10, 10, 1, { labelEvery: 5, point: -4, pointLabel: "−4" })),
  K("Comparar números negativos", `<p>La regla de siempre: en la recta, <b>el que está más a la izquierda es menor</b>.</p>
  ${EX("−7 &lt; −3 (−7 está más a la izquierda)<br>−1 &lt; 0 &lt; 1<br>Cualquier negativo es menor que cualquier positivo: −100 &lt; 2")}
  ${WARN("Pensar que −7 es mayor que −3 «porque 7 es mayor que 3». Piensa en temperaturas: −7 °C hace más frío que −3 °C.")}`),
  K("Subir y bajar cruzando el cero", `<p>Usa la recta o el termómetro y cuenta saltos de uno en uno, o en dos tramos: hasta el 0 y desde el 0.</p>
  ${EX("Hace 3 °C y baja 5 grados.<br>De 3 a 0 bajan 3 grados; faltan 2 más → <b>−2 °C</b>")}
  ${EX("Por la mañana −4 °C, por la tarde 6 °C. ¿Cuánto ha subido?<br>De −4 a 0: 4 grados. De 0 a 6: 6 grados. Total: <b>10 grados</b>")}`)
],
breuken: () => [
  K("¿Qué es una fracción (breuk)?", `<p>Una ${N("breuk")} indica una parte de un todo (${N("het geheel")}). Para formarla:</p><ol><li>Divide el todo en <b>partes iguales</b>.</li><li>Toma algunas de esas partes.</li></ol>
  <p>En 3/5:</p><ul><li>El número de abajo es ${N("de noemer")} (denominador): <b>en cuántas partes iguales</b> se ha dividido el todo → 5.</li><li>El número de arriba es ${N("de teller")} (numerador): <b>cuántas partes tomamos</b> → 3.</li><li>La raya del medio es ${N("de breukstreep")}.</li></ul>
  <p>Se lee «drie vijfde» (tres quintos).</p>`, () => barSVG(5, 3)),
  K("El todo puede ser muchas cosas", `<ul><li><b>Un objeto</b>: una pizza, una barra de chocolate.</li><li><b>Un grupo de objetos</b>: 1/4 de 12 canicas = 3 canicas.</li><li><b>Una cantidad</b>: 1/2 de 20 € = 10 €.</li></ul>
  <p>Las fracciones con ${N("teller")} 1 se llaman ${N("stambreuken")}: 1/2 (${N("een half")}), 1/3, 1/4 (${N("een kwart")}), 1/5…</p>
  ${WARN("Si las partes no son iguales, no es una fracción. Una pizza cortada en 4 trozos de distinto tamaño no está dividida en cuartos.")}`),
  K("Calcular una parte, o el todo", `<p><b>Parte de un número</b>: divide entre la ${N("noemer")} y multiplica por la ${N("teller")}.</p>
  ${EX("3/4 de 20 canicas<br>1/4 → 20 : 4 = 5<br>3/4 → 5 × 3 = <b>15 canicas</b>")}
  <p><b>El todo a partir de una parte</b>: si sabes cuánto vale una parte, multiplícala por el número de partes.</p>
  ${EX("1/5 de una bolsa son 4 caramelos<br>La bolsa entera son 5 quintos → 5 × 4 = <b>20 caramelos</b>")}`)
],
breukvergelijken: () => [
  K("Mismo denominador: fácil", `<p>Si dos fracciones tienen la misma ${N("noemer")} se llaman ${N("gelijknamige breuken")}. Sus trozos son del mismo tamaño, así que <b>gana la que tiene más trozos</b> (la ${N("teller")} mayor).</p>
  ${EX("5/8 &gt; 3/8 (cinco octavos son más que tres octavos)")}`, () => barSVG(8, 5, { h: 28 }) + "<div style='height:6px'></div>" + barSVG(8, 3, { h: 28 })),
  K("Fracciones unitarias: al revés", `<p>Con ${N("stambreuken")} (${N("teller")} 1), cuanto <b>mayor es la ${N("noemer")}, más pequeño es el trozo</b>, porque el todo se corta en más partes.</p>
  ${EX("1/3 &gt; 1/5<br>Repartir una pizza entre 3 da trozos más grandes que repartirla entre 5")}
  ${WARN("Pensar que 1/5 es mayor que 1/3 porque 5 es mayor que 3.")}`, () => barSVG(3, 1, { h: 24 }) + "<div style='height:5px'></div>" + barSVG(5, 1, { h: 24 })),
  K("Fracciones en la recta y mayores que 1", `<p>Entre 0 y 1, la recta se divide en tantas partes como diga la ${N("noemer")}. 3/4 está en la tercera rayita de cuatro.</p>
  <p>Cuando la ${N("teller")} es igual a la ${N("noemer")}, la fracción vale 1 entero: 4/4 = 1. Si la ${N("teller")} es mayor, la fracción es mayor que 1 y se llama ${N("onechte breuk")} (fracción impropia):</p>
  ${EX("7/4 = 4/4 + 3/4 = 1 entero y 3/4")}`, () => lineSVG(0, 2, .25, { labelEvery: 4, mark: 1.75, lab: v => String(Math.round(v)) }))
],
gelijkwaardig: () => [
  K("Fracciones que valen lo mismo", `<p>1/2, 2/4 y 4/8 parecen distintas, pero ocupan exactamente la misma parte de la barra. Son ${N("gelijkwaardige breuken")} (fracciones equivalentes).</p>
  <p>Lo único que cambia es <b>en cuántos trozos</b> se ha cortado el todo.</p>`, () => barSVG(2, 1, { h: 26 }) + "<div style='height:5px'></div>" + barSVG(4, 2, { h: 26 }) + "<div style='height:5px'></div>" + barSVG(8, 4, { h: 26 })),
  K("Cómo encontrarlas", `<p>Multiplica la ${N("teller")} <b>y</b> la ${N("noemer")} por el mismo número:</p>
  ${EX("3/4 → × 2 → 6/8<br>3/4 → × 3 → 9/12")}
  <p>¿Por qué funciona? Si cortas cada trozo en 2, tienes el doble de trozos en total (${N("noemer")} × 2) y el doble de trozos coloreados (${N("teller")} × 2). La cantidad coloreada no cambia.</p>
  ${EX("1/3 = ▢/6 → de 3 a 6 se multiplica por 2 → 1 × 2 = <b>2</b> → 2/6")}`),
  K("Simplificar (vereenvoudigen)", `<p>Es el camino inverso: <b>divide</b> la ${N("teller")} y la ${N("noemer")} entre el mismo número. La fracción queda con números más pequeños.</p>
  ${EX("6/9 → los dos se pueden dividir entre 3 → <b>2/3</b><br>8/12 → entre 4 → <b>2/3</b>")}
  <p>Prueba con 2, 3, 5… hasta que no haya ningún número que divida a los dos.</p>
  ${WARN("Sumar o restar el mismo número arriba y abajo: 1/2 → 2/3 ✗. Solo vale multiplicar o dividir.")}`)
],
komma: () => [
  K("La positietabel sigue tras la coma", `<p>Hasta ahora, la columna más pequeña era la de las unidades (E). Pero podemos seguir partiendo: después de la ${N("komma")} vienen columnas <b>cada vez 10 veces más pequeñas</b>:</p>
  <ul><li><b>t</b> · ${N("tiende")} (décima) = 0,1 = 1/10</li><li><b>h</b> · ${N("honderdste")} (centésima) = 0,01 = 1/100</li><li><b>d</b> · ${N("duizendste")} (milésima) = 0,001 = 1/1 000</li></ul>
  <p>Un número con coma es un ${N("kommagetal")} (número decimal). En Bélgica se escribe con coma: 3,45.</p>`),
  K("Verlo con la cuadrícula de 100", `<p>Imagina que la cuadrícula entera es <b>1 unidad</b>:</p><ul><li>Una fila = 1/10 = <b>0,1</b> (una ${N("tiende")})</li><li>Un cuadrito = 1/100 = <b>0,01</b> (una ${N("honderdste")})</li></ul>
  ${EX("1 fila + 2 cuadritos = 0,1 + 0,02 = <b>0,12</b>")}`, () => gridSVG(new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))),
  K("Ejemplo resuelto: 3,45", `${EX("3 en E → 3 unidades<br>4 en t → 4 décimas = 0,4<br>5 en h → 5 centésimas = 0,05<br>3 + 0,4 + 0,05 = <b>3,45</b>")}
  <p>Es exactamente como el dinero: 3,45 € son 3 euros y 45 ${N("cent")}, porque 1 € = 100 cent (cada cent es una centésima de euro).</p>
  <p>Se lee «drie komma vijfenveertig».</p>
  ${WARN("Olvidar el cero: 2 unidades y 7 centésimas es 2,07, no 2,7 (que serían 7 décimas).")}`),
  K("Decimales y fracciones", `<p>Cada decimal es una fracción con ${N("noemer")} 10, 100 o 1 000:</p>
  ${EX("0,7 = 7/10<br>0,07 = 7/100<br>0,25 = 25/100<br>1,3 = 13/10")}
  <p>En la siguiente tarjeta tienes un laboratorio: sube y baja cada columna y mira cómo cambian la cuadrícula, la recta, la fracción y el dinero.</p>`)
],
kommaordenen: () => [
  K("Comparar decimales", `<ol><li>Compara primero la parte entera (antes de la coma): 3,1 &gt; 2,9.</li><li>Si es igual, compara las décimas; si también, las centésimas.</li></ol>
  <p>El truco más útil: <b>iguala el número de cifras tras la coma añadiendo ceros</b> a la derecha (no cambia el valor):</p>
  ${EX("0,5 y 0,45<br>0,5 = 0,50 → 50 centésimas<br>0,45 → 45 centésimas<br><b>0,5 &gt; 0,45</b>")}
  ${WARN("Creer que 0,45 es mayor «porque tiene más cifras» o «porque 45 &gt; 5».")}`, () => `<div class="row">${gridSVG(50, { max: 120 })}${gridSVG(45, { max: 120 })}</div>`),
  K("Decimales en la recta numérica", `<p>Entre dos números enteros (por ejemplo 3 y 4) hay <b>10 saltos de 0,1</b>: 3,1 · 3,2 · … · 3,9 · 4.</p>
  <p>Si haces zoom entre 3,4 y 3,5, hay otros <b>10 saltos de 0,01</b>: 3,41 · 3,42 · … · 3,49.</p>`, () => lineSVG(3, 4, .1, { labelEvery: 5, point: 3.7, pointLabel: "3,7" })),
  K("Contar y redondear con decimales", `<p>Contar de décima en décima: 0,8 · 0,9 · <b>1</b> · 1,1 (diez décimas forman 1 unidad, igual que diez céntimos de 10 cent forman 1 €).</p>
  <p>Redondear al número entero más cercano: mira las décimas.</p>
  ${EX("8,43 → décimas 4 → hacia abajo → <b>8</b><br>8,51 → décimas 5 → hacia arriba → <b>9</b>")}`)
],
breukkomma: () => [
  K("Tres maneras de decir lo mismo", `<p>Una misma cantidad puede escribirse como fracción, como decimal o como porcentaje. ${N("Procent")} significa «de cada cien»: 50 % = 50/100.</p>
  ${EX("1/2 = 0,5 = 50 %<br>1/4 = 0,25 = 25 %<br>3/4 = 0,75 = 75 %<br>1/5 = 0,2 = 20 %<br>1/10 = 0,1 = 10 %<br>1/100 = 0,01 = 1 %")}
  <p>Conviene saberse esta tabla de memoria. El todo es 1 = 100 %.</p>`, () => gridSVG(25)),
  K("Calcular un porcentaje", `<p>Convierte el porcentaje en una fracción fácil:</p>
  ${EX("50 % de 80 = la mitad de 80 = <b>40</b><br>25 % de 80 = 1/4 de 80 = 80 : 4 = <b>20</b><br>10 % de 80 = 80 : 10 = <b>8</b><br>20 % de 80 = 2 × 10 % = <b>16</b>")}
  <p>En las rebajas: «−25 %» en un artículo de 40 € → te descuentan 10 € → pagas 30 €.</p>`)
],
/* ================= BEWERKINGEN ================= */
tafels: () => [
  K("Multiplicar es sumar grupos iguales", `<p>4 × 3 significa «4 grupos de 3»: 3 + 3 + 3 + 3 = 12. Se puede dibujar como un rectángulo de 4 filas y 3 columnas.</p>
  <p>Los números que se multiplican son ${N("factoren")} (factores) y el resultado es ${N("het product")}.</p>
  <p>El orden no importa: 4 × 3 = 3 × 4 (${N("wisseleigenschap")}). Así, si sabes 3 × 8, ya sabes 8 × 3.</p>`, () => `<svg viewBox="0 0 200 90" width="200">${[0, 1, 2, 3].map(r => [0, 1, 2].map(c => `<circle cx="${30 + c * 30}" cy="${15 + r * 20}" r="8" fill="#f6a04d"/>`).join("")).join("")}<text x="140" y="52" font-size="20" font-weight="700" fill="#1d2433">4 × 3</text></svg>`),
  K("Dividir: repartir o agrupar", `<p>${N("Delen")} (dividir) tiene dos sentidos:</p><ul><li><b>Repartir</b> (${N("verdelen")}): 12 caramelos entre 3 niños → 4 para cada uno.</li><li><b>Agrupar</b>: 12 caramelos en bolsas de 3 → 4 bolsas.</li></ul>
  <p>En Flandes se escribe con dos puntos: <b>12 : 3 = 4</b>. El resultado es ${N("het quotiënt")}.</p>
  <p>Dividir es la operación inversa de multiplicar. Para resolver 56 : 7 piensa: «7 × ▢ = 56» → 8.</p>`),
  K("Estrategias para las tablas difíciles", `<ul><li><b>× 2</b>: el doble.</li><li><b>× 4</b>: el doble del doble (7 × 4 = 14 × 2 = 28).</li><li><b>× 5</b>: la mitad de × 10 (8 × 5 = 80 : 2 = 40).</li><li><b>× 9</b>: × 10 y quita uno (9 × 7 = 70 − 7 = 63).</li><li><b>× 6</b>: × 5 y añade uno más (6 × 8 = 40 + 8 = 48).</li><li><b>Decenas</b>: 6 × 80 = 6 × 8 × 10 = 480.</li></ul>`)
],
hoofdrekenen: () => [
  K("Sumar de cabeza por partes", `<p>${N("Optellen")} (sumar) sin papel: añade el segundo número por partes, primero las decenas y luego las unidades.</p>
  ${EX("456 + 38<br>456 + 30 = 486<br>486 + 8 = <b>494</b>")}
  <p>O redondea y corrige (${N("compenseren")}): 456 + 40 = 496, pero he sumado 2 de más → 496 − 2 = <b>494</b>.</p>`),
  K("Restar de cabeza", `<p>${N("Aftrekken")} (restar) por partes: quita centenas, luego decenas, luego unidades.</p>
  ${EX("937 − 138<br>937 − 100 = 837<br>837 − 30 = 807<br>807 − 8 = <b>799</b>")}
  <p>El resultado de una resta es ${N("het verschil")} (la diferencia); el de una suma, ${N("de som")}.</p>`),
  K("Completar (aanvullen) y números grandes", `<p>Cuando los dos números están cerca, es más fácil <b>contar hacia arriba</b> desde el pequeño: ${N("aanvullen")}.</p>
  ${EX("962 − 950 → ¿cuánto falta de 950 a 962? → <b>12</b>")}
  <p>Con millares y centenas, calcula como si fueran unidades:</p>
  ${EX("4 500 + 2 700 = 45 H + 27 H = 72 H = <b>7 200</b>")}`)
],
slim: () => [
  K("Compensar (compenseren)", `<p>Cambia un número por otro más cómodo y luego corrige la diferencia.</p>
  ${EX("99 × 5 → 100 × 5 = 500, pero he puesto un 5 de más → 500 − 5 = <b>495</b>")}
  ${EX("398 + 57 → 400 + 57 = 457, pero he sumado 2 de más → <b>455</b>")}`),
  K("Cambiar el orden y agrupar", `<p>En sumas y multiplicaciones puedes:</p><ul><li>${N("Wisseleigenschap")}: cambiar el orden. 3 × 7 = 7 × 3.</li><li>${N("Schakeleigenschap")}: agrupar como quieras. (25 × 8) × 4 = 25 × (8 × 4).</li></ul>
  <p>Busca «parejas amigas» que dan números redondos: 25 × 4 = 100 · 5 × 2 = 10 · 50 × 2 = 100.</p>
  ${EX("25 × 8 × 4 = (25 × 4) × 8 = 100 × 8 = <b>800</b>")}`),
  K("Repartir la multiplicación (verdeeleigenschap)", `<p>Para multiplicar por un número grande, pártelo en trozos y multiplica cada trozo:</p>
  ${EX("7 × 23 = 7 × 20 + 7 × 3 = 140 + 21 = <b>161</b>")}
  <p>${N("Verdubbelen en halveren")}: si doblas un factor y divides el otro entre 2, el producto no cambia.</p>
  ${EX("16 × 5 = 8 × 10 = <b>80</b>")}`)
],
maal10: () => [
  K("× 10, × 100, × 1 000", `<p>Al multiplicar por 10 cada cifra <b>salta una columna a la izquierda</b> (vale diez veces más). Por 100, dos columnas; por 1 000, tres.</p>
  ${EX("34 × 100<br>el 3 pasa de T a D, el 4 pasa de E a H → <b>3 400</b>")}
  <p>Con números enteros parece que «se añaden ceros», pero lo que de verdad ocurre es que las cifras se desplazan.</p>`),
  K("Con decimales se ve la verdad", `${EX("3,4 × 10<br>el 3 pasa de E a T, el 4 pasa de t a E → <b>34</b>")}
  ${EX("0,25 × 100 = <b>25</b>")}
  ${WARN("Escribir 3,4 × 10 = 3,40. Añadir un cero tras la coma no cambia nada: 3,40 = 3,4.")}`),
  K(": 10, : 100, : 1 000", `<p>Al dividir, las cifras <b>saltan a la derecha</b>, una columna por cada cero:</p>
  ${EX("14 : 10 = <b>1,4</b><br>350 : 100 = <b>3,5</b><br>2 000 : 1 000 = <b>2</b>")}`)
],
rest: () => [
  K("Divisiones que no salen exactas", `<p>No todas las divisiones son exactas (${N("opgaande deling")}). A veces sobra algo: es ${N("de rest")}, el resto (${N("niet-opgaande deling")}).</p>
  ${EX("47 : 5<br>Caben 9 grupos de 5 (9 × 5 = 45)<br>Sobran 47 − 45 = 2<br>→ 47 : 5 = <b>9 rest 2</b>")}`),
  K("Cómo calcularlo", `<ol><li>Busca en la tabla del divisor el múltiplo más grande que <b>no pase</b> del número: para 47 y el 5 → 45.</li><li>Ese múltiplo te da el cociente: 45 = 9 × 5 → 9.</li><li>Resta para el resto: 47 − 45 = 2.</li></ol>
  <p>Dos comprobaciones:</p><ul><li>El resto siempre es <b>menor que el divisor</b> (si sobran 5 o más, cabía otro grupo).</li><li>Cociente × divisor + resto = número: 9 × 5 + 2 = 47 ✓.</li></ul>`),
  K("¡Cuidado en los problemas!", `<p>Lo que hay que hacer con el resto depende de la pregunta:</p>
  ${EX("33 huevos en cajas de 10 → 33 : 10 = 3 rest 3<br>«¿Cuántas cajas <b>llenas</b>?» → <b>3</b><br>«¿Cuántas cajas para guardarlos <b>todos</b>?» → <b>4</b> (los 3 que sobran necesitan otra caja)")}`)
],
cijferen: () => [
  K("Sumar en columna", `<p>${N("Cijferen")} es hacer la cuenta por escrito. Coloca los números con <b>E debajo de E, T debajo de T</b>, etc., y empieza siempre por la derecha.</p>
  <p>Si una columna suma 10 o más, escribe la unidad y <b>llévate 1</b> a la columna siguiente (${N("overschrijding")}).</p>
  ${EX("3 478 + 1 265<br>E: 8 + 5 = 13 → escribo 3, me llevo 1<br>T: 7 + 6 + 1 = 14 → escribo 4, me llevo 1<br>H: 4 + 2 + 1 = 7<br>D: 3 + 1 = 4<br>Resultado: <b>4 743</b>")}`, () => colCalc(3478, 1265, "+")),
  K("Restar en columna", `<p>De derecha a izquierda. Si arriba hay menos que abajo, ${N("inwisselen")}: cambias 1 de la columna de la izquierda por 10 en tu columna.</p>
  ${EX("5 302 − 1 275<br>E: 2 − 5 no se puede. T vale 0, así que voy a H: 3 H → 2 H + 10 T; luego 10 T → 9 T + 10 E. Ahora E: 12 − 5 = 7<br>T: 9 − 7 = 2<br>H: 2 − 2 = 0<br>D: 5 − 1 = 4<br>Resultado: <b>4 027</b>")}`),
  K("Estimar y comprobar", `<p>Antes de calcular, haz una estimación: 3 478 + 1 265 ≈ 3 500 + 1 300 = 4 800. Si tu resultado está muy lejos, revisa.</p>
  <p>Después, comprueba con la operación inversa:</p>
  ${EX("5 302 − 1 275 = 4 027 → 4 027 + 1 275 = 5 302 ✓")}`)
],
vermenigvuldigen: () => [
  K("Multiplicar por partes", `<p>Para multiplicar un número grande por uno pequeño, parte el grande en H, T y E, multiplica cada parte y suma:</p>
  ${EX("6 × 347<br>6 × 300 = 1 800<br>6 × 40 = 240<br>6 × 7 = 42<br>1 800 + 240 + 42 = <b>2 082</b>")}`),
  K("Dos cifras por dos cifras", `<p>Parte uno de los dos números en decenas y unidades:</p>
  ${EX("39 × 13<br>39 × 10 = 390<br>39 × 3 = 117<br>390 + 117 = <b>507</b>")}
  <p>Estima antes para comprobar: 40 × 13 = 520, así que 507 es razonable.</p>`),
  K("Dividir por partes", `<p>Parte el número en trozos que sean fáciles de dividir:</p>
  ${EX("156 : 4<br>120 : 4 = 30 (120 es fácil: 12 : 4 = 3)<br>Quedan 156 − 120 = 36 → 36 : 4 = 9<br>30 + 9 = <b>39</b>")}
  <p>Comprueba: 39 × 4 = 156 ✓.</p>`)
],
kommarekenen: () => [
  K("Coma debajo de coma", `<p>Para sumar o restar decimales, alinea las comas (${N("komma onder komma")}): décimas debajo de décimas, centésimas debajo de centésimas.</p>
  ${EX("3,45 + 1,8<br>escribe 1,8 como 1,80<br>h: 5 + 0 = 5 · t: 4 + 8 = 12 → 2, me llevo 1 · E: 3 + 1 + 1 = 5<br>Resultado: <b>5,25</b>")}
  ${WARN("Alinear por la derecha: 4,51 − 0,4 → «4,47» ✗. Lo correcto: 4,51 − 0,40 = 4,11.")}`, () => colCalc(3.45, 1.8, "+")),
  K("El dinero es el mejor ejemplo", `<p>Multiplicar un decimal por un número natural es una suma repetida:</p>
  ${EX("4 botellas a 4,90 €<br>4,90 es casi 5 → 4 × 5 = 20<br>pero cada botella cuesta 0,10 € menos → 20 − 0,40 = <b>19,60 €</b>")}`),
  K("Calcular el cambio", `<p>Para el ${N("wisselgeld")} (el cambio), cuenta hacia arriba desde el precio, como hace el cajero:</p>
  ${EX("Cuesta 16,78 € y pagas con 20 €<br>16,78 → 17: +0,22<br>17 → 20: +3<br>Cambio: <b>3,22 €</b>")}`)
],
breukrekenen: () => [
  K("Sumar fracciones con el mismo denominador", `<p>Si las dos fracciones tienen la misma ${N("noemer")}, los trozos son iguales: <b>suma las ${N("tellers")} y deja la ${N("noemer")}</b>.</p>
  ${EX("3/8 + 2/8 = 5/8<br>(3 octavos + 2 octavos = 5 octavos)")}
  <p>La ${N("noemer")} es como el «nombre» del trozo (octavos); no se suma, igual que 3 euros + 2 euros no son 5 «euros-euros».</p>
  ${WARN("Sumar también abajo: 3/8 + 2/8 = 5/16 ✗.")}`, () => barSVG(8, 3, { h: 24 }) + "<div class='mute'>+</div>" + barSVG(8, 2, { h: 24 }) + "<div class='mute'>=</div>" + barSVG(8, 5, { h: 24 })),
  K("Restar y completar hasta 1", `${EX("5/6 − 2/6 = <b>3/6</b>")}
  <p>¿Cuánto falta para el entero? Recuerda que 1 = 4/4 = 5/5 = 8/8…</p>
  ${EX("1/4 + ▢/4 = 1 → 1 = 4/4 → faltan <b>3/4</b>")}`),
  K("Una fracción de un número", `<p>Primero <b>divide entre la ${N("noemer")}</b> (para saber cuánto es una parte) y luego <b>multiplica por la ${N("teller")}</b>:</p>
  ${EX("3/4 de 20<br>20 : 4 = 5 (un cuarto)<br>5 × 3 = <b>15</b> (tres cuartos)")}
  ${EX("2/5 de 35 € → 35 : 5 = 7 → 7 × 2 = <b>14 €</b>")}`)
],
volgorde: () => [
  K("El orden de las operaciones", `<p>Cuando hay varias operaciones seguidas, se respeta este orden:</p><ol><li>Lo que está entre ${N("haakjes")} (paréntesis).</li><li>Multiplicaciones y divisiones, de izquierda a derecha.</li><li>Sumas y restas, de izquierda a derecha.</li></ol>
  ${EX("6 + 4 × 3<br>primero 4 × 3 = 12<br>después 6 + 12 = <b>18</b> (no 30)")}`),
  K("Los paréntesis mandan", `${EX("(6 + 4) × 3 = 10 × 3 = <b>30</b>")}
  ${EX("20 − 8 : 2 = 20 − 4 = <b>16</b><br>(20 − 8) : 2 = 12 : 2 = <b>6</b>")}
  <p>Si solo hay sumas y restas, se va de izquierda a derecha: 10 − 3 + 2 = 9 (no 5).</p>`),
  K("El signo igual es una balanza", `<p>El signo = (${N("het gelijkheidsteken")}) significa que <b>los dos lados valen lo mismo</b>, no «ahora viene el resultado».</p>
  ${EX("22 + ▢ = 25 + 17<br>lado derecho: 42<br>22 + ▢ = 42 → ▢ = <b>20</b>")}
  ${WARN("Escribir 47 (22 + 25) o 25: hay que mirar los dos lados.")}`)
],
schatten: () => [
  K("Estimar antes de calcular", `<p>${N("Schatten")} (estimar) es calcular rápido con números redondeados para saber, más o menos, cuánto dará. Se usa el signo ≈ (${N("ongeveer")}).</p>
  ${EX("398 + 511 ≈ 400 + 500 = <b>900</b><br>7 × 880 ≈ 7 × 900 = <b>6 300</b>")}`),
  K("Para qué sirve", `<p>Una estimación te avisa cuando algo va mal. Si calculas 7 × 880 y te sale 61 600, la estimación (≈ 6 300) te dice que te has equivocado: seguramente pusiste un cero de más.</p>
  <p>También sirve en la vida real: ¿me llega el dinero? ¿llego a tiempo?</p>`),
  K("Comprobar con la operación inversa", `<p>${N("Controleren")} con ${N("de omgekeerde bewerking")}: cada operación tiene su inversa.</p><ul><li>Suma ↔ resta</li><li>Multiplicación ↔ división</li></ul>
  ${EX("156 : 4 = 39 → compruebo: 39 × 4 = 156 ✓<br>903 − 467 = 436 → compruebo: 436 + 467 = 903 ✓")}`)
],
/* ================= METEN ================= */
lengte: () => [
  K("Las unidades de longitud", `<p>La unidad básica es ${N("de meter")} (m). Las demás se forman con prefijos y cada una vale <b>10 veces</b> la siguiente:</p>
  <ul><li><b>km</b> kilómetro = 1 000 m</li><li><b>hm</b> hectómetro = 100 m</li><li><b>dam</b> decámetro = 10 m</li><li><b>m</b> metro</li><li><b>dm</b> decímetro = 0,1 m</li><li><b>cm</b> centímetro = 0,01 m</li><li><b>mm</b> milímetro = 0,001 m</li></ul>
  <p>Las más usadas: km, m, cm y mm. Una medida (${N("de maat")}) tiene un número (${N("maatgetal")}) y una unidad (${N("maateenheid")}): 5 m.</p>`, () => `<table class="rt"><tr>${["km", "hm", "dam", "m", "dm", "cm", "mm"].map(u => `<td class="h">${u}</td>`).join("")}</tr></table>`),
  K("Cambiar de unidad (herleiden)", `<p>${N("Herleiden")} es expresar una medida en otra unidad:</p><ul><li>De una unidad <b>grande a una pequeña</b>: <b>multiplica</b> (× 10 por cada columna que avanzas).</li><li>De una <b>pequeña a una grande</b>: <b>divide</b>.</li></ul>
  ${EX("3 m → cm: dos columnas a la derecha → × 100 → <b>300 cm</b><br>75 000 m → km: tres columnas a la izquierda → : 1 000 → <b>75 km</b><br>5 m 68 cm = 500 cm + 68 cm = <b>568 cm</b>")}
  <p>Truco: escribe el número en la tabla de unidades, una cifra por columna.</p>`),
  K("Medidas de referencia", `<p>Para saber si un resultado tiene sentido, conviene tener referencias:</p><ul><li>1 mm: el grosor de una tarjeta de crédito.</li><li>1 cm: el ancho de un dedo.</li><li>1 m: un paso grande de adulto.</li><li>2 m: la altura de una puerta.</li><li>1 km: unos 12 minutos andando.</li></ul>
  ${WARN("Responder «el lápiz mide 18 m»: compara siempre con algo que conozcas.")}`)
],
massa: () => [
  K("Unidades de masa", `<p>Para el peso (${N("de massa")} o ${N("het gewicht")}) se usan:</p><ul><li><b>kg</b> ${N("kilogram")} = 1 000 g</li><li><b>hg</b> hectogramo = 100 g</li><li><b>dag</b> decagramo = 10 g</li><li><b>g</b> ${N("gram")}</li></ul>
  <p>1 kg = 10 hg = 100 dag = 1 000 g. Se pesa con ${N("de weegschaal")} (balanza o báscula).</p>`),
  K("Cambiar de unidad", `<p>Igual que con la longitud: hacia la unidad pequeña multiplicas, hacia la grande divides.</p>
  ${EX("5 kg 970 g = 5 000 g + 970 g = <b>5 970 g</b><br>3 500 g = 3 500 : 1 000 = <b>3,5 kg</b><br>2 hg = <b>200 g</b>")}`),
  K("Referencias", `<ul><li>Un paquete de azúcar: <b>1 kg</b>.</li><li>Una tableta de chocolate: unos <b>100 g</b> (1 hg).</li><li>Una manzana: unos <b>150 g</b>.</li><li>Una hoja de papel: unos <b>5 g</b>.</li><li>Una persona adulta: unos <b>70 kg</b>.</li></ul>`)
],
inhoud: () => [
  K("Unidades de capacidad", `<p>${N("De inhoud")} (capacidad) es cuánto líquido cabe en un recipiente. La unidad es ${N("de liter")} (l):</p><ul><li><b>l</b> litro</li><li><b>dl</b> decilitro = 0,1 l</li><li><b>cl</b> ${N("centiliter")} = 0,01 l</li><li><b>ml</b> mililitro = 0,001 l</li></ul>
  <p>1 l = 10 dl = 100 cl = 1 000 ml.</p>`),
  K("Cambiar de unidad", `${EX("2 l = <b>200 cl</b><br>4 200 cl = 4 200 : 100 = <b>42 l</b><br>4 vasos de 25 cl = 100 cl = <b>1 l</b>")}
  <p>${N("Het volume")} (volumen) es algo distinto: el espacio que ocupa un objeto. Una piedra tiene volumen pero no «capacidad».</p>`),
  K("Referencias", `<ul><li>Una botella de leche: <b>1 l</b>.</li><li>Una lata de refresco: <b>33 cl</b>.</li><li>Un vaso: unos <b>25 cl</b>.</li><li>Una cucharilla: unos <b>5 ml</b>.</li><li>Una bañera llena: unos <b>150 l</b>.</li></ul>`)
],
omtrek: () => [
  K("Perímetro (omtrek)", `<p>${N("De omtrek")} es la <b>longitud del borde</b> de una figura: lo que medirías si recorrieras su contorno. Se calcula sumando todos los lados y se da en unidades de longitud (cm, m).</p>
  ${EX("Rectángulo de 5 cm × 3 cm<br>5 + 3 + 5 + 3 = <b>16 cm</b><br>Cuadrado de lado 4 cm: 4 × 4 = <b>16 cm</b>")}`, () => rectGrid(5, 3, { labels: ["5 cm", "3 cm"] })),
  K("Área (oppervlakte)", `<p>${N("De oppervlakte")} es la <b>superficie</b> que ocupa la figura: cuántos cuadrados de 1 cm × 1 cm caben dentro. Se da en unidades cuadradas: <b>cm²</b>, <b>m²</b>.</p>
  <p>Para un rectángulo: ${N("basis")} × ${N("hoogte")} (base × altura).</p>
  ${EX("Rectángulo de 5 cm × 3 cm<br>3 filas de 5 cuadrados = 5 × 3 = <b>15 cm²</b>")}
  ${WARN("Confundir perímetro (el borde, cm) con área (el interior, cm²).")}`),
  K("Figuras compuestas y unidades", `<p>Una figura en forma de L se parte en dos rectángulos, o se calcula el rectángulo grande y se resta el trozo que falta.</p>
  <p>Curiosidad útil: una L tiene el <b>mismo perímetro</b> que el rectángulo que la contiene (el escalón «mueve» los lados pero no cambia su suma).</p>
  <p>Las unidades de área van de 100 en 100: <b>1 m² = 100 dm² = 10 000 cm²</b>, porque un cuadrado de 1 m de lado tiene 10 × 10 cuadrados de 1 dm.</p>`, () => rectGrid(7, 5, { cut: [3, 2] }))
],
geld: () => [
  K("Monedas y billetes", `<p>1 euro = 100 ${N("cent")}. Hay ${N("munten")} (monedas) de 1, 2, 5, 10, 20 y 50 cent, y de 1 € y 2 €. Los ${N("briefjes")} (billetes) son de 5, 10, 20, 50, 100, 200 €.</p>
  <p>Se escribe con coma: 2,35 € = 2 euros y 35 cent.</p>`, () => moneySVG([200, 100, 50, 20, 10, 5, 2, 1, 500, 1000])),
  K("Contar dinero", `<p>Empieza siempre por lo de <b>más valor</b> y ve sumando:</p>
  ${EX("Un billete de 10 €, dos monedas de 2 € y tres de 20 cent<br>10 + 4 = 14 €<br>+ 60 cent = <b>14,60 €</b>")}
  <p>Para el ${N("totaalprijs")} (precio total), suma euros con euros y cent con cent; si los cent pasan de 100, forman un euro más.</p>`),
  K("Dar el cambio", `<p>El ${N("wisselgeld")} se calcula contando hacia arriba desde el precio hasta lo que has pagado (${N("aanvullen")}):</p>
  ${EX("Cuesta 2,94 € y pagas con 5 €<br>2,94 → 3,00: 6 cent<br>3 → 5: 2 €<br>Cambio: <b>2,06 €</b>")}`)
],
klok: () => [
  K("Leer el reloj de agujas", `<p>El reloj tiene dos ${N("wijzers")} (agujas):</p><ul><li>La <b>corta</b> marca la <b>hora</b>.</li><li>La <b>larga</b> marca los <b>minutos</b>: cada número son 5 minutos (en el 1 → 5 min, en el 3 → 15 min, en el 6 → 30 min).</li></ul>
  <p>La aguja corta se mueve poco a poco: a las 5:45 está casi en el 6.</p>`, () => clockSVG(3, 15)),
  K("¡Cuidado con «half»!", `<p>En neerlandés las horas se dicen mirando a la hora <b>siguiente</b> en la media hora:</p>
  ${EX(`3:00 → ${N("drie uur")}<br>3:15 → ${N("kwart over drie")} (cuarto después de las 3)<br>3:30 → ${N("half vier")} (¡media hacia las 4!)<br>3:45 → ${N("kwart voor vier")} (cuarto antes de las 4)<br>3:25 → ${N("vijf voor half vier")}<br>3:35 → ${N("vijf over half vier")}`)}
  ${WARN("Traducir «half vier» como 4:30. Es 3:30. En español decimos «las tres y media»; en neerlandés, «media (hora) hacia las cuatro».")}`, () => clockSVG(3, 30)),
  K("Reloj digital: 24 horas", `<p>En los relojes digitales y los horarios del tren, la tarde va de 12 a 23:</p>
  ${EX("3:15 de la tarde = <b>15:15</b> (sumas 12)<br>21:45 = las 9:45 de la noche")}
  <p>Por la mañana se dice ${N("'s morgens")}, por la tarde ${N("'s middags")} y por la noche ${N("'s avonds")}.</p>`)
],
duur: () => [
  K("Momento y duración", `<p>«A las 3» es un <b>momento</b>. «Durante 3 horas» es una <b>duración</b> (${N("tijdsduur")}).</p>
  ${EX(`1 ${N("uur")} = 60 ${N("minuten")}<br>1 ${N("minuut")} = 60 ${N("seconden")}<br>1 día = 24 horas`)}
  ${EX("2 uur 15 minuten = 120 + 15 = <b>135 minuten</b>")}`),
  K("Calcular duraciones", `<p>Pasa primero por la hora en punto:</p>
  ${EX("De 9:55 a 10:48<br>9:55 → 10:00: 5 min<br>10:00 → 10:48: 48 min<br>Total: <b>53 minutos</b>")}
  ${EX("Empieza a las 9:55 y dura 53 min<br>9:55 + 5 = 10:00; quedan 48 → <b>10:48</b>")}
  ${WARN("Contar como si una hora tuviera 100 minutos: 9:55 + 53 = «10:08» ✗.")}`),
  K("El calendario", `<p>Un año tiene 365 días; un ${N("schrikkeljaar")} (bisiesto), 366, con el 29 de ${N("februari")}. Ocurre cada 4 años (2024, 2028…).</p>
  <p>Meses con 31 días: januari, maart, mei, juli, augustus, oktober, december. Con 30: april, juni, september, november. Februari: 28 (o 29).</p>
  <p>${N("Eergisteren")} (anteayer) · ${N("gisteren")} (ayer) · ${N("vandaag")} (hoy) · ${N("morgen")} (mañana) · ${N("overmorgen")} (pasado mañana).</p>
  <p>Días: maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag.</p>`)
],
temperatuur: () => [
  K("Grados Celsius", `<p>La temperatura se mide en ${N("graden Celsius")} (°C) con ${N("de thermometer")}.</p><ul><li><b>0 °C</b>: el agua se congela (${N("het vriespunt")}).</li><li><b>100 °C</b>: el agua hierve.</li><li><b>37 °C</b>: el cuerpo humano.</li><li><b>20 °C</b>: una habitación agradable.</li></ul>`, () => thermoSVG(20)),
  K("Leer un termómetro", `<p>Mira primero cuánto vale cada rayita (normalmente 1 °C; las largas, 5 o 10). Después busca dónde acaba la columna roja y cuenta desde la rayita larga más cercana.</p>
  <p>Por debajo del 0, los números son negativos: −5 °C se lee «vijf graden onder nul».</p>`),
  K("Diferencias de temperatura", `${EX("De 4 °C a 11 °C → sube <b>7 grados</b>")}
  ${EX("De −3 °C a 10 °C<br>de −3 a 0: 3 grados<br>de 0 a 10: 10 grados<br>sube <b>13 grados</b>")}`)
],
hoeken: () => [
  K("¿Qué es un ángulo?", `<p>Un ${N("hoek")} (ángulo) se forma cuando dos líneas (${N("benen")}, los lados) salen del mismo punto (${N("het hoekpunt")}, el vértice).</p>
  <p>El tamaño del ángulo es <b>cuánto se abren</b> las líneas, no lo largas que sean.</p>`, () => angleSVG(60)),
  K("Tres tipos", `<ul><li>${N("Rechte hoek")} (recto): como la esquina de un folio. Se marca con un cuadradito.</li><li>${N("Scherpe hoek")} (agudo): más cerrado que el recto.</li><li>${N("Stompe hoek")} (obtuso): más abierto que el recto (pero sin llegar a ser una línea recta).</li></ul>
  <p>Truco: pon la esquina de una hoja de papel en el vértice. Si el ángulo cabe dentro, es agudo; si sobresale, obtuso.</p>`, () => `<div class="row">${angleSVG(45).replace('width="230"', 'width="105"')}${angleSVG(90).replace('width="230"', 'width="105"')}${angleSVG(135).replace('width="230"', 'width="105"')}</div>`),
  K("Ángulos en el reloj", `${EX("A las 3:00 las agujas forman un ángulo <b>recto</b><br>A la 1:00, uno <b>agudo</b><br>A las 5:00, uno <b>obtuso</b><br>A las 6:00 forman una línea recta")}`)
],
verhouding: () => [
  K("Cantidades que van juntas", `<p>Muchas cantidades crecen a la vez: si compras el doble de kilos, pagas el doble. Se dice que son ${N("evenredig")} (proporcionales).</p>
  <p>${N("De verhoudingstabel")} (tabla de proporcionalidad) las ordena en dos filas.</p>`, () => ratioTable(["kg", "€"], [[2, 4, 6], [6, 12, "?"]])),
  K("La regla de oro", `<p><b>Lo que haces en una fila, lo haces en la otra.</b> Puedes multiplicar, dividir o sumar columnas.</p>
  ${EX("2 kg → 6 €<br>× 2: 4 kg → 12 €<br>× 3: 6 kg → <b>18 €</b><br>o sumando columnas: 2 kg + 4 kg → 6 € + 12 €")}
  <p>Casi siempre funciona <b>pasar por 1</b>: 2 kg → 6 €, así que 1 kg → 3 €, y 7 kg → 21 €.</p>`),
  K("Ejemplo: una receta", `${EX("Para 2 personas: 200 g de harina<br>Para 6 personas: 2 × 3 = 6 → 200 × 3 = <b>600 g</b>")}
  ${EX("5 entradas cuestan 25 € → 1 entrada: 25 : 5 = <b>5 €</b>")}`)
],
/* ================= MEETKUNDE ================= */
lijnen: () => [
  K("Recta, semirrecta, segmento", `<ul><li>${N("De rechte")} (recta): sigue sin fin por los dos lados. Se dibuja con flechas.</li><li>${N("De halfrechte")} (semirrecta): empieza en un punto y sigue sin fin por un lado. Como un rayo de luz.</li><li>${N("Het lijnstuk")} (segmento): tiene dos extremos. Es el único que se puede medir.</li></ul>`, () => linesSVG("rechte") + linesSVG("halfrechte") + linesSVG("lijnstuk")),
  K("Cómo están dos rectas", `<ul><li>${N("Evenwijdig")} (paralelas, ∥): nunca se cortan, siempre a la misma distancia. Como las vías del tren.</li><li>${N("Loodrecht")} (perpendiculares, ⊥): se cortan formando un ángulo recto. Como una cruz o la esquina de una ventana.</li><li>${N("Snijdend")} (secantes): se cortan, pero sin ángulo recto.</li></ul>
  <p>Las perpendiculares también son secantes, pero de un tipo especial.</p>`, () => linesSVG("evenwijdig") + linesSVG("loodrecht")),
  K("Los símbolos", `${EX("a ∥ b → «a es paralela a b»<br>a ⊥ b → «a es perpendicular a b»")}
  <p>Truco: ∥ parece dos vías de tren; ⊥ parece una T, con su ángulo recto.</p>`)
],
driehoeken: () => [
  K("Clasificar por los lados", `<ul><li>${N("Gelijkzijdig")} (equilátero): los 3 lados iguales.</li><li>${N("Gelijkbenig")} (isósceles): 2 lados iguales.</li><li>${N("Ongelijkbenig")} (escaleno): ningún lado igual.</li></ul>
  <p>En los dibujos, las rayitas naranjas marcan los lados iguales.</p>`, () => `<div class="row">${shape("gelijkzijdig").replace('width="220"', 'width="105"')}${shape("gelijkbenig").replace('width="220"', 'width="105"')}${shape("ongelijkbenig").replace('width="220"', 'width="105"')}</div>`),
  K("Clasificar por los ángulos", `<ul><li>${N("Rechthoekig")} (rectángulo): tiene un ángulo recto.</li><li>${N("Stomphoekig")} (obtusángulo): tiene un ángulo obtuso.</li><li>${N("Scherphoekig")} (acutángulo): sus tres ángulos son agudos.</li></ul>
  <p>Busca el ángulo más grande del triángulo: decide el tipo.</p>`, () => `<div class="row">${shape("rechthoekig").replace('width="220"', 'width="105"')}${shape("stomphoekig").replace('width="220"', 'width="105"')}${shape("scherphoekig").replace('width="220"', 'width="105"')}</div>`),
  K("Las dos clasificaciones se combinan", `<p>Todo triángulo tiene un nombre por sus lados y otro por sus ángulos:</p>
  ${EX("Un triángulo puede ser <b>gelijkbenig y rechthoekig</b> a la vez (como media hoja cuadrada cortada por la diagonal).<br>Un triángulo equilátero siempre es también acutángulo.")}
  <p>Un triángulo <b>nunca</b> puede tener dos ángulos rectos ni dos obtusos: no cerraría.</p>`)
],
vierhoeken: () => [
  K("Cuadriláteros con lados paralelos", `<p>Un ${N("vierhoek")} es cualquier figura de 4 lados. Los más importantes:</p><ul><li>${N("Trapezium")} (trapecio): <b>un par</b> de lados paralelos.</li><li>${N("Parallellogram")} (paralelogramo): <b>dos pares</b> de lados paralelos.</li></ul>`, () => `<div class="row">${shape("trapezium").replace('width="220"', 'width="140"')}${shape("parallellogram").replace('width="220"', 'width="140"')}</div>`),
  K("Rectángulo, rombo y cuadrado", `<ul><li>${N("Rechthoek")} (rectángulo): 4 ángulos rectos.</li><li>${N("Ruit")} (rombo): 4 lados iguales.</li><li>${N("Vierkant")} (cuadrado): 4 ángulos rectos <b>y</b> 4 lados iguales.</li></ul>`, () => `<div class="row">${shape("rechthoek").replace('width="220"', 'width="100"')}${shape("ruit").replace('width="220"', 'width="90"')}${shape("vierkant").replace('width="220"', 'width="100"')}</div>`),
  K("Una familia", `<p>Las propiedades se heredan:</p>
  ${EX("Todo vierkant es una rechthoek (tiene 4 ángulos rectos) <b>y</b> una ruit (tiene 4 lados iguales).<br>Toda rechthoek y toda ruit son parallellogrammen.<br>Pero no al revés: no toda rechthoek es un vierkant.")}
  <p>Todos los cuadriláteros tienen 2 ${N("diagonalen")}: los segmentos que unen vértices opuestos.</p>`)
],
veelhoeken: () => [
  K("Polígonos", `<p>Un ${N("veelhoek")} (polígono, literalmente «muchos ángulos») es una figura plana cerrada con lados rectos. Se nombra por su número de ${N("zijden")} (lados):</p>
  <ul><li>3 → ${N("driehoek")}</li><li>4 → ${N("vierhoek")}</li><li>5 → ${N("vijfhoek")} (pentágono)</li><li>6 → ${N("zeshoek")} (hexágono)</li><li>8 → ${N("achthoek")} (octógono)</li></ul>
  <p>Un círculo no es un polígono: no tiene lados rectos.</p>`, () => shape("zeshoek")),
  K("Polígonos regulares", `<p>Un polígono es ${N("regelmatig")} (regular) si <b>todos sus lados y todos sus ángulos son iguales</b>.</p>
  ${EX("La señal de STOP es un octógono regular.<br>Las celdas de un panal son hexágonos regulares.<br>Un cuadrado es un cuadrilátero regular; un rectángulo alargado, no.")}`)
],
ruimte: () => [
  K("Cuerpos geométricos", `<p>Son figuras en 3D (${N("ruimtefiguren")}):</p><ul><li>${N("Kubus")} (cubo): un dado.</li><li>${N("Balk")} (ortoedro): una caja de zapatos.</li><li>${N("Cilinder")}: una lata.</li><li>${N("Kegel")} (cono): un cucurucho.</li><li>${N("Bol")} (esfera): una pelota.</li><li>${N("Piramide")}: base y caras triangulares que se juntan en un punto.</li></ul>`, () => `<div class="row">${solidSVG("kubus").replace('width="200"', 'width="100"')}${solidSVG("cilinder").replace('width="200"', 'width="100"')}${solidSVG("kegel").replace('width="200"', 'width="100"')}</div>`),
  K("Caras, aristas y vértices", `<ul><li>${N("Vlakken")}: caras.</li><li>${N("Ribben")}: aristas (donde se juntan dos caras).</li><li>${N("Hoekpunten")}: vértices (las esquinas).</li></ul>
  ${EX("Kubus: 6 caras, 12 aristas, 8 vértices<br>Piramide de base cuadrada: 5 caras, 8 aristas, 5 vértices")}`),
  K("Vistas (aanzichten)", `<p>Un ${N("aanzicht")} es cómo se ve un objeto desde un lado:</p><ul><li>${N("Bovenaanzicht")}: desde arriba.</li><li>${N("Vooraanzicht")}: desde delante.</li><li>${N("Zijaanzicht")}: desde un lado.</li></ul>
  ${EX("Cilinder: desde arriba, un círculo; desde delante, un rectángulo.<br>Kegel: desde arriba, un círculo; desde delante, un triángulo.")}`)
],
symmetrie: () => [
  K("Eje de simetría", `<p>Una ${N("symmetrieas")} es una línea que parte una figura en <b>dos mitades que coinciden</b> cuando doblas la figura por ella, como un espejo.</p>
  <p>Prueba mental: ¿si doblo por esta línea, las dos mitades encajan exactamente?</p>`, () => polySVG(SHAPES.rechthoek().pts, { lines: [[110, 25, 110, 150], [5, 87, 215, 87]] })),
  K("¿Cuántos ejes?", `${EX("Cuadrado: 4 (2 por el medio y 2 diagonales)<br>Rectángulo: 2 (solo por el medio)<br>Triángulo equilátero: 3<br>Triángulo isósceles: 1<br>Paralelogramo: 0<br>Círculo: infinitos")}
  ${WARN("Creer que la diagonal de un rectángulo es eje de simetría. Al doblar, las puntas no coinciden.")}`),
  K("Reflejar en una cuadrícula", `<p>Para dibujar el ${N("spiegelbeeld")} (imagen reflejada), cada punto se lleva <b>al otro lado del eje, a la misma distancia</b> y a la misma altura.</p>
  ${EX("Eje vertical entre C y D. Un cuadro en B3 (a 2 casillas del eje) → su reflejo está a 2 casillas al otro lado: <b>E3</b>")}`, () => coordSVG(1, 2, { mirror: 3, cells: [[1, 2], [4, 2]] }))
],
transformaties: () => [
  K("Tres movimientos", `<ul><li>${N("Verschuiving")} (traslación): la figura se desliza, sin girar.</li><li>${N("Draaiing")} (giro): la figura gira alrededor de un punto.</li><li>${N("Spiegeling")} (reflexión): la figura se refleja como en un espejo y queda «del revés».</li></ul>
  <p>La figura de partida es ${N("het origineel")} y la nueva, ${N("het beeld")}.</p>`, () => transfoSVG("verschuiving")),
  K("Cómo reconocerlos", `<ul><li>¿La figura mira hacia el mismo lado? → <b>verschuiving</b>.</li><li>¿Está inclinada o tumbada? → <b>draaiing</b>.</li><li>¿Está al revés, como en un espejo? → <b>spiegeling</b>.</li></ul>
  <p>Fíjate en un detalle asimétrico (la «banderita»): hacia dónde apunta antes y después.</p>`, () => transfoSVG("draaiing")),
  K("Lo que nunca cambia", `<p>En los tres movimientos la figura conserva <b>su forma y su tamaño</b>. Solo cambia su posición o su orientación.</p>`)
],
coordinaten: () => [
  K("Casillas con nombre", `<p>Una ${N("coördinaat")} indica una casilla de una cuadrícula (${N("rooster")}) con <b>una letra y un número</b>, como en el juego de los barcos:</p><ul><li>La letra es la ${N("kolom")} (columna), abajo.</li><li>El número es la ${N("rij")} (fila), a la izquierda.</li></ul>
  ${EX("C4 → columna C, fila 4")}`, () => coordSVG(2, 3)),
  K("Primero la letra", `<p>El orden importa: <b>primero la letra (horizontal), luego el número (vertical)</b>. C4 y D3 son casillas distintas.</p>
  <p>Moverse a la derecha o izquierda cambia la letra; moverse arriba o abajo cambia el número.</p>
  ${EX("Desde C4, una casilla a la derecha → <b>D4</b><br>Desde C4, una hacia arriba → <b>C5</b>")}`)
],
patronen: () => [
  K("Patrones que se repiten", `<p>En un patrón ${N("herhalend")} (que se repite) hay un bloque, ${N("de eenheid")}, que se copia una y otra vez.</p>
  ${EX("▲ ● ● ▲ ● ● ▲ ● ● …<br>La unidad es «▲ ● ●» (3 elementos)")}
  <p>Para saber qué viene después, marca dónde empieza cada repetición de la unidad.</p>`),
  K("Patrones que cambian", `<p>En un patrón ${N("veranderend")} hay una <b>regla</b> que se aplica cada vez:</p>
  ${EX("3 · 10 · 17 · 24 → +7 cada vez → <b>31</b><br>3 · 6 · 12 · 24 → ×2 cada vez → <b>48</b>")}
  <p>Método: calcula la diferencia entre números seguidos. Si no es constante, prueba con multiplicar.</p>`)
],
verzamelingen: () => [
  K("Conjuntos", `<p>Una ${N("verzameling")} (conjunto) es un grupo de cosas que cumplen una condición: «los números pares», «los múltiplos de 3». Un elemento ${N("behoort tot")} (pertenece a) el conjunto si cumple la condición.</p>
  <p>Una ${N("deelverzameling")} (subconjunto) es un conjunto dentro de otro: los múltiplos de 4 están todos dentro de los pares.</p>`),
  K("Diagrama de Venn", `<p>Cada conjunto es un círculo. La zona donde se cruzan contiene lo que cumple <b>las dos</b> condiciones; fuera de los círculos, lo que no cumple ninguna.</p>
  ${EX("A = pares, B = múltiplos de 3<br>6 y 12 → en los dos (zona común)<br>4 y 8 → solo en A<br>3 y 9 → solo en B<br>5 → fuera de los dos")}`, () => `<svg viewBox="0 0 260 150" width="260"><circle cx="100" cy="75" r="60" fill="#f6a04d" fill-opacity=".35" stroke="#e0701a" stroke-width="2.5"/><circle cx="160" cy="75" r="60" fill="#3b7be0" fill-opacity=".25" stroke="#3b7be0" stroke-width="2.5"/><text x="70" y="20" font-size="13" fill="#9a4a0b">A: even</text><text x="160" y="20" font-size="13" fill="#1d4f9a">B: veelvoud van 3</text><text x="62" y="80" font-size="16">4 8</text><text x="116" y="80" font-size="16" font-weight="700">6 12</text><text x="178" y="80" font-size="16">3 9</text></svg>`),
  K("Todos, algunos, ninguno", `<ul><li>${N("Alle")} (todos): basta <b>un solo contraejemplo</b> para que sea falso.</li><li>${N("Sommige")} (algunos): basta <b>un ejemplo</b> para que sea verdadero.</li><li>${N("Geen")} (ninguno): basta un ejemplo que lo cumpla para que sea falso.</li></ul>
  ${EX("«Alle even getallen zijn veelvouden van 4» → falso: 6 es par y no es múltiplo de 4.")}`)
],
/* ================= STATISTIEK ================= */
diagrammen: () => [
  K("Tablas y diagramas de barras", `<p>Una ${N("tabel")} ordena datos en filas y columnas. Un ${N("staafdiagram")} (diagrama de barras) los dibuja: cuanto más alta la barra, mayor el valor.</p>
  <p>Para leerlo:</p><ol><li>Mira cuánto vale cada línea del eje vertical (de 1 en 1, de 2 en 2, de 5 en 5…).</li><li>Sigue el borde superior de la barra hasta el eje.</li><li>Si queda entre dos líneas, está a mitad de camino.</li></ol>`, () => barChart(["appel", "peer", "banaan", "kiwi"], [12, 7, 15, 4])),
  K("Pictogramas", `<p>En un ${N("pictogram")} cada dibujo representa una cantidad, que se indica en ${N("de legende")} (la leyenda).</p>
  ${EX("● = 5 libros<br>●●●● → 4 × 5 = <b>20 libros</b>")}
  ${EX("● = 2 libros, ◐ (medio dibujo) = 1 libro<br>●●●◐ → 3 × 2 + 1 = <b>7 libros</b>")}`),
  K("Gráficos de líneas", `<p>Una ${N("lijngrafiek")} muestra cómo <b>cambia</b> algo con el tiempo: la temperatura durante el día, tu peso durante el año…</p>
  <p>Para leer un valor: busca el momento en el eje horizontal, sube hasta el punto y mira a la izquierda. Si la línea sube, el valor aumenta; si baja, disminuye.</p>`, () => lineGraph(["8u", "10u", "12u", "14u", "16u"], [6, 10, 16, 18, 14], 2))
],
cirkeldiagram: () => [
  K("El diagrama de sectores", `<p>En un ${N("cirkeldiagram")} el círculo entero es el total (el 100 %). Cada sector es una parte, una fracción del total.</p>
  <p>Fracciones que se reconocen a simple vista: media tarta = 1/2; un cuarto = 1/4; un octavo = 1/8.</p>`, () => pieSVG([2, 1, 1], ["fiets (1/2)", "bus (1/4)", "te voet (1/4)"])),
  K("Pasar de fracción a personas", `<p>Si sabes cuántas personas hay en total, multiplica la fracción por ese total:</p>
  ${EX("40 alumnos. 1/4 viene en bus<br>40 : 4 = <b>10 alumnos</b> en bus<br>1/2 en bici → 40 : 2 = <b>20 alumnos</b>")}`)
],
kans: () => [
  K("¿Qué es la probabilidad?", `<p>${N("De kans")} (probabilidad) dice lo fácil o difícil que es que pase algo. Se calcula así:</p>
  ${EX(`${N("kans")} = casos ${N("gunstig")} (favorables) / casos ${N("mogelijk")} (posibles)`)}
  ${EX(`Bolsa con 3 bolas rojas y 5 azules (8 en total)<br>${N("kans")} de roja = <b>3/8</b><br>${N("kans")} de azul = <b>5/8</b>`)}`, () => bagSVG({ rood: 3, blauw: 5 })),
  K("Seguro, posible, imposible", `<ul><li>${N("Zeker")} (seguro): pasa siempre → probabilidad 1. Sacar un número menor que 7 con un dado.</li><li>${N("Onmogelijk")} (imposible): no pasa nunca → probabilidad 0. Sacar un 7 con un dado.</li><li>${N("Mogelijk")} (posible): puede pasar o no. Sacar un 6.</li></ul>
  <p>El color con más bolas es el que tiene más probabilidad de salir.</p>`),
  K("Con un dado", `<p>Un dado tiene 6 caras: 1, 2, 3, 4, 5, 6. Hay 6 casos posibles.</p>
  ${EX(`${N("kans")} de un 6 = <b>1/6</b><br>${N("kans")} de un número par (2, 4, 6) = <b>3/6</b> = 1/2<br>${N("kans")} de un número mayor que 4 (5, 6) = <b>2/6</b>`)}`)
],
/* ================= VRAAGSTUKKEN ================= */
stappenplan: () => [
  K("Cuatro pasos para cualquier problema", `<ol><li><b>Entender</b>: cuéntate el problema con tus palabras. ¿Qué está pasando?</li><li><b>Datos y pregunta</b>: ¿qué sé (${N("gegeven")}) y qué me preguntan (${N("gevraagd")})?</li><li><b>Plan y cálculo</b>: ¿qué operación? Si dudas, haz un dibujo, una tabla o un esquema (${N("een schets maken")}).</li><li><b>Comprobar</b> (${N("controleren")}): ¿la respuesta tiene sentido? ¿responde a la pregunta?</li></ol>`),
  K("Datos que sobran", `<p>Los problemas a veces traen datos que no hacen falta, para que pienses.</p>
  ${EX("«Un panadero de 46 años hace 20 panes por la mañana y 11 por la tarde. ¿Cuántos panes hace?»<br>Datos útiles: 20 y 11 → 20 + 11 = <b>31</b><br>Dato que sobra: la edad")}`),
  K("Elegir la operación", `<ul><li>Juntar, en total → <b>sumar</b>.</li><li>Quitar, cuánto queda, cuánto más / menos → <b>restar</b>.</li><li>Varias veces lo mismo, cada uno… en total → <b>multiplicar</b>.</li><li>Repartir a partes iguales, cuántos grupos → <b>dividir</b>.</li></ul>
  <p>Comprobar no es opcional: si un aula te mide 340 m, algo ha fallado (seguramente las unidades).</p>`)
],
eenvoudig: () => [
  K("Problemas de una operación", `<p>Lee la pregunta y decide qué operación pide la situación:</p>
  ${EX(`«La escuela tiene 1 490 libros y compra 323 más. ¿Cuántos tiene ${N("samen")} (en total)?» → juntar → 1 490 + 323 = <b>1 813</b>`)}
  ${EX("«Un bus lleva 77 pasajeros. ¿Cuántos llevan 8 buses?» → 8 veces lo mismo → 8 × 77 = <b>616</b>")}`),
  K("Comparar", `<p>«¿Cuántos más?» o «¿cuánto más lejos?» es una <b>resta</b>, aunque la palabra sea «más»:</p>
  ${EX("Gent está a 366 km, Brugge a 636 km. ¿Cuántos km más lejos está Brugge?<br>636 − 366 = <b>270 km</b>")}
  ${WARN("Sumar porque aparece la palabra «más». Piensa en la situación, no solo en las palabras.")}`)
],
samengesteld: () => [
  K("Problemas de varios pasos", `<p>Un problema ${N("samengesteld")} necesita más de una operación. La clave es encontrar ${N("de tussenstap")}: lo que necesitas saber antes de poder responder.</p>
  ${EX("«3 cajas de 12 huevos. Se rompen 5. ¿Cuántos quedan?»<br>Paso 1 (cuántos había): 3 × 12 = 36<br>Paso 2 (cuántos quedan): 36 − 5 = <b>31</b>")}`),
  K("Escribe cada paso", `<p>Escribe cada paso con su significado. Así no te pierdes:</p>
  ${EX("«Compras 3 cuadernos de 4 € y 2 bolis de 3 €. Pagas con 20 €. ¿Cambio?»<br>Cuadernos: 3 × 4 = 12 €<br>Bolis: 2 × 3 = 6 €<br>Total: 12 + 6 = 18 €<br>Cambio: 20 − 18 = <b>2 €</b>")}
  <p>Fíjate en las palabras «ida y vuelta», «cada día», «por semana»: suelen esconder un paso más.</p>`)
],
verhoudingvraag: () => [
  K("Pasar por la unidad", `<p>En los problemas de proporcionalidad, lo más seguro es calcular primero <b>cuánto vale 1</b> (un kilo, una entrada, un minuto) y luego multiplicar.</p>
  ${EX("4 kg de tomates cuestan 24 €. ¿Y 9 kg?<br>1 kg: 24 : 4 = 6 €<br>9 kg: 9 × 6 = <b>54 €</b>")}`, () => ratioTable(["kg", "€"], [[4, 1, 9], [24, 6, "?"]])),
  K("Planos y escalas", `<p>En un plano, todo está reducido en la misma proporción.</p>
  ${EX("1 cm en el plano = 1 000 cm en la realidad<br>Un muro mide 9 cm en el plano → 9 × 1 000 = 9 000 cm = <b>90 m</b>")}
  <p>Acuérdate de cambiar a una unidad razonable al final (cm → m).</p>`)
],
maatvraag: () => [
  K("Todo en la misma unidad", `<p>Antes de sumar, restar o comparar medidas, pásalas a <b>la misma unidad</b>.</p>
  ${EX("Una cuerda de 2 m 27 cm; cortas 69 cm<br>2 m 27 cm = 227 cm<br>227 − 69 = <b>158 cm</b>")}
  ${EX("¿Cuántos vasos de 50 cl llenas con 2 l?<br>2 l = 200 cl → 200 : 50 = <b>4 vasos</b>")}`),
  K("Horarios y dinero", `${EX("El tren sale a las 16:20 y tarda 50 min<br>16:20 + 40 min = 17:00; quedan 10 min → <b>17:10</b>")}
  ${EX("Tienes 50 € y un cuaderno cuesta 1,66 €. ¿Cuántos puedes comprar?<br>Estima: 50 : 1,66 ≈ 30 → 30 × 1,66 = 49,80 € ✓ (31 serían 51,46 €, no llega) → <b>30</b>")}`)
]
};
