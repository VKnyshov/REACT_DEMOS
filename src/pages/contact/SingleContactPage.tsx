import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

const SingleContactPage = () => {


   const {id} =useParams()
   //  const {state:{contact:item}} = useLocation()
   //  console.log(item)


    const [contact, setContact] = useState<any>({})
    useEffect(() => {
        // if(item){
        //     setContact(item);
        // }else {

        fetch("https://jsonplaceholder.typicode.com/users/"+id)
            .then(value => value.json())
            .then(response => {
                setContact(response);
            });
        // }

    }, [id]);



    return (
        <div>
            <p>User ID - {contact.id}</p>
            <p> User Name - {contact.name}</p>
            <p>User Email - {contact.email}</p>
            <p>User Phone - {contact.phone}</p>
        </div>
    );
};

export default SingleContactPage;