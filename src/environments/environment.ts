// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Requirements to connect with firebase.
  firebase: {
    apiKey: 'AIzaSyAowqJnCpZiAQbBhYNpEfN_juXgcuJ-9hg',
    authDomain: 'my-northstar-dev.firebaseapp.com',
    databaseURL: 'https://my-northstar-dev.firebaseio.com',
    projectId: 'my-northstar-dev',
    storageBucket: 'my-northstar-dev.appspot.com',
    messagingSenderId: '1061711582934'
  },
  tracking: {
    id: ''
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
