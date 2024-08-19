import React, { useState } from "react";
import ExecomCard from "./ExecomCard";
import axios from "axios";
import { useEffect } from "react";

function Execom() {
    const [execomMembers, setExecomMembers] = useState([]);

    useEffect(() => {
        axios.get("/execom/data").then((response) => {
            setExecomMembers(response.data.data);
        });
    }, []);

    return (
        <div className="z-30 relative">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight text-center mt-32">
                Meet our execom this year
            </h1>
            <div className="my-24 max-w-[1350px] mx-auto mx-18 grid gap-3 grid-cols-[repeat(auto-fill,350px)] justify-center items-center">
                <ExecomCard membersList={execomMembers} />
            </div>
        </div>
    );
}

export default Execom;
