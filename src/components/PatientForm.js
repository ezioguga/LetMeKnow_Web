import React from "react";
import axios from "axios";

const Patient = (props) => {
  const genderRef = React.createRef();
  const temperatureThresholdRef = React.createRef();
  const NerveConductionStudyRef = React.createRef();

  const registerUser = (props) => {
    const gender = genderRef.current.value;
    const temperatureThreshold = temperatureThresholdRef.current.value;
    const NerveConductionStudy = NerveConductionStudyRef.current.value;

    axios
      .post(
        "https://ez9b56ei62.execute-api.ap-south-1.amazonaws.com/dev/Patients",
        {
          gender,
          temperatureThreshold,
          NerveConductionStudy,
        }
      )
      .then((response) => {
        alert("success");
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          alert("couldn't save the details");
      });
  };

  return (
    <div className='card'>
      <div className='cardHeader'>Test Report</div>
      <div className='cardBody'>
        <div className='inputGroup'>
          <label htmlFor='gender'>Gender</label>
          <input
            type='text'
            name='gender'
            id='gender'
            placeholder='Male or Female'
            ref={genderRef}
          />
        </div>
        <label htmlFor='temperatureThreshold'>temperatureThreshold</label>
        <input
          type='text'
          name='temperatureThreshold'
          id='temperatureThreshold'
          placeholder='temperatureThresholdRef'
          ref={temperatureThresholdRef}
        />
      </div>
      <div className='inputGroup'>
        <label htmlFor='NerveConductionStudy'>NerveConductionStudy</label>
        <input
          type='text'
          name='NerveConductionStudy'
          id='NerveConductionStudy'
          placeholder='NerveConductionStudy'
          ref={NerveConductionStudyRef}
        />
      </div>
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Patient;
