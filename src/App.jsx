import {useState} from "react";
function App() {
  const [count, setCount] =useState(0);
 
const handleClickI = () => {
 setCount(count+1);
};

const handleClickD = () => {
  setCount(count-1);
}
    return (
    <div>
      <h1>CounterApp</h1>
      <p>Count:{count}</p>
   
      <div>
      <button onClick={handleClickI}>Increment</button>
      <button onClick = {handleClickD}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
