const { default: axiosClient } = require(`./axiosClient`);

const addDoctor = (doctor) => axiosClient.post('/doctors', doctor);

export default {
    addDoctor
}