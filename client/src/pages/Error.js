import React from 'react';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='Not Found'/>
        <h3>Ohh! page not found</h3>
        <p> We Can't seem to find the page you're looking for</p>
      </div>
    </Wrapper>
  )
}

export default Error