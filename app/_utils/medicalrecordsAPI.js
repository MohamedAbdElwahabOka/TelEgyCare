const { default: axiosClient } = require(`./axiosClient`);


const AddNewMedicalRecordForExistingPatient = (MedicalRecord) => axiosClient.post('/medical-records', MedicalRecord);

export default { AddNewMedicalRecordForExistingPatient }