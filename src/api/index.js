import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 5000
});

export { searchRepositories } from 'api/search';