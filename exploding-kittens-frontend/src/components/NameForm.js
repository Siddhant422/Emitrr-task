
import React, { useState } from 'react';
import axios from 'axios';

function NameForm({ onNameSubmit }) {
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://emitrr-task-lxun.onrender.com/api/user', { name });
      onNameSubmit(name); 
      setErrorMessage('');
    } catch (error) {
      console.error('Error submitting name:', error);
      setErrorMessage('Failed to submit name. Please try again.');
    }
  };

  return (

    <form onSubmit={handleSubmit} style={{ textAlign: 'center', padding: '50px', backgroundColor: '#BA8E23', borderRadius: '15px' }}>
      <div className="nameformTitle">
        <h1>Exploding Kittens 😸</h1>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
        style={{
          backgroundColor: 'white',
          border: '1px solid #1a4d9e',
          color: 'black',
          padding: '8px',
          borderRadius: '5px',
          marginBottom: '10px',
          width: '200px',
          outline: 'none',
        }}
      />
      <br />
      <button
        type="submit"
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
          border: 'white',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bolder'
        }}
      >
        Start Game
      </button>
      {errorMessage && <p style={{ color: '#10B881' }}>{errorMessage}</p>}
    </form>
  );
}

export default NameForm;
