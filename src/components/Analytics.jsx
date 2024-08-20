import axios from "axios";
import React, { useEffect, useState } from "react";
import { Users, TicketCheck, LogOut } from 'lucide-react'

function Analytics({toggleLogin}) {
    const [para, setPara] = useState("");
    const [id, setId] = useState("");
    const [execomMembers, setExecomMembers] = useState([]);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("/content/data").then((response) => {
            setPara(response.data.data[0].para);
            setId(response.data.data[0]._id);
        });

        axios
            .get("/event/data")
            .then((response) => {
                setEvents(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get("/execom/data")
            .then((response) => {
                setExecomMembers(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleParaInput = (e) => {
        setPara(e.target.value);
    };

    const handleUpdate = (e) => {
        axios
            .put("/update/content", {
                _id: e.target.value,
                para,
            })
            .then((response) => {
                alert(response.data.msg);
            });
    };

    return (
        <div className="w-[80%]">
            <div className="flex justify-end">
                <button onClick={toggleLogin} className="mt-10 px-3 py-2 bg-red-500 rounded"><LogOut className="inline"/> Logout</button>
            </div>
            <h1 className="text-start font-bold text-3xl mt-20 ms-20">Info</h1>

            <div className="flex ms-20 gap-10 mt-10">
                <span className="text-2xl flex flex-col justify-center items-center border p-5 rounded">
                    <TicketCheck className="h-10 w-10 mb-3"/>
                    Events:
                    <h1 className="text-center mt-2 text-2xl">{events.length}</h1>
                </span>
                <span className="text-2xl flex flex-col justify-center items-center border p-5 rounded">
                    <Users className="h-10 w-10 mb-3"/>
                    Execom Members:
                    <h1 className="text-center mt-2 text-2xl">{execomMembers.length}</h1>
                </span>
            </div>

            <h1 className="text-start font-bold text-3xl mt-20 ms-20">
                Edit About
            </h1>
            <div className="ms-20 me-10 max-w-[900px] ">
                <textarea
                    value={para}
                    onChange={handleParaInput}
                    className="bg-black border p-3 mt-10 h-full w-full text-2xl min-h-[500px]"
                ></textarea>
                <div className="mt-10 flex justify-end">
                    <button
                        className="bg-green-500 px-3 py-2"
                        value={id}
                        onClick={handleUpdate}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
