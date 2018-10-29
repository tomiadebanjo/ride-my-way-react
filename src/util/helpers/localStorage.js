export const storeData = (data) => {
  const { fullName, token, userId } = data
  const user = { fullName, token, userId }

  localStorage.setItem('user', JSON.stringify(user));
};

export const getData = (key) => {
  const data = JSON.parse(localStorage.getItem(key))
  return data;
}
