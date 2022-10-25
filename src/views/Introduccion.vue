<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg-8
        .bloque-texto-d.p-4.color-float
          .bloque-texto-d__texto.mb-2
            p Estimado aprendiz, sea bienvenido a esta experiencia de aprendizaje orientado a la probabilidad y pruebas de hipótesis.  Se desarrollarán los contenidos de forma gradual iniciando por las bases estadísticas; aprenderá a distinguir la probabilidad de ocurrencia de un evento, el manejo la distribución normal, entre otros.  Este contenido le ayudará a distinguir los conceptos y estructuras más relevantes en la estadística inferencial para la analítica de datos como herramienta fundamental para su aplicación de manera efectiva en la solución de problemas. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje: 
            br
            br
            h5 ¡Le deseamos una experiencia de aprendizaje significativa y memorable!

      .col-lg-4
        figure
          img(src="@/assets/curso/introduccion/img-1.png")

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
