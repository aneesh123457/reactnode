//react app.js code
import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setdata]=useState(null);
  useEffect(()=>
  {
    fetch("http://localhost:8000/api")
    .then((res)=>(res.json()))
    .then((data)=>setdata(data.mess));
  },[])
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
