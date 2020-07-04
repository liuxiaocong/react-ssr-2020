import React from 'react';
import fs from 'fs';
import App from "../src/App";
const reactDomServer = require('react-dom/server');


let buildHtml;

module.exports = function(app) {
  app.get('/', (req, res) => {
    const appHtml = reactDomServer.renderToString(<App/>);
    if(!buildHtml){
      buildHtml = fs.readFileSync('./build/index.html','utf8');
    }
    let result = buildHtml.replace('#body', appHtml);
    console.log(buildHtml);
    console.log(appHtml);
    res.send(result)
  })
}