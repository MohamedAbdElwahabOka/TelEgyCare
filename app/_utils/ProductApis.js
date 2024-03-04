const { default: axiosClient } = require(`./axiosClient`);

const getTests = () => axiosClient.get('/tests?populate=*')



export default {
    getTests
}