import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { mysql_conf } from "./db";

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611739770207_4758';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.orm = mysql_conf

  return config;
};
