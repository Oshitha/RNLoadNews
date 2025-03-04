module.exports = function (api) {
    api.cache(true);
    return {
      presets: ["babel-preset-expo"],
      plugins: ["expo-router/babel"],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./app'],
            alias: {
              '@components': './app/components',
              '@screens': './app/screens',
              '@assets': './assets',
              '@utils': './app/utils',
            },
          },
        ],
      ],
    };
  };