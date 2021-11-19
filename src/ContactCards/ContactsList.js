import React, { useState, useEffect } from 'react'
import ContactCard from './ContactCard';
import './ContactCard.css'

const ContactsList = () => {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Lisa Simpson",
  //     email: "lisa.simpson@springfield.com",
  //     age: 13
  //   }
  // ];

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
    .then(response => response.json())
    .then(data => {
       console.log(data)
       setResults(data.results);
    });    
  }, []);  

  return(
    <div>
      {results.map((result, index) => {
        return(
          <ContactCard key={index}            
            avatarUrl = {result.picture.large}
            name = {result.name.title + " " + result.name.first + " " + result.name.last}
            email = {result.email}
            age = {result.dob.age}
          />
        )
      })}      
    </div>
  );
}

export default ContactsList;
