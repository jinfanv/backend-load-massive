# Api COVID - Modulo de Carga Masiva

Es un repositorio que continue una servicio esencial que complementa el funcionamiento del modulo principal de la [**Api Covid**](https://github.com/JonasTronco/apiCovidGraphql) que permite cargar grandes volumenes de registros a Mongo para luego poder ser consumido mediante graphQL. 

Para usar la Api principal por favor usar: https://app-backend-graphql.herokuapp.com/

# Instalación 🐱‍🏍
Se requiere [Node.js](https://nodejs.org/) v12+ para ejecutarse.
1. Clona el proyecto con el comando:
    ```sh
     $ git clone https://github.com/JonasTronco/backend-load-massive.git
    ```
2. Verifica que tienes la ultima versión de Node.js y en el directorio ejecuta:
    ```sh
     $ npm install
    ```
### Ambientes de Desarrollo
Ejecuta el modulo con nodemon

```sh
$ cd data_analysis
$ python main.py
$ npm run dev
```
### Ambientes de Producción
Ejecuta el modulo con las variables de entorno de acuerdo al archivo
```sh
$ cd data_analysis
$ python main.py
$ npm run pro
```

License
----

MIT