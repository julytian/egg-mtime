"use strict";

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1517802772576_2280";

  // add your config here
  config.middleware = [];

  // view
  config.view = {
    defaultViewEngine: "nunjucks",
    defaultExtension: ".html",
    mapping: {
      ".html": "nunjucks"
    }
  };

  // sequlize
  config.sequelize = {
    dialect: "mysql",
    database: "mtime",
    host: "127.0.0.1",
    post: "3306",
    username: "root",
    password: "",
    timezone: "+08:00"
  };

  // mysql
  config.mysql = {
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "",
      database: "mtime"
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false // 是否加载到 agent 上，默认关闭
  };

  return config;
};
