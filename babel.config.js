module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: 'src/js',
              rootPathPrefix: '~',
            },
            {
              rootPathSuffix: 'src/images',
              rootPathPrefix: 'img',
            },
          ],
        },
      ],
    ],
  };
};
