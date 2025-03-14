"use client"

import { useState } from "react"
import TypeSignModal from "../components/TypeSignModal/page";

export default function () {

    const [name, setName] = useState<string>("");
    const [nameHasBeenRecordedAtLeastOnce, setNameHasBeenRecordedAtLeastOnce] = useState<boolean>(false);
    const [loadSignatures, setLoadSignatures] = useState<boolean>(false);

    function handleSubmit() {
        if (name.trim() !== "") {
            setLoadSignatures(true);
            setNameHasBeenRecordedAtLeastOnce(true);
        } else {
            alert("Enter a name");
            setLoadSignatures(false);
            setNameHasBeenRecordedAtLeastOnce(false);
        }
        console.log(name);
    }

    return (
        <>
            <h3 className="font-bold text-center mt-10 text-3xl">Type Sign</h3>
            <div>
                <input
                    type="text"
                    placeholder="Type name here"
                    className="border border-gray-600 justify-center flex ml-auto mr-auto mt-10 p-2"
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    className="mt-5 bg-green-200 flex m-auto p-2 border rounded-3xl"
                    onClick={handleSubmit}
                >
                    {nameHasBeenRecordedAtLeastOnce ? "Update" : "Continue"}
                </button>
            </div>

            {loadSignatures && (
                <TypeSignModal name={name} />
            )}
        </>
    );
}


//lol