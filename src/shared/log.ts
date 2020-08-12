import AsyncStorage from '@react-native-community/async-storage';
import {getRandomString} from 'bridge/CovidShield';

const UUID_KEY = 'UUID_KEY';

const cachedUUID = AsyncStorage.getItem(UUID_KEY)
  .then(uuid => uuid || getRandomString(8))
  .then(uuid => {
    AsyncStorage.setItem(UUID_KEY, uuid);
    return uuid;
  })
  .catch(() => null);

let currentUUID = '';

export const setLogUUID = (uuid: string) => {
  currentUUID = uuid;
  AsyncStorage.setItem(UUID_KEY, uuid);
};

export const getLogUUID = async () => {
  return currentUUID || (await cachedUUID) || 'unset';
};

export const captureMessage = async (message: string, params: {[key in string]: any} = {}) => {
  const uuid = await getLogUUID();
  const finalMessage = `[${uuid}] ${message}`.replace(/\n/g, '');
  const finalParams = params;

  if (__DEV__) {
    console.log(finalMessage, finalParams); // eslint-disable-line no-console
  }
};

export const captureException = async (message: string, error: any, params: {[key in string]: any} = {}) => {
  const uuid = await getLogUUID();
  const finalMessage = `[${uuid}] Error: ${message}`.replace(/\n/g, '');

  const finalParams = {
    ...params,
    error: {
      message: error && error.message,
      error,
    },
  };

  if (__DEV__) {
    console.log(finalMessage, finalParams); // eslint-disable-line no-console
  }
};
