module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        cwd: 'babelrc',
        alias: {
          '@assets': './assets',
          '@components': './src/components/',
          '@constants': './src/constants/index.ts',
          '@services': './src/services/',
          '@screens': './src/screens/',
          '@icons': './assets/index.ts',
          '@routes': './src/routes/index.tsx',
          '@state': './src/state/',
          '@middlewares': './src/middlewares/index.ts',
          '@utils': './src/utils/index.ts',
          '@typings': './src/constants/typings/'
        },
      }
    ]
  ]
};
