<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la probabilidad

    p La teoría de la probabilidad forma parte de las matemáticas y se encarga de estudiar fenómenos o experimentos aleatorios, entendiendo estos últimos, como aquellos que obtienen el mismo resultado, cuando son repetidos bajo las mismas condiciones (Martínez, 2019).

    p El objetivo de este módulo es el de desarrollar bases conceptuales en torno a la estadística para que, posteriormente, permita el análisis de datos. 

    p En este tema, se explicarán conceptos de la probabilidad, iniciando con la teoría, siguiendo con ejercicios prácticos referente a la probabilidad de ocurrencia de un evento.

    p La probabilidad se define como número de casos favorables dividido sobre número de casos posibles (Aguilar, 2021).

    SlyderA.tarjeta.color-slider.my-4.p-3.mb-5(tipo="b")
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5.mt-5 Por lo tanto, la probabilidad es una división de dos términos y la fórmula sería: 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-1.svg')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4.p-4
          h5.mb-4 Ejemplo
          p.mb-4 En una bolsa oscura se encuentran 3 bolas negras y 1 blanca. 
          h5 ¿Cuál es la probabilidad de sacar una bola negra? 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-2.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5.mt-5 De acuerdo con la pregunta se tiene: 
          .col-11.ms-5
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Número de casos favorables = 3 bolas negras están dentro de la bolsa. 
              li
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Número de casos posibles es el total de valores que toma el experimento; en este caso es 4, al sumar las 3 bolas negras y la blanca.
              li
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-3.png')
      
      .row.justify-content-center
          figure
            img.img-slider2(src='@/assets/curso/temas/tema1/slider-img-4.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5 De acuerdo con la pregunta se tiene: 
          .col-11.ms-5
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Número de casos favorables = 1 bola blanca está dentro de la bolsa.  
              li
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Número de casos posibles = 4 bolas en total.   
              li
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p La probabilidad siempre es un valor que está entre 0 y 1.   
              li
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Se habla de un intervalo continuo, cualquier valor real en el intervalo 0 y 1.
              li
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Se simboliza con la letra P abreviación de probabilidad.  
              li
        .col-lg-6
          figure
            .col-lg-8
            img.img-slider3(src='@/assets/curso/temas/tema1/slider-img-5.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5 Se puede utilizar el símbolo de pertenecer ∈ a un conjunto o intervalo; en este caso, al intervalo [0,1].
          p.ms-5 P puede tomar cualquier valor real en el intervalo [0,1].
          p.ms-5 Es decir, P puede tomar el valor de cero (0), 1, cualquier valor real en el intervalo [0,1]. 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-6.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          b.ms-5 Ejemplo
          .col-11.ms-5
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p P no puede ser negativo.
              li
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p P no puede ser mayor a 1.    
              li
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-7.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5.mt-5 La probabilidad es 0 cuando no hay ningún caso posible, por ejemplo, la probabilidad de sacar una bola roja de la bolsa.  
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-8.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          br
          br
          br
          p.ms-5.mt-5 La probabilidad es 1 cuando los casos posibles son en número igual que los casos favorables. 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-9.png')
      
      .row.justify-content-center
        .col-lg-6.mt-md-4
          b.ms-5 Ejemplo
          p.ms-5 En una bolsa se tienen 4 bolas blancas.
          h5.ms-5 ¿Cuál es la probabilidad de sacar una bola blanca?
          p.ms-5 Sería 1 debido a que los casos favorables son 4 y los casos posibles son 4.
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-10.png')

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p En el ejemplo o experimento anterior, podemos hablar de un término con reemplazo o sin reemplazo.
            .col-11
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Con reemplazo, significa que sacó la bola de la bolsa y para un siguiente evento la regresó. 
                li
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Sin reemplazo, significa que sacó la bola de la bolsa y no la regresó a la bolsa.   
                li
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p A los casos posibles se les llama espacio muestral.
                li

        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img.img-250.img-cen(src='@/assets/curso/temas/tema1/img-1.png')

    .row.mb-5
      .col-lg-3.col-md-6
        figure(data-aos="fade-right")
          img.img-250.img-cen(src='@/assets/curso/temas/tema1/slider-img-3.png')
      .col-lg-9.col-md-12
        p.mt-3 Un espacio muestral sería el conjunto de valores que toma un experimento; en este caso, sería el total de bolas negras y blancas, por lo tanto, el espacio muestral tendría un valor de 4, sumando las 3 bolas negras con la bola blanca. (Lind, et al., 2012)

        h4 Cardinal o longitud  

        p El cardinal o longitud de ese espacio muestral es 4; que es el tamaño o la suma de todos los posibles valores del experimento.


    p.mb-5 A continuación, se trabajará con probabilidad de conjuntos, recordando que esto refiere a que hay eventos mutuamente excluyentes y eventos no excluyentes. Los primeros tienen que ver con conjuntos que no tienen datos en común, mientras que los no excluyentes tratan de conjuntos con datos en común. (Martínez, 2019)

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img-2.png", alt="alt")
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Probabilidad de conjuntos:")
              .col-12
                p.mb-0 Probabilidad de la unión de dos conjuntos: 
                p P(AUB)=P(A)+P(B)-P(A∩B)
                p A y B sucesos independientes
            
            .row(titulo="Ejercicio 1")
              .col-12
                p En una universidad el 60 % de los estudiantes aprobó el examen de matemáticas, el 70 % el de inglés, el 40 % aprobó ambos exámenes.  
                p ¿Cuál es la probabilidad de elegir al azar, un estudiante que haya aprobado inglés o matemáticas? 
            
            .row(titulo="Análisis 1")
              .col-12
                p En conjuntos si un elemento se encuentra en A∪B está en A o en B 
                p En conjuntos si un elemento se encuentra en A∩B está en ambos A y B
                p P (aprobó inglés) = P(A) = 0.7  
                p P (aprobó matemáticas) = 0.6 
                p P (aprobó inglés ∩ aprobó matemáticas) = 0.4
            
            .row(titulo="Solución 1")
              .col-12
                h4.text-center.texto-azul P(A∪B)=P(A)+P(B)−P(A∩B)
                p.ms-4 = P (inglés o matemáticas) = 0.7+ 0.6 - 0.4 = 0.9
                .col-11
                  ul.lista-ul.ms-4
                    li 
                      <i class="fas fa-angle-right" aria-hidden="true"></i>
                      p La probabilidad de que un estudiante elegido al azar haya  aprobado inglés o matemáticas, es del 90 %.
                    li 

            .row(titulo="Ejercicio 2")
              .col-12
                p En una universidad, el 50 % de los estudiantes aprobó el examen de programación, el 60 % el de redes, el 70 % lo aprobaron ambos. 
                p ¿Cuál es la probabilidad que un estudiante elegido al azar, haya aprobado programación y redes?
            
            .row(titulo="Análisis 2")
              .col-12
                p P (programación) = 0.5  
                p P (redes) = 0.6 
                p P (programación ∪ redes) = 0.7 

            .row(titulo="Solución 2")
              .col-12
                h4.text-center.texto-azul P(A∪B)=P(A)+P(B)−P(A∩B)
                p.ms-4 0.7 = 0.5 + 0.6 - P(A∩B) 
                p.ms-4 0.7 = 0.11- P(A∩B)
                h4.text-center.texto-azul P(A∩B)=0.59
                p La probabilidad es del 59 % de tener aprobadas ambas materias: programación y redes.

    p.mb-5 Ahora se trabajará con probabilidad condicional. 

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.p-5(titulo="Ejercicio 1")
          .col-md-8.mb-4.mb-md-0
            p.mt-5 En una tienda online el 40 % de los usuarios compraron una marca de camisa y el 30 % compraron una marca de zapatos; ambos compraron el 20 %. 
            p Si se elige un usuario al azar, ¿cuál es la probabilidad que haya comprado una camisa, dado que compró unos zapatos?
          .col-md-4
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-1.png') 
        
        .row.p-5(titulo="Fórmula 1")
          .col-md-8.mb-4.mb-md-0 
            .row 
              .col-md-8
                h3.mb-5 Fórmula de la probabilidad condicional
                p La fórmula de la probabilidad condicional es:
              .col-md-4.mt-5
                figure
                img.img-for(src='@/assets/curso/temas/tema1/img-for-1.png')
            p.mt-4 Significa que la probabilidad de que ocurra B una vez que ocurrió A, son sucesos dependientes. 
            .row
              .col
                figure.d-flex.justify-content-center
                  img.img-for1(src='@/assets/curso/temas/tema1/img-for-2.png')
            p.mt-4 Significa que, si una persona compró zapatos, la probabilidad que compre una camisa es del 66 %.
          
          .col-md-4.mb-4.mt-5
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-2.png')
        
        .row.p-5(titulo="Ejercicio 2")
          .col-md-8.mb-4.mb-md-0
            p En la misma tienda online se selecciona un usuario al azar. 
            p ¿Cuál es la probabilidad que compre zapatos, teniendo en cuenta que ya compró una camisa?
          .col-md-4
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-3.png') 
        
        .row.p-5(titulo="Fórmula 2")
          .col-md-8.mb-4.mb-md-0
            .row
            h3.mb-5 Fórmula de la probabilidad condicional
              .col.mt-5
                figure.d-flex.justify-content-center
                  img.img-for1(src='@/assets/curso/temas/tema1/img-for-3.png') 
            p Significa que para una persona que compró una camisa, la probabilidad que compre zapatos es del 50 %.
            p Se observa que, en la segunda compra de la camisa, hay un 16 % de probabilidades que esta sea de zapatos. 
          .col-md-4
            br
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-4.png') 
        
        .row.p-5(titulo="Intersección")
          .col-md-8.mb-4.mb-md-0
            h3.mb-5 Intersección de conjuntos
            p El símbolo A∩B en conjuntos es un elemento que está en la intersección de los dos conjuntos, es decir en ambos. 
          .col-md-4
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-5.png') 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
