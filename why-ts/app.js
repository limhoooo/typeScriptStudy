// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};


/**
 * 
 * @typedef {object} User
 * @property {string} name 
 * @property {string} email 
 * @property {Address} address 
 */


/**
 *
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @returns {Promise<User>} 
 * 
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city
})

async function startApp() {
  const result = await fetchUser()
  console.log(result);
  user = result.data;
  console.log(user);
  username.innerText = user[0].name
  email.innerText = user[0].email
  address.innerText = user[0].address
}

startApp();
