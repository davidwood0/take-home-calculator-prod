
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davidwood0.github.io/take-home-calculator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://davidwood0.github.io/take-home-calculator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 564, hash: '7bb2972efa1a4c0bafd392e57ec76d581362153f8cf4986e80df473cf5ddec65', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1077, hash: 'eef87c40788818b5e3141d0b02d2f43e8722ac4b3f4da77f82a491be229c544a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20903, hash: '493cf73f3539ca805700e4528cacad3863a9e7892a98cd5dcac24d240c8ecb90', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
