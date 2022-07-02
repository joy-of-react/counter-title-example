import React from 'react';

import Counter from './Counter';
import './styles.css';

export default function App() {
  const [name, setName] = React.useState('Yuka');

  return (
    <>
      <Counter name={name} />
    </>
  );
}
