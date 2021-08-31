// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// import { AuthorizationDetails, CLIENT_ID, CLIENT_SECRET } from "src/app/authorization-details";
// import { GithubService } from "src/app/github-service/github.service";


export const environment = {
  production: false,
  // AuthorizationDetails: AuthorizationDetails,

  // dataURL:`https://api.github.com/users/?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  // dataURL:`https://api.github.com/users/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
