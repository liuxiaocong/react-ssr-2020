import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import fs from "fs";
let buildHtml;
export default function render(req, res) {
  const context = {};
  const appString = renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <App/>
    </StaticRouter>
  );
  if (!buildHtml) {
    buildHtml = fs.readFileSync('./build/index.html', 'utf8');
  }
  let result = buildHtml.replace('#body', appString);
  console.log(appString);
  res.send(result);
};