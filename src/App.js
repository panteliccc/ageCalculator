import React ,{useEffect,useState} from 'react';
import './style.css'

function App() {

  const [age,setAge] = useState(null);

  useEffect(() =>{
    var m1 = document.querySelector('.m').value
    var d1 = document.querySelector('.d').value
    var y1 = document.querySelector('.y').value


    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var y = y2 - y1;
    setAge(y)
  },[age])

  return (
    <div className='app'>
      <div className="main">
        <div className='unos'>
          <input type='text' placeholder='dd' className='d'minlength="1"maxlength="2"/>
          <input type='text' placeholder='mm' className='m'minlength="1"maxlength="2" />
          <input type='text' placeholder='yyyy' className='y'minlength="4"maxlength="4"/>
        </div>
        <input type='button' value="Submit" className='submit' onClick={()=>setAge()}/>
        <span>You are 
          <span className='age'> {age} </span>
          years old.
        </span>
      </div>
    </div>
  );
}

export default App;
