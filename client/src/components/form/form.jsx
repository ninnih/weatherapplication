import React from 'react';
import './form.css';

function Form ({ value, handleChange, handleSubmit }) {
  return (
    <section className="container container__input">
        <form onSubmit={(e) => handleSubmit(e)} className="input">
          <input type="text" name="city" value={value} onChange={(e) => handleChange(e)} className="input__text" placeholder="Please enter a city"/>
          <input type="submit" className="input__submit" value="Search" />
        </form>
    </section>
  );
}

export default Form;