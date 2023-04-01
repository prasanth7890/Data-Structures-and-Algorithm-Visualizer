import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Slider(props) {
    const getSliderValue = props.method;
    const [value, setValue] = useState(50);
    getSliderValue(value);
  return (
    <>
      <Form.Label>Speed:</Form.Label>
      <Form.Range 
      value={value}
      onChange={(e)=> setValue(e.target.value)} 
      />
    </>
  );
}

export default Slider;