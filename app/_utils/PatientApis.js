const { default: axiosClient } = require(`./axiosClient`);

const getMedicalRecordsByDocName = (DocReg_Num) => axiosClient.get(`medical-records?filters[doctor][reg_Num][$eq]=${DocReg_Num}&populate=*`);
                                                   
export default {
    getMedicalRecordsByDocName
}
