export const SONGS = {
  FOUND: 'Song found successfully',
  NOT_FOUND: 'Song not found',
  CREATED: 'Song created successfully',
  UPDATED: 'Song updated successfully',
  DELETED: 'Song deleted successfully',
  ERROR: 'Error while fetching songs',
};

export const USERS = {
  FOUND: 'User found successfully',
  NOT_FOUND: 'User not found',
  CREATED: 'User created successfully',
  UPDATED: 'User updated successfully',
  DELETED: 'User deleted successfully',
  ERROR: 'Error while fetching users',
};

export const MODULES = {
  SONG: 'Song',
  CUSTOMER: 'Customer',
  USER: 'User',
  LOG: 'Log',
};

export const ERROR = {
  UNAUTHORIZED: 'Unauthorized access, Please provide valid token',
  EXPIRED: 'Unauthorized access, Token expired',
  INVALID: 'Unauthorized access, Invalid token',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  SOMETHING_WENT_WRONG: 'Something went wrong',
};

export const LOGGER_CONFIG = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'dd-mm-yyyy HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
};
