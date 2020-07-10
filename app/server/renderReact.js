import React from 'react';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';

const reactDomServer = require('react-dom/server');

let buildHtml;

module.exports = function(app) {
  app.get('*', (req, res) => {
    const context = {};
    const appHtml = reactDomServer.renderToString(
      <StaticRouter location={ req.url } context={ context }>
        <App/>
      </StaticRouter>,
    );
    if (!buildHtml) {
      buildHtml = fs.readFileSync('./build/index.html', 'utf8');
    }
    let result = buildHtml.replace('#body', appHtml);
    //console.log(buildHtml);
    //console.log(appHtml);
    res.send(result);
  });
};