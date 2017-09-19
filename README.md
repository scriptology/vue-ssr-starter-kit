<p align="center">
  <img width="100"src="src/favicon.png">
</p>


# Vue SSR Boilerplate
Vue.js Server Side Rendering Boilerplate without Polluting Vuex


## Features:
* Customizable webpack config.
* Hot module replacement.
* Codes can run with or without SSR.
* Lazy loading routes.
* Support PUG/JADE templates
* Support SASS/SCSS


## Environments
* Node.js >= 6.10


## Initialize
First, download or clone this project.

Then install npm packages via `npm install`.


# Сборка css, images
```
npm run gulp-build:prod
npm run gulp-build:test
npm run gulp-build:dev
npm run gulp:dev // режим разработки (watch для файлов css, images)
```

## Development
Перед началом разработки необходимо собрать статику - npm run gulp-build:dev

```sh
npm run dev
```

### without SSR
http://localhost:8100

It's served by webpack-dev-server. I recommend developing in this mode at first. So you can focus on your view things, not bother with server side things.


### with SSR
http://localhost:8200

When your pages look fine, then you step into SSR mode to check the server side is OK. `--inspect` flag is on, so you can debug your server side code using Chrome ( https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js ).
But codes in `src` folder are run in node VM context, so can not be debugged.


```sh
npm run dev:brk
```

This will break on the first line of `server.js`.


## Some Example Pages
When you start the project, you can visit http://localhost:8100 or http://localhost:8200 to look around.


## How to Write Pages
Every thing is the same as developing a SPA, except one thing, you need to define a `prefetch` method in your component. `prefetch` must return a `Promise`, the resolved result will be merge into `this.$data` during rendering.


## Build Distribution

```sh
npm run build
```

That's it.

Files will be output to `dist` folder. In `npm run dev` mode, files are output to `tmp` folder.


## Run in Production
```sh
node server.js
```
In production, instead of serving static assets by SSR server, you should setup a nginx to serve static assets for performance reason.


## Configuration
By default, the boilerplate provides two sets of config files.
`config/dev.js` is used in development mode, `config/default.js` is used in production mode.
You can override by

```sh
npm run dev --config=YOUR-CONFIG-FILE-NAME
```

in development.

Or you can use

```sh
nm run local
```

which is an alias of

```sh
npm run dev --config=local
```

And in production, you can override `default.js` by:

```sh
node server.js --config=YOUR-CONFIG-FILE-NAME
```


### Options in config file:
* `ssrPort`: The port number that the server-side listened on.
* `publicPath`: `output.publicPath` of webpack.
* `serveStaticMountPath`: Mount path of `express.static()`.

   In production environment, it's normally the same as `publicPath` without trailing slash.
   Needn't set it if you use Nginx to serve static files.

   In development environment, `publicPath` can set to the full URL of webpack-dev-server, e.g, `http://127.0.0.1:8100/assets/`,
   and needn't set `serveStaticMountPath`.

* `devServer.port`: `devServer.port` of webpack.
* `devServer.proxy`: `devServer.proxy` of webpack.
* `runtimeConfig`: Object. Customizable runtime params that can be accessed as `CONFIG` variable in code.

We also defined some environment variables using webpack.DefinePlugin:
* `DEBUG`: `true` in development, `false` in production.
* `VERSION`: `version` in `package.json`.
* `TARGET`: `node` on server-side, `web` on client-side.
* `CONFIG`: `runtimeConfig` in config file.
