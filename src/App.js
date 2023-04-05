import { Button } from 'react-bootstrap';
import './index.css' 
import { Tooltip } from 'react-tippy';
function App() {
  return (
    <div className="App">
      
      <Tooltip className='Btn1' title='Why Click Me??'  position='right' arrowSize='2'>
      <Button  className="Btn" variant="outline-danger">Click</Button>{' '}
      </Tooltip>
      </div>

  
  );
}

export default App;
