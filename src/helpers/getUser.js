const getUser = async (userId) => {
  const url = "https://jsonplaceholder.typicode.com/users/" + userId;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};
export default getUser;
