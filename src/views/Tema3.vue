<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Introducción a la prueba de hipótesis para la media 

    p Ahora abordará la prueba de hipótesis con dos medias o promedios, para esto debe manejar términos como hipótesis nula (H0), hipótesis alternativa (H1), región de rechazo error tipo1(𝛼).  
      figure.d-flex.justify-content-center
        img.img-te3(src='@/assets/curso/temas/tema3/img-1.png')

    h2 Hipótesis nula e hipótesis alternativa: 
    br
    h5 La hipótesis nula y la hipótesis alternativa son opuestas.  
    br
    p Si se trabaja con dos colas hablamos de 𝛼/2 en cada una de las colas de la gráfica de la distribución normal y la diferencia de medias 𝜇1−𝜇2=0, estaría en el centro de la gráfica de la distribución normal, sería la hipótesis nula (H0), es decir, las dos medias son iguales y la hipótesis alternativa (H1), es que las dos medias sean diferentes, es decir: 𝜇1−𝜇2≠0 
    .row.mb-5 
      .col-lg-10
        .titulo-sexto.color-secundario.color-barra-1.pb-0.ms-5.mt-4
          p.mt-1 <b>Figura 5</b>. prueba de hipótesis para media  
        figure.d-flex.justify-content-center
          img.img-te4(src='@/assets/curso/temas/tema3/img-2.png')
    
    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            h3 Ejemplo de prueba de hipótesis para la media
            br
            p Ahora comparará dos medias: 
            br
            p El jefe de una empresa dice que en promedio las mujeres que trabajan allí, se enferman igual que los hombres.
        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img-3.png')

    .row.mb-5
      .col-md-7.mt-5
        h4 Solución: 
        br
        p Se toma una muestra aleatoria de cada uno: 
        br
        .col-11
          ul.lista-ul.ms-4
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p De 20 hombres arrojó un promedio de 8.4 y una desviación de 1.5
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p De 25 mujeres arrojó un promedio de 12.2 y una desviación de 2.0.  
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p Se toma como hipótesis que se distribuyen normalmente.  
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p Se quiere validar la hipótesis acerca de las dos poblaciones.    
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p Con un error del 5%, este error es llamado error tipo 1, se simboliza con la letra 𝛼.  
            li 
            li 
              <i class="fas fa-angle-right" aria-hidden="true"></i>
              p El promedio de las mujeres que se enferman (𝜇1) y el promedio de los hombres que se enferman 𝜇2.  
            li 
          p Para ello se propone una prueba de hipótesis: 
          br 
          .col-11
            ul.lista-ul.ms-4
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Las dos medias son iguales 𝜇1=𝜇2 , pasando 𝜇2 a la izquierda resulta 𝜇1−𝜇2=0
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Las dos medias son diferentes 𝜇1≠ 𝜇2, pasando 𝜇2 a la izquierda resulta 𝜇1−𝜇2≠0  
              li 

      .col-md-5.mt-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img-4.png')
    .row.d-flex.justify-content-center.mb-5
      .col-md-8
        .cajon.color-acento-contenido.p-4.mb-4
          p.text-center <b>Resumen</b>:     Ho = hipótesis nula = 𝜇1−𝜇2=0      H1 = hipótesis alternativa = 𝜇1−𝜇2≠0 

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq1
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            h5 Error tipo 1 
            br
            p En estadística cuando se plantea una prueba de hipótesis se habla de un error que se puede cometer, se llama error tipo 1 (𝛼) el cual ocurre cuando se rechaza la hipótesis nula siendo esta verdadera.  
            br
            p El error tipo 1(𝛼) se conoce también como error de tipo alfa (α) o falso positivo.
        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img-5.png')

    p Con un intervalo de confianza del 95%, el resto sería el error, es decir, el error tipo 1 es 𝛼 = 5%= 0.05, como se está diciendo que son diferentes, no mayor ni menor, se debe trabajar con 2 colas el error se divide entre las dos colas 𝛼2=2.5%=0.025. 
    p El valor z en la distribución normal estandarizada correspondiente a ese Intervalo de Confianza del 95% es Z=1.96 
</template>

<script>
export default {
  name: 'Tema3',
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
