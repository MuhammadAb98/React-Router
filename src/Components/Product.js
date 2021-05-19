import React from 'react';
import Shoes from '../shoes.json'
import styles from '../stl.css';
import {Link} from 'react-router-dom'

function Product() {

  
  
  return (
    
    <div>
    <h1>hello Product</h1>   

    <div className="productContainer">
    {Object.keys(Shoes).map(keyName=>{
      const shoe=Shoes[keyName]
      return(<Link key={keyName} className="link" to={`/product/${keyName}`}>
     <h2>{shoe.name}</h2>
     <img src={shoe.img} height={150} alt="shoe"/>
        </Link>)
    })}

   
    </div>
    </div>
  );
}

export default Product;
