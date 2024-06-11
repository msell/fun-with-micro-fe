const { dependencies } = require('./package.json')

module.exports = {
  name: 'host-app',
  filename: 'remoteEntry.js',
  exposes: {},
  remotes: {
    todoComponents: 'remote@http://localhost:4173/assets/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: dependencies['react-router-dom'],
    },
  },
}
