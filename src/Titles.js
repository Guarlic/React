import React from 'react';
import './style.css';

function Titles() {
  const Title = () => (
    <h1>
      Hello, World!
    </h1>
  );

  const Subtitle = () => (
    <h2>
      hi
    </h2>
  );

  return (
    <div>
      <Title />
      <Subtitle />
    </div>
  );
}

export default Titles;
