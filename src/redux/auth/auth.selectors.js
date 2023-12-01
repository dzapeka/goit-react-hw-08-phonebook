export const selectUserData = state => state.authStore.userData;
export const selectIsLoggedIn = state => state.authStore.isLoggedIn;
export const selectAuthIsLoading = state => state.authStore.isLoading;
export const selectAuthIsRefreshing = state => state.authStore.isRefreshing;
export const selectAuthError = state => state.authStore.error;
