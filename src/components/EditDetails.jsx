import React,{useState,useEffect} from 'react'
import Header from './header';
import Footer from './footer';
import './EditDetails.css'

const EditDetails = () => {

    useEffect(() => {
        const inputs = document.querySelectorAll('.reportIssue_input_field');
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


  return (
    <>
    <Header />
    <div className='reportIssue_innerbox'>
            <div className='reportIssue_form'>
              <form className='reportIssue_form1' autoComplete='off'>
                <div className='reportIssue_back' 
                // onClick={handleReportIssueClickDashBoard}
                >
                  <i className='bx bx-right-arrow-alt'></i>
                  <h4>Go To Dashboard</h4>
                </div>
                <div className='ReportIssue_heading'>
                  <h2>Fill Details</h2>
                </div>

                <div className='reportIssue_actual_form'>
                  <div className='reportIssue_input_wrap'>
                    <input
                      required
                      type='text'
                      className='reportIssue_input_field'
                      autoComplete='off'
                      inputMode='text'
                    //   value={ReportIssueTitle}
                    //   onChange={(e) => setReportIssueTitle(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='ReportIssueTitle'>Name</label>
                  </div>

                  <div className='reportIssue_input_wrap'>
                    <input
                      required
                      type='text'
                      className='reportIssue_input_field'
                      autoComplete='off'
                      inputMode='text'
                    //   value={ReportIssueDescription}
                    //   onChange={(e) => setReportIssueDescription(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='ReportIssueDescription'>Age</label>
                  </div>

                  <div className='reportIssue_input_wrap'>
                    <input
                      required
                      type='text'
                      className='reportIssue_input_field'
                      autoComplete='off'
                      inputMode='text'
                    //   value={ReportIssueDescription}
                    //   onChange={(e) => setReportIssueDescription(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='ReportIssueDescription'>Gender</label>
                  </div>

                  <div className='reportIssue_input_wrap'>
                    <input
                      required
                      type='text'
                      className='reportIssue_input_field'
                      autoComplete='off'
                      inputMode='text'
                    //   value={ReportIssueDescription}
                    //   onChange={(e) => setReportIssueDescription(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='ReportIssueDescription'>Date</label>
                  </div>

                  <div className='reportIssue_input_wrap'>
                    <input
                      required
                      type='text'
                      className='reportIssue_input_field'
                      autoComplete='off'
                      inputMode='text'
                    //   value={ReportIssueDescription}
                    //   onChange={(e) => setReportIssueDescription(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='ReportIssueDescription'>Time</label>
                  </div>

                  <div className='reportIssue_input_wrap'>
                    <input
                      required
                      type='text'
                      className='reportIssue_input_field'
                      autoComplete='off'
                      inputMode='text'
                    //   value={ReportIssueDescription}
                    //   onChange={(e) => setReportIssueDescription(e.target.value)}
                    />
                    <label className='label_edit_details' htmlFor='ReportIssueDescription'>Diagnosis</label>
                  </div>

                  <input
                    type='button'
                    value='SUBMIT'
                    className='report_issue_btn'
                    // onClick={handleReportIssue}
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