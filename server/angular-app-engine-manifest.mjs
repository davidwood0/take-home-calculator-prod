
export default {
  basePath: 'https://davidwood0.github.io/take-home-calculator',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
