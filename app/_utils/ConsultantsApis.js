const { default: axiosClient } = require(`./axiosClient`);

const getConsultant = () => axiosClient.get('/consultants?populate=*');

const getDoctorByReNum = (regNum) => axiosClient.get(`/Doctors?filters[reg_Num][$eq]=${regNum}&populate=*`);

const addConsultant = (Consultant) => axiosClient.post('/consultants', Consultant);




export default {
    getConsultant,
    getDoctorByReNum,
    addConsultant
}