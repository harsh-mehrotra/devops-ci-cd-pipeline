// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'ci-cd-app',
      script: './app.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
