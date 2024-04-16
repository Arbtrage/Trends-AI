"use client"

import { useState, useEffect } from 'react'
import OnboardModal from '../OnboardModal'

const Greetings = () => {
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if(storedName) {
            setName(storedName);
        } else {
            setShowModal(true);
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            {showModal ? (
                <OnboardModal name={name} setName={setName} closeModal={closeModal} />
            ) : (
                `Hello, ${name}`
            )}
        </div>
    )
}

export default Greetings
