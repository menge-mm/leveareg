export type AccountInfo = {
  id: string;
  email?: string | unknown;
  username: string;
  givenName?: string;
  familyName?: string;
  photo?: string | unknown;
  phone?: string | unknown;
  homeAccountId?: string;
  localAccountId?: string;
  account: any;
};
