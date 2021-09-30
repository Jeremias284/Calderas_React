import AgregarCaldera from "./components/agregarCaldera";
import Boton from "./components/Boton";
import Caldera from "./components/Caldera";
import Calderas from "./components/Calderas";
import Header from "./components/Header";
import {useState, useEffect} from 'react';
import React from 'react';

function App() {
  const [showAddCaldera, setShowAddCaldera] = useState (false);

  const [calderas, setCalderas] = useState([])

  useEffect(() => {
    const getCalderas = async () => {
      const calderasDelServidor = await fetchCalderas();
      setCalderas(calderasDelServidor);
    }

    getCalderas();
  }, [])

  //FETCH CALDERAS
  const fetchCaldera= async () => {
    const res = await fetch('http://localhost:5000/calderas');
    const data = await res.json();

    return data;
  }

   //FETCH CALDERA
   const fetchCaldera = async (id) => {
    const res = await fetch(`http://localhost:5000/calderas/${id}`)
    const data = await res.json();

    return data;
  }

  //AGREGAR CALDERA
  const agregarCaldera = async (caldera) => {
    const res = await fetch('http://localhost:5000/calderas', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(caldera)
    })

    const data = await res.json()
    setCalderas([...calderas, data])

  }

  //ELIMINAR CALDERA
  const eliminarCaldera = async (id) => {
    await fetch(`http://localhost:5000/calderas/${id}`, {
      method: 'DELETE',
    })

    setCalderas(calderas.filter((caldera) => caldera.id !== id  ))
  }

  //TOGGLE RECORDATORIO
  const toggleRecordatorio = async(id) => {
    const calderaParaToggle = await fetchCaldera(id);
    const updCaldera = {...calderaParaToggle, 
    reminder: !calderaParaToggle.reminder}

    const res = await fetch(`http://localhost:5000/calderas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updCaldera)
    })

    const data = await res.json()


    setCalderas(calderas.map((caldera) => caldera.id === id ? { ...caldera, reminder: data.reminder } : caldera)) //cambia el estado del reminder
  }
 

  return (
     <div className="container">
        <Header onAdd={() => setShowAddCaldera(!setShowAddCaldera)} showAdd= {showAddCaldera} />
          {showAddCaldera && <AgregarCaldera onAdd={agregarCaldera} />}
        {calderas.length > 0 ? <Calderas calderas={calderas} onDelete =  {eliminarCaldera} onToggle={toggleRecordatorio} /> : 'No Calderas to show'}

        <footer />
     </div>
     //si hay calderas > 0, las muestra, sino muestra cartel
  );
}


export default App;
