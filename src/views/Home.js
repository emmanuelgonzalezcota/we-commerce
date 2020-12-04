import React, { useEffect,useState} from 'react';
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import axios from 'axios';

function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    // const token = window.localStorage.getItem('token');
    // const config = {
    //   headers: {
    //     Authorization: `JWT ${token}`
    //   }
    // }
    axios.get("https://ecomerce-master.herokuapp.com/api/v1/item")
      .then((response)=>{
        setItems(response.data);
        // console.log(response.data);
        // console.log(items);
      })
      .catch((err) =>{
        alert(err.response.data.message);
      })

  }, [])

  return (
    <div>
      <Navbar />
      {/* REVISAR LOGICA DE SPINNER */}
      { useState===null ? <Spinner/> : <Cards items={items}/> }
      <Footer />
    </div>
  )
}

export default Home;