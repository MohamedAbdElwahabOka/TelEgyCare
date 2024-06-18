const { default: axiosClient } = require(`./axiosClient`);

const getMedicalRecords = () => axiosClient.get("medical-records?populate=*")
const AddNewMedicalRecordForExistingPatient = (MedicalRecord) => axiosClient.post('/medical-records', MedicalRecord);
const getMedicalRecordsByDoctorReg_Num = (DocReg_Num) => axiosClient.get(`medical-records?filters[doctor][reg_Num][$eq]=${DocReg_Num}&populate=*`);

export default {
    AddNewMedicalRecordForExistingPatient,
    getMedicalRecordsByDoctorReg_Num,
    getMedicalRecords
}
