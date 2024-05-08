const { default: axiosClient } = require(`./axiosClient`);

const getPatientDetailsFromAppointmentsByDoctorReg_Num = (DocReg_Num) => axiosClient.get(`appointments?filters[doctor][reg_Num][$eq]=${DocReg_Num}&populate=*`);
const getPatientDetailsFromPatientsById = (id) => axiosClient.get(`patients/${id}?populate=*`)

export default {
    getPatientDetailsFromAppointmentsByDoctorReg_Num,
    getPatientDetailsFromPatientsById
}
