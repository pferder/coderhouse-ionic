# Intro

- Setear un proxy en NPM
	- npm config set proxy http://proxy.company.com:8080
	- npm config set https-proxy http://proxy.company.com:8080

- Android SDK Tools
 	- Instalar [Android Tools](http://developer.android.com/sdk/index.html#Other)
 	- [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html?ssSourceSiteId=otnes)

 	- Agregar las carpetas platform_tools y tools al PATH
 		- [Windows](http://www.computerhope.com/issues/ch000549.htm)
 		- [OSX]()

 	- Para probar instalación correr comandos:
 		- adb
 		- android

 	- Actualizar Node a la última versión
 		- http://davidwalsh.name/upgrade-nodejs
 	- Correr comando "android" e instalar Platforms Tools y API 19 desde
 	- Correr comando "android avd" crear una nueva virtual machine
 	- Probar la virtual machine haciendo click en el botón "Start"

- Dentro de la carpeta del proyecto

	- comando "ionic platform add android" para agregar a android dentro del proyecto
	- "ionic emulate android" para compilar la app y probarla en el emulador 

- Si falla "ionic start" en windows setear una variable de ambiente nueva "PROXY" con la dirección del proxy (http://proxy01:80)

- Links
	- [Ionic Box (Virtual Machine)](https://github.com/driftyco/ionic-box)
	
