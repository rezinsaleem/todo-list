import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [enteringToDo, setEnteringToDo] = useState('');

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>

      <div className="inputContainer">
        <div className="input">
          <input 
            value={enteringToDo} 
            onChange={(e) => setEnteringToDo(e.target.value)} 
            type="text" 
            placeholder="🖊️ Add item..." 
          />
          <i 
            onClick={() => {
              if (enteringToDo.trim()) {
                setToDos([...toDos, { id: Date.now(), text: enteringToDo, status: false }]);
                setEnteringToDo('');
              }
            }} 
            className="fas fa-plus"
          ></i>
        </div>
      </div>

      <div className="container">
        <div className="todos">
          <h2>To-Do Items</h2>
          {toDos.map((obj) => (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input 
                  type="checkbox" 
                  checked={obj.status} 
                  onChange={(e) => {
                    setToDos(toDos.map((obj2) => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked;
                      }
                      return obj2;
                    }))
                  }} 
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i 
                  className="fas fa-times" 
                  onClick={() => setToDos(toDos.filter((obj2) => obj2.id !== obj.id))}
                ></i>
              </div>
            </div>
          ))}
        </div>

        <div className="active-toDos">
          <h2>Completed Items</h2>
          {toDos.filter((obj) => obj.status).map((obj) => (
            <div className="todo" key={obj.id}>
              <div className="left">
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-check"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
