/**
 * GET DATABASE LOGINS LIST
 * Make sure to read the /exercise-info/11-fetching-in-Node-JS.md file before you start
 * Make sure to read the /exercise-info/11-json-server.md file before you start
 * @prerequisites Please, follow the list of steps you need to make:
 * * Execute`npx json-server --watch data/db.json` to start the db watcher
 * * the USERS json will start responding at 'http://localhost:3000/users/'
 */

/**
 * @init_data
 * * Import fetch function from 'node-fetch' to use the fetch() function in code
 * * set the usersUrl constant to store the json-server 'users' endpoint path
*/

import fetch from 'node-fetch';

export const usersUrl = 'http://localhost:3000/users/';

/**
 * @task
 * Create the getLoginList(data) function that follows the requirements:
 * * Takes an array of objects as the 'data' argument 
 * * Returns an array of the login properties values of every array item
 * Data example: const data = [{login: 'login1'}, {login: 'login2'}]
 * Call example: getLoginList(data) => ['login1', 'login2']
 * You can use loops or array methods and any function syntax. No limits!
 * Example: const getLoginList = (data) => {<Your code>}
*/

const getLoginList = (data) => {
  return data.map(item => item.login);
};


/**
 * @task 
 * Create the getData constant that stores the promise 
 * of the fetched the URL variable:
 * example: const getData = <node_fetch_function_call>
*/

const getData = fetch(usersUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Fetch error:', error.message);
    return []; // Return an empty array in case of an error
  });


/**
 * @task 
 * Create the result constant that stores the resolved promise value:
 * * Do not forget to convert the response to a JavaScript array when resolved
 * * Use the getLoginList() function to log the array of logins from fetched data in the console
 * * Return the array of logins when resolved 
 * Example: const result = getData
 *  .then(<Your_converting_code>)
 *  .then(<Your_logging_and_return_code>)
*/

export const result = getData
  .then(data => {
    const logins = getLoginList(data);
    console.log(logins);
    return logins; 
  })
  .catch(error => {
    console.error('Processing error:', error.message);
    return []; 
  });


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function