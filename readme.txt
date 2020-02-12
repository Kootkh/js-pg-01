Webpack implementing:
// required: installed node.js

Make project structure: <dist>,<src> & other
npm init
/**
 npm install flags:
    without flag        dependencies
    -S / --save         dependencies
    -D / --save-dev     devDependencies
    -g                  global to system
**/

  npm i -S dotenv-webpack
  create .env in root dir

  sudo npm i -g webpack webpack-cli
  npm i -D webpack webpack-cli
create in root dir "webpack.config.js"
  npm i -D html-webpack-plugin
  npm i -D clean-webpack-plugin
  npm i -D style-loader
  npm i -D css-loader
  npm i -D less
  npm i -D less-loader
  npm i -D node-sass sass-loader
  npm i -D file-loader
  npm i -D xml-loader
  npm i -D csv-loader papaparse
  npm i normalize.css
  npm i -S jquery
  npm i -D webpack-dev-server
  npm i -D copy-webpack-plugin
  npm i -D mini-css-extract-plugin
  npm i -D terser-webpack-plugin
  npm i -D optimize-css-assets-webpack-plugin
  npm i -D nodemon-webpack-plugin

implementing babel webpack support:
  npm i -D babel-loader @babel/core
  npm i -S @babel/polyfill

implementing babel PRESETS webpack support:
  npm i -D @babel/preset-env
  npm i -D @babel/preset-typescript
  
  npm i react react-dom
  npm i -D @babel/preset-react

implementing babel PLUGINS webpack support:
  npm i -D @babel/plugin-proposal-class-properties

implementing ESLINT webpack support:
  npm i -D eslint eslint-loader babel-eslint eslint-plugin-react


  npm i lodash

  npm i -D webpack-bundle-analyzer
  npm i -D nodemon-webpack-plugin

  npm -i pg



  create .env in root dir

  sudo npm i -g webpack webpack-cli

  npm i -S dotenv-webpack normalize.css jquery @babel/polyfill react react-dom lodash
  
  npm i -D webpack webpack-cli html-webpack-plugin clean-webpack-plugin style-loader css-loader less less-loader node-sass sass-loader file-loader xml-loader csv-loader papaparse webpack-dev-server copy-webpack-plugin mini-css-extract-plugin terser-webpack-plugin optimize-css-assets-webpack-plugin nodemon-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-typescript @babel/preset-react @babel/plugin-proposal-class-properties eslint eslint-loader babel-eslint eslint-plugin-react webpack-bundle-analyzer nodemon-webpack-plugin
