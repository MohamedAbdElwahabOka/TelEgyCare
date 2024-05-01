const { default: axiosClient } = require(`./axiosClient`);

const getPatient = () => axiosClient.get('/patients?populate=*');

const getDoctorByReNm = (regNum) => axiosClient.get(`/Doctors?filters[reg_Num][$eq]=${regNum}&populate=*`);




export default {
    getPatient,
    getDoctorByReNm
}