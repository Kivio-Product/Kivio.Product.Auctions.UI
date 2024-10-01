const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const share = require('webpack/lib/sharing/share');

module.exports = {
  output: {
    uniqueName: 'your_project_name',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      '@angular/common': path.resolve(__dirname, './node_modules/@angular/common'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'loginApp',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginModule': './src/app/login/login.module.ts',
      },
      shared: {
        ...share({}),
      },
    }),
  ],
};
