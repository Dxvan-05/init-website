import React, { useEffect, useState } from "react";
import { CheckCheck } from "lucide-react";
import axios from "axios";

const ContactCard = ({ name, phnNo, email, message, id, toggleRefresh }) => {

    const handleDelete = (_id) => {
      axios.post('/contact/delete', {
        _id,
      }).then(response => {
        console.log(response)
        toggleRefresh();
      })
    }


    return (
        <div className="border p-8 rounded">
            <div className="flex justify-between mb-3 rounded">
                <h2 className="bold font-semibold text-xl">{ name }</h2>
                <span className="bg-green-600 p-2 rounded" onClick={() => {handleDelete(id)}}>
                    <CheckCheck />
                </span>
            </div>
            <p className="text-gray-400">{ phnNo }</p>
            <p className="mb-5 text-gray-400">{ email }</p>
            <div>
                <p className="max-w-min">
                    { message }
                </p>
            </div>
        </div>
    );
};

export default function ContactDashbord() {



    const [contacts, setContacts] = useState([]);
    const [refresh, setRefresh] = useState(false)


    const fetchContacts = () => {
      axios.get('/contact/data').then(response => {
        setContacts(response.data.data);
      });
    };

    const toggleRefresh = () => {
      setRefresh(!refresh);
    }

    useEffect(() => {
      fetchContacts();
    }, [refresh]);

    

    return (
        <div className="w-[80%]">
            <div className="flex flex-wrap lg:mx-20 sm:mx-10 justify-center gap-10 mt-20 mb-20">
                {contacts.length != 0 ? contacts.map(contact => <ContactCard name={contact.name} phnNo={contact.phnNo} email={contact.email} message={contact.message} id={contact._id} toggleRefresh={toggleRefresh}/>) : <h1>No new messages</h1>}
            </div>
        </div>
    );
}
