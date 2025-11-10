import React from 'react';
import LatestProperties from '../../components/LatestProperties';

const latestPropertiesPromise =fetch('http://localhost:3000/latest-properties').then(res=>res.json())

const Home = () => {
    return (
        <div>
           <h1> this is home</h1>
        <LatestProperties latestPropertiesPromise={latestPropertiesPromise}></LatestProperties>
        </div>
    );
};

export default Home;