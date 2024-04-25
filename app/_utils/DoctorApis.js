const { default: axiosClient } = require(`./axiosClient`);

const getDoctor = () => axiosClient.get('/Doctors?populate=*');


export default {
    getDoctor
}