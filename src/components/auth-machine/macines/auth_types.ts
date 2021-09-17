declare type IdToken = string | {
  raw: string;
}

declare type AccessToken = string | {
  raw: string;
}
declare type User = {
  name: string;
}
export declare type AuthRequest = any

export declare type AuthResult = false | {
  idToken: IdToken,
  accessToken: AccessToken,
  user: User
  auth: 'auth'
}
