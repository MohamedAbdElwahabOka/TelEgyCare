const { default: axiosClient } = require(`./axiosClient`);

const getMedicalRecords = () => axiosClient.get("medical-records?populate=*")
const AddNewMedicalRecordForExistingPatient = (MedicalRecord) => axiosClient.post('/medical-records', MedicalRecord);
const getMedicalRecordsByDoctorReg_Num = (DocReg_Num) => axiosClient.get(`medical-records?filters[doctor][reg_Num][$eq]=${DocReg_Num}&populate=*`);
const getMedicalRecordsByPatientId = (PatientId) => axiosClient.get(`medical-records?filters[patient][id][$eq]=${PatientId}&populate=*`);
const UpdateState = (id, updated) => axiosClient.put(`/medical-records/${id}`, updated);

export default {
    AddNewMedicalRecordForExistingPatient,
    getMedicalRecordsByDoctorReg_Num,
    getMedicalRecords,
    getMedicalRecordsByPatientId,
    UpdateState
}
