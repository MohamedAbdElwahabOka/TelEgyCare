const { default: axiosClient } = require(`./axiosClient`);

const getPatientDetailsFromAppointmentsByDoctorReg_Num = (DocReg_Num) => axiosClient.get(`appointments?filters[doctor][reg_Num][$eq]=${DocReg_Num}&populate=*`);

export default {
    getPatientDetailsFromAppointmentsByDoctorReg_Num
}
