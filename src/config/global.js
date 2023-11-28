export default {
  global: {
    componenteFormativo: 'Probabilidad y prueba de hipótesis',
    descripcionCurso: `Este componente revisa las bases de probabilidad. Se fundamenta en conceptos como el promedio y la media de un conjunto de datos, para comprender la distribución normal, utilizada en el análisis de datos; mediante la comparación de variables, posibilita entender términos como: hipótesis nula y alternativa, error tipo 1 y de intervalo de confianza.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a la probabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción a la distribución normal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Introducción a la prueba de hipótesis para la media',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a la distribución normal',
      referencia:
        'Aguilar, J. E. (2021). <i>Estadística Descriptiva, regresión y probabilidad con aplicaciones.</i> Ediciones de la U',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=15156&pg=202',
    },
    {
      tema: 'Introducción a la distribución normal',
      referencia:
        'Triola, M. (2018). <i>Estadística (12 ed.)</i>. Pearson Educación.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7386&pg=149',
    },
    {
      tema: 'Introducción a la prueba de hipótesis para la media',
      referencia:
        'Moreno, A. y Córcoles, S. (2020). <i>Python práctico.</i> Ediciones de la U.',
      tipo: 'Libro digital',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10285&pg=1',
    },
    {
      tema: 'Introducción a la prueba de hipótesis para la media',
      referencia:
        'Toomey, D. (2018). <i>Learning Jupyter 5: Explore interactive computing using Python, Java, JavaScript, R, Julia, and JupyterLab (2nd Ed).</i> Packt Publishing Ltd.',
      tipo: 'Libro digital ',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1881491&lang=es&site=ehost-live',
    },
    {
      tema: 'Introducción a la prueba de hipótesis para la media',
      referencia:
        'Toomey, D. (2017). <i>Jupyter for Data Science. Exploratory analysis, statistical modeling, machine learning and data visualization with Jupyter.</i> Packt Publishing Ltd.',
      tipo: 'Libro digital',
      link:
        'https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=e000xww&AN=1637911&lang=es&site=ehost-live',
    },
  ],
  glosario: [
    {
      termino: 'Censo',
      significado:
        'es un conjunto de actividades destinadas a recoger, recopilar, el padrón o lista de la población de una nación o pueblo en un momento determinado, la información demográfica social y económica, para luego evaluar, analizar y publicar o divulgar.',
    },
    {
      termino: 'Continua',
      significado:
        'es aquella que puede tomar un número infinito de valores entre dos valores cualesquiera de una característica. La altura de cinco personas: 1.85, 1.89, 1.93, 1.59, 1.65. En la práctica se mide la altura con dos decimales, pero también se podría dar con tres decimales o más.',
    },
    {
      termino: 'Cualitativa',
      significado:
        'Se refiere a aquellas variables en la que los resultados posibles no son valores numéricos. Por ejemplo: color del pelo, tipo de ropa preferida, lugar de veraneo, etc.',
    },
    {
      termino: 'Cuantitativa',
      significado:
        'se trata de características cuyas variaciones pueden ser expresadas de forma numérica. Por ejemplo: edad, peso, estatura, número de hijos, años de servicio, etc.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'mide la dispersión de una distribución de datos. Entre más dispersa está, más grande es su desviación estándar.',
    },
    {
      termino: 'Discreta',
      significado:
        'hace referencia cuando no se puede tomar ningún valor entre dos consecutivos, y es continua cuando puede tomar cualquier valor dentro de un intervalo. Ejemplos de variables discretas: número de empleados de una fábrica, número de hijos, número de cuentas en un banco.',
    },
    {
      termino: 'Distribución normal',
      significado:
        'es un modelo teórico capaz de aproximar satisfactoriamente el valor de una variable aleatoria a una situación ideal.',
    },
    {
      termino: 'Escala cronológica',
      significado:
        'el orden cronológico de los sucesos, es la ubicación de éstos en una línea temporal.',
    },
    {
      termino: 'Escala nominal',
      significado:
        'es una medición en la cual los números sirven como “etiquetas,” solamente para identificar o clasificar un objeto. Normalmente trata solo con variables no numéricas (no cuantitativas).',
    },
    {
      termino: 'Escala ordinal:',
      significado:
        'es la que permite evaluar la actitud de un encuestado con respecto a un tema utilizando un conjunto de respuestas ordenadas. Por ejemplo, las respuestas pueden incluir: “Muy satisfecho”, “Satisfecho”, “Insatisfecho” y “Muy insatisfecho”.',
    },
    {
      termino: 'Estadísticos',
      significado:
        'es cualquier función real medible de la muestra de una variable aleatoria.',
    },
    {
      termino: 'Media',
      significado:
        'resultado que se obtiene al dividir la suma de varias cantidades por el número de sumandos.',
    },
    {
      termino: 'Muestreo',
      significado:
        'selección de un conjunto de personas o cosas que se consideran representativos del grupo al que pertenecen, con la finalidad de estudiar o determinar las características del mismo.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'es el valor numérico que sirve para determinar la ocurrencia o no de una situación dada. Por ejemplo, cuando se lanza una moneda al aire, existe una probabilidad de 0,50 0 50 % de obtener cara o sello.',
    },
    {
      termino: 'Prueba de hipótesis',
      significado:
        'es una regla que especifica si se puede aceptar o rechazar una afirmación acerca de una población dependiendo de la evidencia proporcionada por una muestra de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, J. E. (2021). <i>Estadística Descriptiva regresión y probabilidad con aplicaciones.</i> Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=15156&pg=202',
    },
    {
      referencia:
        'Martínez, C. (2019). <i>Estadística y muestreo</i> (14 ed.) ECOE Ediciones. ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9278&pg=387',
    },
    {
      referencia:
        'Martínez, C. (2019). <i>Estadística básica aplicada</i> (5ta ed.) ECOE ediciones',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=8975&pg=82',
    },
    {
      referencia:
        'Lind, D., Marchal, W. & Wathen, S. (2012). <i>Estadística aplicada a los negocios y la economía</i> (15a ed). McGraw-Hill Interamericana.',
      link: 'https://cape.fcfm.buap.mx/jdzf/cursos/est1/libros/book1e1.pdf',
    },
    {
      referencia:
        'Gutiérrez, E. y Vladimirovna, O. (2016). <i>Estadística inferencial 1 para ingeniería y ciencias.</i> Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40474?page=69',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
