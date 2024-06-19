const { default: axiosClient } = require(`./axiosClient`);


const UpdateAppointmentState = (id, updatedAppointment) => axiosClient.put(`/appointments/${id}`, updatedAppointment);

export default {
    UpdateAppointmentState
}