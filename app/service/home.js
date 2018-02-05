"use strict";

const Service = require("egg").Service;

class HomeService extends Service {
  async request(url, opts) {
    opts = Object.assign(
      {
        // 创建连接超时30毫秒，接收响应超时30毫秒
        timeout: ["30s", "30s"],
        dataType: "json"
      },
      opts
    );
    return this.ctx.curl(url, opts);
  }
  async getHotPlayMovies(location) {
    const { ctx } = this;
    let url = "https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api";
    const res = await this.request(url, {
      data: {
        locationId: location.id
      }
    });
    return res.data;
  }
}

module.exports = HomeService;
