import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MyPropertiesCad from '../../components/MyPropertiesCad';

const MyProperties = () => {
    const {user}=use(AuthContext)
    const [properties,setProperties]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/myProperties/?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProperties(data)
        })
    },[user])
    return (
        <div>
            Total properties :  <span>{properties.length}</span>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-15 max-w-7xl mx-auto'>
              {
                properties.map(myProperty=><MyPropertiesCad   myProperty={myProperty}></MyPropertiesCad>)
            }
          </div>
        </div>
    );
};

export default MyProperties;