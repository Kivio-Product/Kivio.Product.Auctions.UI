const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfLogin',

  exposes: {
    './Component': './projects/mf-login/src/app/app.component.ts', // Exporta ese componente
  },

  shared: { // Qué librerías que usa el proyecto, quiero compartir
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  sharedMappings: ['@common-lib'],
});
