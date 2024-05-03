const { default: axiosClient } = require(`./axiosClient`);

const getDoctor = () => axiosClient.get('/doctors?populate=*');

const getDoctorByRegNum = (regNum) => axiosClient.get(`/Doctors?filters[reg_Num][$eq]=${regNum}&populate=*`);

const addDoctor = (doctor) => axiosClient.post('/doctors', doctor);

export default {
    getDoctor,
    getDoctorByRegNum,
    addDoctor
}