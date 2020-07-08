import React, {useState, useEffect} from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments){
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect( () => {
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else{
      localStorage.setItem('appointments', JSON.stringify([]));
    }
    // eslint-disable-next-line
  }, [appointments]);

  const createAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
    console.log(appointments)
  }

  const deleteAppointment = id => {
    setAppointments(appointments.filter(appointment => appointment.id !== id))
  }

  const title = appointments.length === 0 ? "There aren't any appointments" : 'Manage your appointments'

  return (
    <>
      <h1>Patients Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key = {appointment.id}
                appointment = {appointment}
                deleteAppointment = {deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
