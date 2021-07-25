export const getData = (state) => state.authorization.data;

export const getToken = (state) => state.authorization.token;

export const getIsLoading = (state) => state.authorization.isLoading;

export const getIsLoadingToken = (state) => state.authorization.isLoadingToken;

export const getIsRequested = (state) => state.authorization.isRequested;

export const getError = (state) => state.authorization.error;
