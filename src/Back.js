import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Back = (props) => {
  const [redir, setRedir] = useState(false);
  console.log(props)

  const redirect = () => {
    if (redir) {
      return (
        <Redirect to="/" />
      )
    }
  }

  return (
    <>
      {redirect()}
      <Link to="/formone">
        FomOne
      </Link> 
       {/* <hr />
      <Link
        onClick={()=>setRedir(true)}>
      </Link> */}
    </>
  )
}

export default Back;

