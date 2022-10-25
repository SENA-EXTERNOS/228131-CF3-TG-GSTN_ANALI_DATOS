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

    SlyderA.tarjeta.color-primario.my-4.p-3.mb-5(tipo="b")
      .row.justify-content-center
        .col-lg-6.mt-md-4
          p.ms-5.mt-5 Por lo tanto, la probabilidad es una división de dos términos y la fórmula sería: 
        .col-lg-6
          figure
            img.img-slider(src='@/assets/curso/temas/tema1/slider-img-1.png')

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Existe una gran variedad de software de soporte para la programación del <b>mecanizado con fabricación asistida por computador CAM</b>, que generalmente también incluye el módulo para la creación o edición de modelos mediante <b>diseño asistido por computador CAD</b>, o que se integra con estos y que se puede usar o es compatible con la gran variedad de máquinas herramientas controladas <b>numéricamente por el computador o CNC</b> que encontramos en la actualidad. 
        .col-lg-5.mb-4.mb-lg-0.mt-5
          figure(data-aos="fade-right")
            img.img-250.img-cen(src='@/assets/curso/temas/tema1/slider-img-1.png')


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
