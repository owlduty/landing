module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Owl Duty - Endpoint monitoring and security";
      return args;
    });
  },
};
