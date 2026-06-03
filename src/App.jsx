import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'
import logo from '/logodb.webp'

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [page, setPage] = useState("")



  useEffect(() => {
    api.get(`/characters`).then((response) => {
      setData(response.data.items)
    }).catch((error) => {
      console.error("Deu ruim!!!", error)
    })
  }, [])
  

  return (
    <>
      <div className={s.wrapimg}>
      <img className={s.logo} src={logo} alt="Logo Rick and Morty" />

      </div>
      <div>
        <label>Search name</label>
        <input type="text" placeholder='Type the name you want' value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <main>
        {data.map((item, index) => {
          return(
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.race}{item.gender}</p>
              <p>Base KI: {item.ki}</p>
              <p>Total KI: {item.maxKi}</p>
              <p>Afiliation: {item.afiliation}</p>
              
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
