const { default: axiosClient } = require(`./axiosClient`);

const getDoctor = () => axiosClient.get('/doctors?populate=*');

const getDoctorByRegNum = (regNum) => axiosClient.get(`/Doctors?filters[reg_Num][$eq]=${regNum}&populate=*`);




export default {
    getDoctor,
    getDoctorByRegNum
}