// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export let environment = {
  production: false,
  Registro: false,
  firebase: {
      apiKey: 'AIzaSyBEfDoEa9F0sDm4PIn98hGhkiI6N7bz01g',
      authDomain: 'worldon-inic.firebaseapp.com',
      databaseURL: 'https://worldon-inic.firebaseio.com',
      projectId: 'worldon-inic',
      storageBucket: 'worldon-inic.appspot.com',
      messagingSenderId: '860642964784'
  }
};
