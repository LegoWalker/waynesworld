import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Item({ match }) {
    
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => { 
        const fetchItem = await fetch(
            `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item.data);
        console.log(item);
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt=''></img><br/>
            <Link to='/shop'>Back to List</Link>
        </div>
    );
}

export default Item;