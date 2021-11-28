import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Shop() {
    
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.com/v2/cosmetics/br/new'
        );

        const items = await data.json();
        console.log(items.data.items);
        setItems(items.data.items);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Fortnight - Latest battle royale Cosmetics</h2>
             {items.map((item) => (
                <h3 key={item.id}> 
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                </h3>
            ))} 
        </div>
    );
}

export default Shop;