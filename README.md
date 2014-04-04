## Compilar y desplegar

Para compilar por primera vez, ejecutar

```
npm install
grunt
```

Para generar un desplegable (el desplegable estará en la carpeta build)

```
grunt build
```

Para desplegar en producción, copiar el desplegable al branch `gh-pages`.

## Uso

Para linkar con la página de una encuesta, pasar cada uno de los idiomas en la forma lang=targetURL. Por ejemplo:

```
http://spain-survey.com/index.html?fr=https://es.surveymonkey.com/s/PLC938Z&en=https://es.surveymonkey.com/s/PX32H2Y&es=https://es.surveymonkey.com/s/PXFHQXL
```

Cuando la URL esté probada, usar un acortador de URLs para hacerla más sencilla.
