module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~screens': './src/screens/index.ts',
          '~components': './src/components/index.ts',
          '~types': './src/types/index.ts',
          '~api': './src/api/index.ts',
          '~icons': './src/assets/icons/*',
          '~routes': './src/routes',
          '~theme': './src/theme/index.ts',
          '~utils': './src/utils/index.ts',
        },
      },
    ],
  ],
};
