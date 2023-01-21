import { useRef } from 'react';

const RegisterTeacher = () => {

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const personalNumberInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const compentenciesInputRef = useRef();

  const clearForm = () => {
    firstNameInputRef.current.value = '';
    lastNameInputRef.current.value = '';
    personalNumberInputRef.current.value = '';
    emailInputRef.current.value = '';
    phoneInputRef.current.value = '';
    compentenciesInputRef.current.value = '';
  };

  const onSaveHandler = (e) => {
    e.preventDefault();

    const firstName = firstNameInputRef.current.value;
    const lastName = lastNameInputRef.current.value;
    const personalNumber = personalNumberInputRef.current.value;
    const email = emailInputRef.current.value;
    const phone = phoneInputRef.current.value;
    const competencies = compentenciesInputRef.current.value;

    const body = { firstName, lastName, personalNumber, email, phone, competencies };

    fetch('http://localhost:3010/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log(body);
    clearForm();
  };

  return (
    <section
      data-testid='add-teacher-component'
      className='container'
    >
      <h1 className='page-title'>Registrering av lärare</h1>
      <form onSubmit={onSaveHandler}>
        <div className='form-control'>
          <label htmlFor='firstName'>Förnamn</label>
          <input
            id='firstName'
            placeholder='Förnamn'
            ref={firstNameInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='lastName'>Efternamn</label>
          <input
            id='lastName'
            placeholder='Efternamn'
            ref={lastNameInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='personalNumber'>Personnummer:</label>
          <input
            type='number'
            id='personalNumber'
            placeholder='Personnummer'
            ref={personalNumberInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            placeholder='Email'
            ref={emailInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='phone'>Telefon:</label>
          <input
          type='tel'
            id='phone'
            placeholder='Telefon'
            ref={phoneInputRef}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='competencies'>Kompetenser:</label>
          <input
            id='competencies'
            placeholder='Kompetenser'
            ref={compentenciesInputRef}
          />
        </div>
        <div className='form-control'>
          <button
            className='btn btn-primary'
          >
            Registrera lärare
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterTeacher;
