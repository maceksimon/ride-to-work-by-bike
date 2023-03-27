import VueLogger from 'vuejs3-logger';

export default ({ app }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const options = {
    // https://github.com/MarcSchaetz/vuejs3-logger#properties
    isEnabled: true,
    logLevel: isProduction ? 'error' : 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true,
  };

  app.use(VueLogger, options);
};
