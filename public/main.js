import { envPromise } from './env.js';

envPromise.then(env => {
    console.log("Loaded env:", env);
});