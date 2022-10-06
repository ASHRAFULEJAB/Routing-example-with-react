import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData()
    const {id,title,body,userId} = postDetails
    const navigate = useNavigate()
    const handlePostDetails = ()=>{
       navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>Post Details!!:{id}</h1>
            <h2>Tilte:{title}</h2>
            <p>{body}</p>
            <button onClick={handlePostDetails}>Get Author name</button>

        </div>
    );
};

export default PostDetails;