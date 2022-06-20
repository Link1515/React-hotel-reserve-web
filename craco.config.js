const path = require(`path`);

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
      }
    },
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};
