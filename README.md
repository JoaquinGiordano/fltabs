# fltabs
> Libreria de JavaScript para generar un sistema de pestañas en HTML

## Instalación
   1. Descarga los archivos css y js de fltabs
   2. Insertalos en el directorio de tu proyecto
   3. Escribe `<link rel="stylesheet" href="fltabs.css">` en el `<head>` de tu HTML para importar el css en el html (este punto es opcional ya que puedes crear tu propia hoja de estilos en CSS si deseas)
   4. Escribe `<script src="fltabs.js"></script>` en el final del `<body>` de tu HTML para importar la libreria de JS
   5. Crea un archivo JS el cual importaras despues del fltabs.js el cual al inicio del mismo contendra esto ` const fltabs = new FLtabs();` para importar la libreria en JS

## Utlización
   
   ### fltabs.start()
   Este metodo se utiliza con el fin de crear un elemento donde se vayan a almacenar las pestañas para eso en tu archivo HTML creas un elemento `<div id="x">` con una id de tu preferencia, posterior mente en el archivo JS que creamos insertaremos el siguiente codigo: 

   ```javascript
      const fltabs = new Xtabs();
      fltabs.start({
      container: '#x' //x es la id del elemento contenedor
      })
   ```
        
   Esto nos permitira inicializar el sistema de Pestañas

   ### fltabs.addTab()
   Este metodo sirve para poder crear una pestaña, al mismo debemos ingresarle algunos parametros para que pueda funcionar, los parametros debemos ingresarlos de la siguiente manera:

   ```javascript
        fltabs.addTab({
        title:'title',                  //titulo de la pestaña
        container: '#x',                //x es la id del elemento contenedor
        content: `<h1>Tab 0</h1>`,      //ingresa lo que desees que contenga la pestaña
        closeButton: true               //por defecto en verdadero
        });
   ```

   ### FLtabs.removeTab()
   Este es un metodo estatico es decir que puedes acceder a el sin inicializar la clase, este sirve para borrar una pestaña. Para que el mismo pueda funcionar debemos ingresarle un parametro de la siguiente manera:

   ```javascript
        FLtabs.removeTab(id);
   ```
   > Con "id" nos referimos al ID de la pestaña a borrar

   > Importante: Al ejecutar este metodo debes debes asegurarte de escribir el "FL" de "FLtabs" en mayusculas ya que es un metodo estatico

   ### xtabs.changeActualTab()
   Este metodo se utiliza para cambiar la pestaña activa en el momento. Para que el mismo pueda funcionar debemos ingresarle un parametro de la siguiente manera:
        
   ```javascript
        fltabs.chageActualTab(id);
   ```
   > Con "id" nos referimos al ID de la pestaña a borrar

   ### fltabs.getTabsCount()
   Este metodo retorna la cantidad de pestañas activas en el momento
    
   ### fltabs.getActualTabId()
   Este metodo retorna el ID de la pestaña activa en el momento
