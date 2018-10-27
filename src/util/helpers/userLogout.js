export const userLogout = (history) => {
  localStorage.removeItem('user')
  history.push('/');
};
