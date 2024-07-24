import React, { useState } from 'react';
import axios from 'axios';
import './Log.css';
import { Link, useNavigate } from 'react-router-dom';
function Log() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  function showErrorAnimation() {
    var form = document.getElementById('visitorform');
    form.classList.add('error');
    setTimeout(function () {
      form.classList.remove('error');
    }, 500);
  }

  function handle() {

    if (name === '' || email === '') {
      console.error('Invalid credentials');
      showErrorAnimation();
      return;
    }
    console.log('Logging in with:', { name, email });

    axios.post('http://localhost:5000/', { name, email })
      .then(() => {
        navigate('/Balamurugan');
      })
      .catch(err => {
        console.log(err);
      });
  }

  function go() {
    axios.post('http://localhost:5000/', { name, email })
      .then(() => {
        navigate('/Balamurugan');
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  return (
    <div className="pfhomecontainer">
      <form id="visitorform" className="visitorform" method="post" onSubmit={handle}>
        <div className="h0">Let me know Who is this!</div>
        <div id="loginSection">
          <input type="text" id="visitorname" className="input" placeholder="Name" name="visitorname" required onChange={(e) => setName(e.target.value)} />
          <input type="email" id="vistormail" className="input" placeholder="E-mail" name="vistormail" required onChange={(e) => setEmail(e.target.value)} />
          <div className='buts'>
            <button type="button" className="visitorlog" onClick={handle}>
              Enter
            </button>
            <a className="skip" onClick={go}>
              Skip
            </a>
          </div>

        </div>
      </form>

    </div>
  );
}

export default Log;