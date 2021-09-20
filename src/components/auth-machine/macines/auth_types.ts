import {AuthenticationService} from "./auth";

export declare type IdToken = string | {
  raw: string;
  [key:string]: any;

}

export declare type AccessToken = string;
//   | {
//   raw: string;
//   [key:string]: any;
//
// }
export declare type User = {
  name: string;
  [key:string]: any;
}
export declare type AuthRequest = any& {
  authService: AuthenticationService
}

export declare type AuthResult = false | {
  idToken?: IdToken,
  accessToken?: AccessToken,
  user?: User
  auth?: 'auth',
  authenticated?: boolean
  error?: string
}
