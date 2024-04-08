import { v4 as uuidv4 } from 'uuid';
const bcrypt = require('bcrypt');

export const generatePublicId = () => {
  return uuidv4();
};

export const generateHashPassword = (password: string) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const removeFields = (response: any, removeData: Array<string>) => {
  for (const remove of removeData) {
    delete response._doc[remove];
  }
  return response;
};

export function responseGenerators(
  responseData?: object | string,
  responseStatusCode?: number,
  responseStatusMsg?: string,
  responseErrors?: boolean,
  token?: string,
  refreshToken?: string,
) {
  const responseJson: any = {};
  responseJson.data = responseData;
  responseJson.status_code = responseStatusCode;
  responseJson.status_message = responseStatusMsg;

  if (responseErrors === undefined) {
    responseJson.response_error = [];
  } else {
    responseJson.response_error = responseErrors;
  }

  if (token !== undefined && refreshToken !== undefined) {
    responseJson.token = token;
    responseJson.refreshToken = refreshToken;
  }
  return responseJson;
}
