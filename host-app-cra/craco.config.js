const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 3009,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {},
        shared: ['react', 'react-dom'],
      }),
    ],
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
  },
}
