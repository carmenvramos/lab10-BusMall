/* globals ProductPic */

const app = new ProductPic();
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);