import { Config } from './../../config';

export const environment = {
  production: true,
  firebase: {
    apiKey: Config.MY_KEY,
    authDomain: Config.DOMAIN,
    databaseURL: Config.DB_URL,
    projectId: Config.PROJECT_ID,
    storageBucket: Config.STORAGE,
    messagingSenderId: Config.MESSAGES_ID

  }
};
