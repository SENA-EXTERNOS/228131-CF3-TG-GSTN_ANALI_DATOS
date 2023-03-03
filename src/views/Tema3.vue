<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Introducción a la prueba de hipótesis para la media 

    p Ahora se abordará la prueba de hipótesis con dos medias o promedios; para esto, se deben manejar términos como hipótesis nula (H0), hipótesis alternativa (H1), región de rechazo error tipo 1(𝛼).  
      figure.d-flex.justify-content-center
        img.img-te3(src='@/assets/curso/temas/tema3/img-1.png')

    h2 Hipótesis nula e hipótesis alternativa: 
    br
    h5 La hipótesis nula y la hipótesis alternativa son opuestas.  
    br
    p Si se trabaja con dos colas hablamos de 𝛼/2 en cada una de las colas de la gráfica de la distribución normal y la diferencia de medias 𝜇1−𝜇2=0, estaría en el centro de la gráfica de la distribución normal, sería la hipótesis nula (H0), es decir, las dos medias son iguales y la hipótesis alternativa (H1), es que las dos medias sean diferentes, es decir:<b> 𝜇1−𝜇2≠0</b> 
    .row.mb-5.d-flex.justify-content-center 
      .col-lg-10
        .titulo-sexto.color-secundario.color-barra-1.pb-0.ms-5.mt-4
          b.mt-1 Figura 1 
          p #[i prueba de hipótesis para media]  

        figure.d-flex.justify-content-center
          img.img-te4(src='@/assets/curso/temas/tema3/img-2.png')

    .bloque-texto-g.color-tar-izq.p-3.p-sm-4.p-md-5.mt-5.mb-5
      .bloque-texto-g__img.ima.bloque-img-2(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-3.png')})`}"
      )
      .bloque-texto-g__texto.bloque-text-2.p-5
        h3.mb-5 Ejemplo de prueba de hipótesis para la media
        br
        p Ahora se comparan dos medias: 
        br
        p El jefe de una empresa dice que, en promedio, las mujeres que trabajan allí, se enferman igual que los hombres.

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
              p De 20 hombres arrojó un promedio de 8.4 y una desviación de 1.5.
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
              p Con un error del 5 %, este error es llamado error tipo 1, se simboliza con la  𝛼.    
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
        .cajon.color-primario.color-cajon.p-4.mb-4
          p.text-center <b>Resumen</b>:     Ho = hipótesis nula = 𝜇1−𝜇2=0      H1 = hipótesis alternativa = 𝜇1−𝜇2≠0 

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq1
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            h5 Error tipo 1. 
            br
            p En estadística, cuando se plantea una prueba de hipótesis, se habla de un error que se puede cometer; este se llama #[b error tipo 1  (𝛼) el cual ocurre cuando se rechaza la hipótesis nula, siendo esta verdadera.] 
            br
            p El error tipo 1(𝛼) se conoce también como <b>error de tipo alfa (α)</b> o falso positivo.
        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img-5.png')

    p Con un intervalo de confianza del 95 %, el resto sería el error, es decir, el error tipo 1 es 𝛼 = 5 %= 0.05, como se está diciendo que son diferentes, no mayor ni menor, se debe trabajar con 2 colas el error se divide entre las dos colas    =2.5%=0.025.  
    p.mb-5 El valor z en la #[b distribución normal estandarizada] correspondiente a ese Intervalo de Confianza del #[b 95 % es Z=1.96]

    .row.mb-5
      .col-lg-6.col-md-12
        .cajon.color-primario.color-cajon.p-4.mb-4
          p Siguiendo con el ejemplo, se calculará el #[b estadístico]; si ese estadístico cae en el intervalo de z #[b (-1.96, 1.96) significa que cae en la región de aceptación de Ho], por lo tanto, se puede decir que con un 95 % de confianza no hay diferencia significativa entre los hombres y las mujeres que se enferman.

        p Pero si el #[b estadístico] cae fuera del intervalo de z (-1.96, 1.96), es decir, valores mayores a z = 1.96 o valores menores a z = -1.96 #[b significa que cae en la región de rechazo de Ho], , por lo tanto, aceptación de la hipótesis alternativa H1, se puede afirmar que con un 95 % de confianza si hay diferencia significativa entre los hombres y las mujeres que se enferman. 

      .col-lg-6.col-md-12
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img-9.png')

    figure(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema3/img-10.svg')

    p.mt-5.mb-5 Aquí podrá apreciar el gráfico que representa la hipótesis nula y la hipótesis alternativa: 


    .row.mb-5.d-flex.justify-content-center 
      .col-lg-10

        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img-11.png')

          .tarjeta.colormodal(x="50%" y="50%" numero="1")
            .row.justify-content-center.mb-5.p-5
              .col-8
                p.mt-4.color-texto Si el estadístico cae en el intervalo de z (-1.96, 1.96) significa que cae en la región de aceptación de Ho con un 95 % de confianza y un 5% de error tipo 1, por lo tanto, se acepta la hipótesis nula (Ho). 
          .tarjeta.colormodal(x="73%" y="85%" numero="2")
            .row.justify-content-center.mb-5.p-5
              .col-8
                p.mt-4.color-texto Si el estadístico no cae en el intervalo de z (-1.96, 1.96) significa que cae en la región de rechazo de Ho con un 95 % de confianza y un 5% de error tipo 1, por lo tanto, se rechaza la hipótesis nula (Ho) y se acepta la hipótesis alternativa(H1).

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq1
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Continuando con el ejemplo de los hombres y mujeres en la empresa, se tiene que: 
            br
            p El #[b estadístico de prueba] para la diferencia de medias, sería:
        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img-12.png')

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-3
          .col-6
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img-13.png')
          figure.mb-3
            img(src='@/assets/curso/temas/tema3/img-15.svg')
      
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure.mb-3
              img(src='@/assets/curso/temas/tema3/img-14.png')
      
          figure.mb-3
            img.img-text(src='@/assets/curso/temas/tema3/img-16.svg')

    .row.my-5
      p Los valores del problema serían       = 8.4, 𝜎 1 = 1.5, n1 =30,     =12.2, 𝜎2  =2.0, n2 =35, suponiendo que 𝜇1−𝜇2 = 0 
      p Sustituyendo el estadístico de prueba, resulta: 

    figure.mb-5
      img.img-text(src='@/assets/curso/temas/tema3/img-18.png')


    p.mb-5 El estadístico z = -8.74 cae por fuera del intervalo de z (-1.96, 1.96), significa que cae en la región de rechazo de Ho, por lo tanto, aceptación de la hipótesis alternativa H1, se puede afirmar que con un 95 % de confianza si hay diferencia significativa entre los hombres y mujeres que se enferman. (Gutiérrez & Vladimirovna, 2016)

    h3.mb-5 Ahora se analizará con mayor detalle la gráfica de la distribución normal

    p.mb-5 La distribución normal, representada en la Campana de Gauss, tiene una función asociada que depende de la desviación, varianza, el promedio y el valor de x, tiene como nombre la función de densidad su fórmula es:

    .row.justify-content-center.mb-5
      .col-4
        .cajon.color-cajon.p-2.pt-3
          p.text-center <b>Media</b> = 𝜇,  <b>desviación</b> = 𝜎, <b>varianza</b> = 𝜎2

    .row.mb-5.d-flex.justify-content-center
      .col-lg-8
        .titulo-sexto.color-secundario.color-barra-1.pb-0.ms-5.mt-4
          b.mt-1 Figura 2 
          p #[i Distribución normal con diferente media]  
        figure.d-flex.justify-content-center
          img.img-ta(src='@/assets/curso/temas/tema3/img-19.png')

    .row.justify-content-center.mb-5
      .col-9
        .cajon.color-cajon1.p-2.pt-3
          p.text-center Distribución normal con diferente media con la misma desviación y varianza. Fuente propia realizada con Maple 

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-tarjeta-3.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-1
                img(src='@/assets/curso/temas/tema3/img-20.png')

          p.text-center Se obtendrán dos gráficas cambiando el valor de la media, y dejando la desviación y la varianza igual. 
          br
          br
          br

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-tar1.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-1
                img(src='@/assets/curso/temas/tema3/img-21.png')

          p.text-center.mb-0 Dados los valores  
          p.text-center.mb-0 μ=2,σ=3, σ2=9
          p.text-center  lo sustituye en la función, para graficarla se reemplazan valores para x. 
          br
          br

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-tarjeta-3.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img-22.png')
          p.text-center.mb-0  lo sustituye en la función, para graficarla se reemplazan valores para x. 
          p.text-center 𝜇=2 está hacia la derecha y en color azul que tiene media negativa 𝜇=−2 está hacia la izquierda.  

    h3.mb-5 Introducción a Google Colab  

    .row.mb-5
      .col-lg-3.col-md-3.col-sm-12.mb-5
        figure
          img(src='@/assets/curso/temas/tema3/img-23.png')
      .col-lg-9.col-md-9.col-sm-12
        p En #[b Google Colab] se tienen máquinas virtuales con tarjetas gráficas que Google facilita. Permite ejecutar código en el lenguaje #[b Python] dentro de la nube con el formato de #[b Jupyter Notebook] extensión #[b ipynb.] 

        p #[b Jupyter Notebook] se puede utilizar localmente o en la nube con #[b Google Colab.] Para usarlo localmente debe instalarse en el computador. 

        p #[b Google Colab] se encuentra en la dirección:

        a.anexo.mb-4.mb-lg-0(href="https://colab.research.google.com/?hl=es" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] https://colab.research.google.com/?hl=es 

    .tarjeta.tarjeta--azul.p-5.pt-2.slider.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Dentro de Google Colab se está en un entorno interactivo denominado notebook de Colab, que permite escribir y ejecutar código celda por celda o todo de una vez, se obtiene en la pestaña código.
            p Escribe en un lenguaje etiquetado especial llamado #[i Markdown], se obtiene en la pestaña de nombre Texto.

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Pantalla de inicio de Google colab
              img(src='@/assets/curso/temas/tema3/sld-1.png')
              figcaption Pantalla de inicio de Google Colab
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Instalar una librería o paquete
            br 
            h4 Ejemplo:
            p.mb-0 pip <em>install</em> pandas
            p.mb-0 Instalaría la librería de nombre pandas si ya está instalada lo dirá. 
            p Importar librería con un alias(as)
            br
            h4 Ejemplo:
            p.mb-0 <em>import</em> pandas as pd  
            p Cargar la librería panda con el alias o abreviación pd  
            br
            h4 Ejemplo:
            p.mb-0 <em>import math</em>
            p Cargar la librería de nombre <em>math</em> referente a matemática.

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Importar libreria math y utilizar la función potencia 
              img(src='@/assets/curso/temas/tema3/sld-2.png')
              figcaption Importar la librería <em>math</em> y utiliza la función potencia: <em>pow()</em> 
        .row
          .col-md-6.mb-4.mb-md-0
            br 
            p <em>print(dir(math)) </em>
            p Muestra las funciones que están dentro de la librería math 
            p <em>pow(2,3)</em> una de las funciones que están en la librería <em>math</em>, es la función potencia en inglés <em>(Power), pow(2,3)</em> significa que eleva el número 2 a la 3 y da como resultado 8. 

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Importar libreria math y utilizar la función potencia 
              img(src='@/assets/curso/temas/tema3/sld-3.png')
              figcaption Importar la librería <em>math</em> y utiliza la función potencia: <em>pow()</em> 
        .row
          .col-md-6.mb-4.mb-md-0
            p Un <em>Dataframe</em> es una estructura de datos con dos dimensiones (filas y columnas), se puede guardar datos de distintos tipos (caracteres, enteros, valores de punto flotante, etc.) en columnas. Es similar a una hoja de cálculo o una tabla de SQL.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/sld-4.png')
        .row
          .col-md-6.mb-4.mb-md-0
            p Un archivo CSV (valores separados por comas) es un archivo de texto que tiene un formato específico, que permite guardar los datos en un formato de tabla estructurada. 
            p.mb-5 Un archivo CSV puede tener diferentes separadores como:

            figure
              img(src='@/assets/curso/temas/tema3/sld-12.png')

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/sld-5.png')
        .row
          .col-md-6.mb-4.mb-md-0
            p Para leer un archivo en formato CSV se utiliza el comando <em>pd.read_csv('nombre del archivo.csv')</em>, donde <b>pd</b> es la abreviación de la librería pandas. 
            p En la parte nombre del archivo se debe escribir la ruta o dirección donde está el archivo al final de esa ruta el nombre con extensión.csv 
            p Se puede utilizar el comando <b>pwd</b> para saber la ruta donde se está ubicado. 
            p Para cambiar el directorio o ruta se utiliza el comando cd 
            p <b>Ejemplo</b>: cd /content/sample_data/ 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/sld-6.png')
        .row
          .col-md-6.mb-4.mb-md-0
            p <b>Ejemplo</b>:
            ul.lista-ul
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Leer un archivo csv, utilizando el alias de pandas pd.
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Nombrarlo data_frame.  
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p Visualizarlo con el nombre que se le colocó en este caso data_frame.  
              li 
            p <em>import pandas as pd</em> 
            p <em>data_frame = pd.read_csv('california_housing_test.csv') </em>
            p <em>data_frame </em>

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Lectura y contenido del data frame
              img(src='@/assets/curso/temas/tema3/sld-7.png')
              figcaption Lectura y contenido del data <em>frame</em> utilizando el alias <em>pd.read_csv()</em>
        .row
          .col-md-6.mb-4.mb-md-0
            p Para obtener las primeras 5 filas del data frame se escribe:
            ul.lista-ul
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>data_frame.head(5)</em>
              li 
            p Para obtener las últimas 5 filas del data frame se escribe: 
            ul.lista-ul
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>data_frame.tail()</em> 
              li 

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Contenido de las primeras y últimas cinco filas del data frame 
              img(src='@/assets/curso/temas/tema3/sld-8.png')
              figcaption Contenido de las primeras y últimas cinco filas del <em>data frame</em>
        .row
          .col-md-6.mb-4.mb-md-0
            p Para ver la dimensión (largo y ancho), filas y columnas también el nombre de las columnas, en este caso 3000 filas, 9 columnas se utilizan los comandos: 
            ul.lista-ul
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>print("Dimensión: ", data_frame.shape) </em> 
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>print("Columnas: ", data_frame.columns)</em> 
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>Shape: (3000, 9)</em> 
              li 

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Dimensión y nombre de las columnas del data frame  
              img(src='@/assets/curso/temas/tema3/sld-9.png')
              figcaption Dimensión y nombre de las columnas del <em>data frame</em>
        .row
          .col-md-6.mb-4.mb-md-0
            p Para ver información sobre el tipo de dato y si tiene datos únicos no repetidos.
            ul.lista-ul
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>print(dataframe.info())</em> 
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>print("\Conteo de valores únicos:\n")</em> 
              li 
              li 
                <i class="fas fa-angle-right" aria-hidden="true"></i>
                p <em>print(data_frame.nunique()) </em> 
              li 

          .col-md-6
            figure
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Tipos de datos  
              img(src='@/assets/curso/temas/tema3/sld-10.png')
              figcaption Tipo de dato y si existencia de datos únicos no repetidos 
        .row
          .col-md-6.mb-4.mb-md-0
            p Información sobre los estadísticos descriptivos de la columna con nombre <em>'total_rooms'</em>, se escribe el nombre entre comillas sencillas o dobles.<em>data_frame['total_rooms']</em>.describe() 

            p.mb-0 También se puede:
            p <em>data_frame["total_rooms"].describe()</em>

            p.mb-0 Redondear la salida de los valores a 2 decimales.
            p <em>round(data_frame['total_rooms'].describe(),2)</em>


          .col-md-6
            figure 
              .titulo-sexto.color-secundario.color-barra-1.pb-0
                p Información estadísticos descriptivos de la columna "total_rooms  
              img(src='@/assets/curso/temas/tema3/sld-11.png')
              figcaption Información estadísticos descriptivos de la columna <em>"total_rooms"</em>   

    .bloque-texto-g.color-tar-izq.p-3.p-sm-4.p-md-5.my-5
      .bloque-texto-g__img.bloque-img-8(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-25.png')})`}"
      )
      .bloque-texto-g__texto.bloque-text-8.caj.p-3
        p Los estadísticos descriptivos son: (min), valor máximo (max), media o promedio (mean), desviación estándar (std), total de filas(count) y cuartiles()
        figure.m-5.d-flex.justify-content-center
          img.tamanio(src='@/assets/curso/temas/tema3/img-26.png')


    .row.mb-5.d-flex.justify-content-center
      .col-lg-6.col-md-12

    p En el siguiente video podrá observar la aplicación de la teoría de prueba de hipótesis en un caso práctico real, tomando la información de la base de datos libres de la Alcaldía de Medellín, referente a créditos de consumo otorgados a hombres y mujeres cuyas edades están entre 18 y 84 años.

    p.mb-5 Se utilizará Google Colab y Python con sus diferentes librerías: Plotly para gráficos dinámicos, statsmodels. stats librería estadística para prueba de hipótesis, entre otras.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DboecE0kyYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img-24.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p Para una mejor comprensión del video, el manejo de Google Colab y el documento Jupyter Notebook con extensión ipynb, el cual se trabaja en el video, los invitamos a descargar los 3 archivos adjuntos.
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/CF03_22813-Material_descargable.zip')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
    

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
