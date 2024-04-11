import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as duration from 'dayjs/plugin/duration';
import * as timezone from 'dayjs/plugin/timezone';
import { v4 as uuidv4 } from 'uuid';
const bcrypt = require('bcrypt');

dayjs.extend(utc);
dayjs.extend(duration);
dayjs.extend(timezone);

export const generatePublicId = () => {
  return uuidv4();
};

export const setTimesTamp = () => {
  return dayjs().unix();
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
  responseJson.statusCode = responseStatusCode;
  responseJson.message = responseStatusMsg;

  if (responseErrors === undefined) {
    responseJson.responseError = [];
  } else {
    responseJson.responseError = responseErrors;
  }

  if (token !== undefined && refreshToken !== undefined) {
    responseJson.token = token;
    responseJson.refreshToken = refreshToken;
  }
  return responseJson;
}
