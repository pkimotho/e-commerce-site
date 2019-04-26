// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { Config } from '../../config';


export const environment = {
  production: false,
  firebase: {
    apiKey: Config.MY_KEY,
    authDomain: Config.DOMAIN,
    databaseURL: Config.DB_URL,
    projectId: Config.PROJECT_ID,
    storageBucket: Config.STORAGE,
    messagingSenderId: Config.MESSAGES_ID

  }
};
