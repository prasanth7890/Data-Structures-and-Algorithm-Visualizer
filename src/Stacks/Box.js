import './Stack.css'
function Box(props) {
  const {id, width, height, top,value } = props;
  const boxStyle = { width, height, top };

  return (
    <div className='rect' id={id} style={boxStyle} >
       {JSON.stringify(value)}
    </div>
  );
}

export default Box;