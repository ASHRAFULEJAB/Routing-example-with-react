import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData()
    const{name,phone,website}=friendDetails
    return (
        <div>
            <h1>Details page</h1>
            <h2>Person's name:{name}</h2>
            <h3>Phone Number:{phone}</h3>
            <h4>Blog:<Link >{website}</Link></h4>
        </div>
    );
};

export default FriendDetails;