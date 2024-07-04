import React from 'react';
import Person from "./Person";
import Header from './Header';
import List from './List';
import Button from './Button';

function App() {
  
  const handleClick = () => {
    alert("Button Clicked");
  };

  // Define subjects array outside the JSX return statement
  const subjects = ["Maths", "Punjabi", "English"];

  return (
    <div>
      <Person name="Aditi" age={13} />
      <Header title="Pw Skills" />
      
      <div>
        <h1>Subjects List</h1>
        <List items={subjects} />
      </div>

      <h1>Button:::</h1>
      <Button text="ClickMe" onClick={handleClick} />
    </div>
  );
}

export default App;



