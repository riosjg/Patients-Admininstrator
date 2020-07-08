import React, {useState} from 'react';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types';

const Form = ({createAppointment}) => {

    // Create appointment State
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptoms: ''
    })

    const [error, setError] = useState(false)

    // Function that executes when user types on input
    const updateState = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    // Submit form
    const submitAppointment = e => {
        e.preventDefault();
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        appointment.id = uuid();

        //add appointment to  appointments array
        createAppointment(appointment);

        //clean form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }

    // Values destructuring
    const { pet, owner, date, time, symptoms} = appointment;

    return ( 
        <>
            <h2>Create appointment</h2>

            { error ? <p className="alerta-error">Every field must be completed</p>
            : null}

            <form
                onSubmit={submitAppointment}
            >
                <label>Pet's name *</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet name"
                    onChange={updateState}
                    value={pet}
                />

                <label>Owner's name *</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={updateState}
                    value={owner}
                />

                <label>Date *</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={updateState}
                    value={date}
                />

                <label>Time *</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={updateState}
                    value={time}
                />

                <label>Symptoms *</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={updateState}
                    value={symptoms}
                />
                
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add appointment</button>
            </form>
        </>
     );
}

Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}
 
export default Form;