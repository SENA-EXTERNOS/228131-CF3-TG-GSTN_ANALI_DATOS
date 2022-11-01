<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    TabsA.color-acento-botones
      .tarjeta.color-acento-botones--borde.p-4.mb-5(titulo="Promedio")
        .row 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/img-1.png',)
          .col-md-4.centrar
            figure
              img(src='@/assets/curso/temas/tema2/img-2.png')  
      .tarjeta.color-acento-botones--borde.p-4(titulo="Ejemplo de promedio ")
        .row.d-flex.justify-content-center.align-items.center
          .col-md-8 
            p.ms-5 Calcular el promedio de los siguientes valores: 3, 4, 5, 6. 
            figure
              img(src='@/assets/curso/temas/tema2/img-3.png',)

      .tarjeta.color-acento-botones--borde.p-4(titulo="Desviación estándar")
        .row.d-flex.justify-content-center.align-items.center 
          .col-md-8 
            p También conocida como <b>desviación típica o desvío típico</b>, mide qué tanto se alejan los datos del promedio, es decir, si hay mucha variación entre ellos.
            p Si los datos se alejan, el valor de la desviación va a crecer, si se acercan, el valor de la desviación va a disminuir. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img-4.png') 

      .tarjeta.color-acento-botones--borde.p-4(titulo="Representación")
        .row.d-flex.justify-content-center.align-items.center
          .col-md-6 
            h4 Representación de la desviación estándar 
            figure
              img(src='@/assets/curso/temas/tema2/img-5.png',)
          .col-md-6.centrar
            figure
              img(src='@/assets/curso/temas/tema2/img-6.png')         

      .tarjeta.color-acento-botones--borde.p-4(titulo="Estadística inferencial")
        .row.d-flex.justify-content-center.align-items.center
          .col-md-8 
            p.mt-5.text.alinear Consiste en estimar ciertas características de la población en estudio a partir de una muestra y tomar decisiones sobre la población, utilizando los resultados obtenidos, siempre que la muestra sea efectivamente representativa de la población en estudio. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img-7.png')  

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            h4 Distribución Normal
            p La distribución normal o campana de Gauss, es una distribución teórica y en su fórmula involucra la media o promedio de la población  (𝜇) y la desviación estándar (𝜎)  de la población a estudiar. 
        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-8.png')   

    .bg--img_03
      .row.justify-content-center.mb-4
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Media de la población")
              .col-12
                p.mb-0 Se simboliza con la letra mu (𝜇) del alfabeto griego. 
                p.text-center <em>promedio o media de la población=𝜇</em>
                p En la distribución normal la media es 0 y la desviación es 1, 𝜇=0 ; 𝜎=1.     
                p Los datos se encuentran agrupados alrededor de la media de la población (𝜇), podemos hablar de porcentajes de datos agrupados en los intervalos(−𝜎+𝜇 , 𝜇+𝜎 ); ( −2𝜎+𝜇, 𝜇+2𝜎 ); ( −3𝜎+𝜇, 𝜇+ 3𝜎 )
          
            .row(titulo="Distribución normal estandarizada")
              .col-12
                figure.mb-4
                  img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-9.png') 
                .col-11
                  ul.lista-ul.ms-4
                    li 
                      <i class="fas fa-angle-right" aria-hidden="true"></i>
                      p Los valores z positivos corresponden a los valores x que son mayores que la media 𝜇
                    li 
                    li 
                      <i class="fas fa-angle-right" aria-hidden="true"></i>
                      p Los valores z negativos corresponden a los valores x que son menores que la media 𝜇 
                    li 
          
            .row(titulo="Ejemplo nombre del botón")
              figure.mb-4
                img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-10.png').
              p Se observa que valores x1=3 , x2=4 que están por debajo de la media o promedio, los z correspondiente son negativos z1=−1.35  z2=−0.45
              p Los valores que están por encima de la media o promedio los z correspondiente son positivos z3=0.45 z4=1.35
              h5 Hallando la distribución normal estandarizada: 
              p En la <b>distribución normal estandarizada</b> se tiene 𝜇=0 ; 𝜎 =1, la notación es N ( 𝜇, 𝜎 ) = N(0,1)
              p Es la <b>distribución normal estandarizada con media 0 y desviación estándar 1.</b>
              p Sustituyendo en los intervalos agrupados de arriba el valor 𝜇=0 y 𝜎 =1, resulta ( −1, 1 ); ( −2, 2 ); ( −3, 3 ) en el primer intervalo de una <b>distribución normal estandarizada</b> estaría el <b>68.2%</b> de los datos, en el segundo intervalo el <b>95.4%</b> de los datos y en el último intervalo el <b>99.6%</b> de los datos.

            .row(titulo="Gráfico 1")
              .col-md-6
                h4.mb-4.mt-4.ms-5 Representación de la distribución normal  
                .titulo-sexto.color-secundario.color-barra.pb-0.ms-5.mt-4
                  h5.mt-1 Figura 2. Representación de la distribución normal  
              .col-md-6
                figure.mb-4
                  img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-11.png') 
            .row(titulo="Gráfico 2")
              .col-md-6
                h4.mb-4.mt-4.ms-5 Representación de la distribución normal  
                .titulo-sexto.color-secundario.color-barra.pb-0.ms-5
                  h5.mt-1 Figura 2. Representación de la distribución normal 
              .col-md-6
                figure.mb-4
                  img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-12.png') 
            .row(titulo="Gráfico 3")
              .col-md-6
                .titulo-sexto.color-secundario.color-barra.pb-0.ms-5.mt-4
                  h5.mt-1 Figura 3. Distribución normal con porcentajes de área bajo la curva
              .col-md-6
                figure.mb-4
                  img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-13.png') 

    h4.mb-5 Distribución normal estandarizada 
    .row.mb-5.d-flex.justify-content-center 
      .col-lg-10
        .titulo-sexto.color-secundario.color-barra-1.pb-0.ms-2.mt-4
          p.mt-1 <b>Figura 4</b>. Distribución normal estandarizada 
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-14.png')

          .tarjeta.colormodal(x="50%" y="55%" numero="1")
            .row.justify-content-center.mb-5.p-5
              .col-8
                p.mt-4.color-texto En el intervalo z en (-1, 1) se tiene el 68.2% de los datos
          .tarjeta.colormodal(x="60%" y="70%" numero="2")
            .row.justify-content-center.mb-5.p-5
              .col-8
                p.mt-4.color-texto En el intervalo z en (-2, 2) se tiene el 95.4% de los datos 
          .tarjeta.colormodal(x="70%" y="75%" numero="3")
            .row.justify-content-center.mb-5.p-5
              .col-8
                p.mt-4.color-texto En el intervalo z en (-3, 3) se tiene el 99.6% de los datos 
</template>

<script>
export default {
  name: 'Tema2',
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
