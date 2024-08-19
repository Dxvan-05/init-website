import React from "react";

function Analytics() {
    return (
        <div className="w-[80%]">
            <h1 className="text-start font-bold text-3xl mt-20 ms-20">
                Edit About
            </h1>
            <div className="ms-20 me-10 max-w-[900px] ">
                <textarea className="bg-black border mt-10 h-full w-full text-2xl min-h-[500px]"></textarea>
                <div className="mt-10 flex justify-end">
                    <button className="bg-green-500 px-3 py-2">Save</button>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
