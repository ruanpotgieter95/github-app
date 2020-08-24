import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 10000
});

export { searchRepositories, searchRepositoryIssues } from 'api/search';