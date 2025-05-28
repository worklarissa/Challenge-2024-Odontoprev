// src/services/database.ts
import database from '@react-native-firebase/database';

interface Appointment {
  id?: string;
  patientName: string;
  date: string;
  procedure: string;
}

export const DatabaseService = {
  createAppointment: async (userId: string, data: Appointment) => {
    const ref = database().ref(`appointments/${userId}`);
    return ref.push(data);
  },

  getAppointments: (userId: string) => {
    return database().ref(`appointments/${userId}`).once('value');
  },

  updateAppointment: (userId: string, appointmentId: string, data: Partial<Appointment>) => {
    return database().ref(`appointments/${userId}/${appointmentId}`).update(data);
  },

  deleteAppointment: (userId: string, appointmentId: string) => {
    return database().ref(`appointments/${userId}/${appointmentId}`).remove();
  }
};
