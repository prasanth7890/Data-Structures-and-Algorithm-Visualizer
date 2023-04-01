import './Que.css'
function Bin(props) {
    const {id, width, height, left,value } = props;
    const boxStyle = { width, height, left };
  
    return (
      <div className='rect-q' id={id} style={boxStyle} >
         {JSON.stringify(value)}
      </div>
    );
  }
  
  export default Bin;