// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CarComponents from './CarComponents';
import DisplayAd from './DisplayAd';

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
`;

const AdSubmission = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
 
      <AppWrapper>
        <h1>Car Information Form</h1>
        <CarComponents onSubmit={handleFormSubmit}/>
        <DisplayAd formData={submittedData}/>
   {/* <Routes>
   <Route path='/sell/post-ad' element ={<CarComponents onSubmit={handleFormSubmit}/>}/> */}
          {/* <Route path="/" exact>
            <CarComponents onSubmit={handleFormSubmit} />
          </Route> */}
          {/* <Route path='/display' element ={<DisplayAd formData={submittedData}/>}/>
          <Link to="/sell/post-ad">Back to Form</Link> */}
          {/* <Route path="/display">
            {submittedData && <DisplayAd formData={submittedData} />}
            <Link to="/sell/post-ad">Back to Form</Link>
          </Route> */}
          {/* </Routes> */}
   
      </AppWrapper>
  
  );
};

export default AdSubmission;
