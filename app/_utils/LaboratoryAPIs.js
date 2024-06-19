const { default: axiosClient } = require(`./axiosClient`);

const getLabByLabCategory = (labCategory) => axiosClient.get(`/laboratories?filters[Category][$eq]=${labCategory}&populate=*`);


export default {
    getLabByLabCategory
}