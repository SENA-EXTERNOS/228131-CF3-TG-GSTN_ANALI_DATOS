<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la probabilidad

    p El objetivo de este módulo  es tener buenas bases estadísticas para el análisis de datos.  

    p En este apartado se explicarán conceptos de la probabilidad, iniciando con la teoría, siguiendo con ejercicios  prácticos referente a la probabilidad de ocurrencia de un evento.

    p La probabilidad se define como número de casos favorables dividido sobre número de casos posibles.

    SlyderA.tarjeta.color-slider.my-4.p-3.mb-5(tipo="b")
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5.mt-5 Por lo tanto, la probabilidad es una división de dos términos y la fórmula sería: 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-1.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5.mt-3.mb-5 <b>Ejemplo</b>: En una bolsa oscura se encuentran 3 bolas negras y 1 blanca. 
          h5.ms-5 ¿Cuál es la probabilidad de sacar una bola negra? 
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
                p Número de casos favorables = 3 bolas negras están dentro de la bolsa . 
              li
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Número de casos posibles es el total de valores que toma el experimento en este caso es 4, al sumar las 3 bolas negras y la blanca.  
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
                p Se habla de un intervalo continuo cualquier valor real en el intervalo 0 y 1.
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
          p.ms-5 Se puede utilizar el símbolo de pertenecer  ∈  a un conjunto o intervalo es este caso al intervalo [0,1] 
          p.ms-5 P puede tomar cualquier valor real en el intervalo [0,1] 
          p.ms-5 Es decir, P puede tomar el valor de cero (0), 1, cualquier valor real en el intervalo [0,1] 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-6.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5 <b>Ejemplo</b>
          .col-11.ms-5
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p P no puede ser negativo  
              li
            ul.lista-ul.ms-4.ulslider
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p P no puede ser mayor a 1    
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
          p.ms-5 <b>Ejemplo</b> 
          p.ms-5 En una bolsa se tienen 4 bolas blancas  
          p.ms-5 <b>¿Cuál es la probabilidad de sacar una bola blanca? </b> 
          p.ms-5 Sería 1 debido a que los casos favorables son 4 y los casos posibles son 4 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-10.png')

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p En el ejemplo o experimento anterior podemos hablar de un término con reemplazo o sin reemplazo.
            .col-11
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Con reemplazo significa que saco la bola de la bolsa y para un siguiente evento la regreso. 
                li
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p Sin reemplazo significa que saco la bola de la bolsa y no la regreso a la bolsa.  
                li
              ul.lista-ul.ms-4
                li 
                  <i class="fas fa-angle-right" aria-hidden="true"></i>
                  p A los casos posibles se les llama espacio muestral.
                li

        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img.img-250.img-cen(src='@/assets/curso/temas/tema1/img-1.png')

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img-2.png", alt="alt")
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Probabilidad de conjuntos:")
              .col-12
                p.mb-0 Probabilidad de la unión de dos conjuntos: 
                p P(A∪B)=P(A)+P(B)−P(A∩B)
                p A y B sucesos independientes
            .row(titulo="Ejercicio 1")
              .col-12
                p En una universidad el 60% de los estudiantes aprobó el examen de matemáticas, el 70% el de inglés, el 40% aprobó ambos exámenes. 
                p ¿Cuál es la probabilidad de elegir un estudiante al azar que haya aprobado inglés o matemáticas? 
            .row(titulo="Análisis Ejercicio 1")
              .col-12
                p En conjuntos si un elemento se encuentra en A∪B está en A o en B.
                p En conjuntos si un elemento se encuentra en A∩B está en ambos A y B 
                p P (aprobó inglés) = P(A) = 0.7 
                p P (aprobó matemáticas) = 0.6
                p P (aprobó inglés ∩ aprobó matemáticas) = 0.4
            .row(titulo="Solución 1")
              .col-12
                p.text-center <b>P(A∪B)=P(A)+P(B)−P(A∩B)</b>
                p.ms-4 = P (inglés o matemáticas) = 0.7+ 0.6 - 0.4 = 0.9
                .col-11
                  ul.lista-ul.ms-4
                    li 
                      <i class="fas fa-angle-right" aria-hidden="true"></i>
                      p La probabilidad de que un estudiante elegido al azar haya  aprobado inglés o matemáticas, es del 90% 
                    li 

            .row(titulo="Ejercicio 2")
              .col-12
                p En una universidad el 50% de los estudiantes aprobó el examen de programación, el 60% el de redes, el 70% aprobaron ambos.  
                p ¿Cuál es la probabilidad de que un estudiante elegido al azar haya aprobado programación y redes? 
            .row(titulo="Análisis 2")
              .col-12
                p P (programación) = 0.5  
                p P (redes) = 0.6 
                p P (programación ∪ redes) = 0.7 

                .row(titulo="Solución 1")
                  .col-12
                    p.text-center <b>P(A∪B)=P(A)+P(B)−P(A∩B)</b>
                    p.ms-4 0.7 = 0.5 + 0.6 - P(A∩B) 
                    p.ms-4 0.7 = 0.11- P(A∩B)
                    p.text-center <b>P(A∩B)=0.59</b>
                    p La probabilidad es del 59% de tener aprobadas ambas materias: programación y redes. 

    p.mb-5 Ahora se trabajará con probabilidad condicional 

    .tarjeta.tarjeta--gris.p-4.color-fondolinea.pb-0
      PasosB.color-acento-contenido
        .row(titulo="Ejercicio 1")
          .col-md-8.mb-4.mb-md-0
            h4.alineacion.mb-4 Ejercicio 1
            p.alineacion.mt-5 En una tienda online el 40% de los usuarios compraron una marca de camisa y el 30% compraron una marca de zapato, el 20% ambos.  
            p.alineacion Si se elige un usuario al azar ¿Cuál es la probabilidad que compre una camisa, dado que compró unos zapatos? 
          .col-md-4
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-1.png') 
        .row(titulo="Fórmula 1")
          .col-md-8.mb-4.mb-md-0
            h4.alineacion.mb-5 Fórmula de la probabilidad condicional 
            .row 
              .col-md-8
                p.alineacion La fórmula de la probabilidad condicional es:
              .col-md-4
                figure
                img.img-for(src='@/assets/curso/temas/tema1/img-for-1.png')
            p.alineacion Significa que la probabilidad de que ocurra B una vez que ocurrió A, son sucesos dependientes. 
            .row
              .col
                figure.d-flex.justify-content-center
                  img.img-for1(src='@/assets/curso/temas/tema1/img-for-2.png')
            p.alineacion Significa que, si una persona compró zapatos, la probabilidad de que compre una camisa es del 66%. 
          .col-md-4
            br
            br
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-2.png')
        .row(titulo="Ejercicio 2")
          .col-md-8.mb-4.mb-md-0
            h4.alineacion.mb-4 Ejercicio 2 
            p.alineacion En la misma tienda online se selecciona un usuario al azar  
            p.alineacion ¿Cuál es la probabilidad de que compre zapatos, teniendo en cuenta que ya compró una camisa? 
          .col-md-4
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-3.png') 
        .row(titulo="Fórmula  2")
          .col-md-8.mb-4.mb-md-0
            h4.alineacion.mb-4 Fórmula de la probabilidad condicional
            .row
              .col
                figure.d-flex.justify-content-center
                  img.img-for1(src='@/assets/curso/temas/tema1/img-for-3.png') 
            p.alineacion Significa que para una persona que compró una camisa, la probabilidad de que compre zapatos es del 50% 
            p.alineacion Se observa que en la segunda compra de la camisa, hay  un 16% de probabilidades de que esta sea de zapatos. 
          .col-md-4
            br
            figure
              img.img-linea(src='@/assets/curso/temas/tema1/img-linea-4.png') 
        .row(titulo="Intersección de conjuntos")
          .col-md-8.mb-4.mb-md-0
            h4.alineacion.mb-5 Intersección de conjuntos
            p.alineacion El símbolo A∩B en conjuntos es un elemento que está en la intersección de los dos conjuntos, es decir en ambos. 
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
