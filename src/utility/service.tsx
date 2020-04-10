//https://dev.to/camilomejia/fetch-data-with-react-hooks-and-typescript-390c

export enum ConnectionStatus {
  INIT = 'Init',
  LOADING = 'Loading',
  SUCCESS = 'Success',
  ERROR = 'Error'
}

interface ServiceInit {
  status: ConnectionStatus.INIT;
}

interface ServiceLoading {
  status: ConnectionStatus.LOADING;
}

interface ServiceLoaded<T> {
  status: ConnectionStatus.SUCCESS;
  payload: T;
}

interface ServiceError {
  status: ConnectionStatus.ERROR;
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;