import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import './EditDetails.css'
import firebase from '../FIREBASE/firebase'

const EditDetails = () => {
  const location = useLocation();
  const videoUrl = location.state?.url || '';
  const videoName = location.state?.name || '';
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [diagnosis, setDiagnosis] = useState('');


    useEffect(() => {
        const inputs = document.querySelectorAll('.fillDetails_input_field');
        // Event listeners for input fields
        inputs.forEach((inp) => {
        inp.addEventListener('focus', () => {
            inp.classList.add('active');
        });
        inp.addEventListener('blur', () => {
            if (inp.value !== '') return;
            inp.classList.remove('active');
        });
        });

        // Clean up event listeners and interval
        return () => {
        inputs.forEach((inp) => {
            inp.removeEventListener('focus', () => {
            inp.classList.add('active');
            });
            inp.removeEventListener('blur', () => {
            if (inp.value !== '') return;
            inp.classList.remove('active');
            });
        });
        };
    }, []);

    const hanldeSaveDetails = () => {

      const details = {
        name: name,
        age: age,
        gender: gender,
        date: date,
        time: time,
        diagnosis: diagnosis,
        videoUrl: videoUrl,
        videoName: videoName
      };

      const [sanitizedVideoName] = videoName.split('.');

      firebase
        .database()
        .ref('userDetails/'+sanitizedVideoName)
        .set(details)
        .then(() => {
          console.log("Details saved successfully")
        })
        .catch((error) => {
          console.log("Error adding details: ",error);
        })
    };

  return (
    <>
    <Header />
    <div className='fillDetails_innerbox'>
            <div className='fillDetails_form'>
              <form className='fillDetails_form1' autoComplete='off'>
                <div className='fillDetails_back' 
                >
                  <i className='bx bx-right-arrow-alt'></i>
                  <h4>Go To Dashboard</h4>
                </div>
                <div className='fillDetails_heading'>
                  <h2>Fill Details</h2>
                </div>

                <div className='fillDetails_actual_form'>
                  <div className='fillDetails_input_wrap'>
                    <input
                      required
                      type='text'
                      className='fillDetails_input_field'
                      autoComplete='off'
                      inputMode='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='name'>Name</label>
                  </div>

                  <div className='fillDetails_input_wrap'>
                    <input
                      required
                      type='text'
                      className='fillDetails_input_field'
                      autoComplete='off'
                      inputMode='text'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='age'>Age</label>
                  </div>

                  <div className='fillDetails_input_wrap'>
                    <input
                      required
                      type='text'
                      className='fillDetails_input_field'
                      autoComplete='off'
                      inputMode='text'
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='gender'>Gender</label>
                  </div>

                  <div className='fillDetails_input_wrap'>
                    <input
                      required
                      type='text'
                      className='fillDetails_input_field'
                      autoComplete='off'
                      inputMode='text'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='date'>Date</label>
                  </div>

                  <div className='fillDetails_input_wrap'>
                    <input
                      required
                      type='text'
                      className='fillDetails_input_field'
                      autoComplete='off'
                      inputMode='text'
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='time'>Time</label>
                  </div>

                  <div className='fillDetails_input_wrap'>
                    <input
                      required
                      type='text'
                      className='fillDetails_input_field'
                      autoComplete='off'
                      inputMode='text'
                      value={diagnosis}
                      onChange={(e) => setDiagnosis(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='diagnosis'>Diagnosis</label>
                  </div>

                  <input
                    type='button'
                    value='SUBMIT'
                    className='fill_details_btn'
                    onClick={hanldeSaveDetails}
                  />
                </div>
              </form>
            </div>
          </div>
    <Footer />
    </>
  )
}

export default EditDetails;