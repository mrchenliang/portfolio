export const getInitialMode = () => {
  const isReturningUser = 'dark' in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userPrefersDark = getPrefColorScheme();
  // if mode was saved -> dark / light
  if(isReturningUser) {
    return savedMode;
    // if preferred color scheme is dark -> dark
  } else if (userPrefersDark) {
    return true;
    // otherwise -> light
  } else {
    return false;
  }
}

export const getPrefColorScheme = () => {
  if(!window.matchMedia) return;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}