module.exports = (api) => {
  api.cache(true);

  return {
    "presets": ['@babel/preset-env', '@babel/preset-react'],
    "plugins": [
       [
         "babel-plugin-root-import",
         {
           "rootPathSuffix": "src/js",
           "rootPathPrefix": "~"
         }
       ]
     ],
  };
};
