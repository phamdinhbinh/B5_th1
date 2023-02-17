import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [age, setAge] = useState(5);
  const [name, setName] = useState('');

  const onChangeName = () => {
    setName(" dự ")
  };
  const onChangeAge = () => {
  setAge(age+1);
 };

  return (
    <div className="App">
      <div>
        tuổi là : {age}
      </div>
      
      <div>
        tên là : {name}
      </div>
      <button onClick={onChangeAge}> 
      Tăng tuổi thêm 1 
      </button>
 
      <button onClick={onChangeName}>
      Hiển thị tên 

      </button>
      
    </div>
  );
}

export default App;
