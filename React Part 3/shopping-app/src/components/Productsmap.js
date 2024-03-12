import React from 'react';
import list from '../listDetails';
import '../styles/productsmap.css';
import Cards from './Cards';

const Productsmap = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Productsmap