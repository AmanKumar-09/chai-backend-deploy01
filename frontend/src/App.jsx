import { useState , useEffect } from 'react'
import './App.css';
import axios from "axios";

function App() {

  const [jokes, setJokes] = useState([])


  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  } )

 
  return (
    <>
    <h1>Chai and full stack | Youtube</h1>
    <p>  JOKES :- { jokes.length}</p>
    {
      jokes.map((jokes, index) =>(
          <div key={jokes.id}>
          <h3>{jokes.question} </h3>
          <p> {jokes.answer} </p>
        </div>
      ))
    }
    </>
  )
}

export default App
