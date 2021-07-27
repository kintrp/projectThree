import axios from 'axios';
 
const service = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: 'http://localhost:5005/api'
  // withCredentials: true // => you might need this when having the users in the app
});
 
const errorHandler = err => {
  throw err;
};
 
const saveNewThing = newThing => {
  return service
    .post('/animals/:id', newThing)
    .then(res => res.data)
    .catch(errorHandler);
};
 
export default {
  service,
  saveNewThing
};