import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MyPropertiesCard from '../../components/MyPropertiesCard';

const MyProperties = () => {
    const { user } = use(AuthContext)
    const [properties, setProperties] = useState([])
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myProperties/?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProperties(data)
                })
        }

    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/myProperties/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingProperties = properties.filter(property => property._id !== id)
                    setProperties(remainingProperties)
                }
            })
    }

    const handleUpdate = (updateProperty) => {
        setProperties(prev => prev.map(property => property._id === updateProperty._id ? updateProperty : property))
    }
    return (
        <div>
            Total properties :  <span>{properties.length}</span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-15 max-w-7xl mx-auto'>
                {
                    properties.map(myProperty => <MyPropertiesCard key={myProperty._id}
                        onDelete={handleDelete} onUpdate={handleUpdate}
                        myProperty={myProperty}></MyPropertiesCard>)
                }
            </div>
        </div>
    );
};

export default MyProperties;