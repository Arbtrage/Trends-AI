"use client"

import { useState, useEffect } from 'react'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import OnboardModal from '../OnboardModal'

const Greetings = () => {
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        if (storedName) {
            setName(storedName);
        } else {
            setShowModal(true);
        }
    }, []);

    const closeModal = () => {
        setShowModal(false);
    }

    const words = [{
        text: "Welcome",
        className:"text-blue-500 text-xl md:text-4xl"
    },
    {
        text: name,
        className:"text-xl md:text-4xl"
    }]

    return (
        <div>
            {showModal ? (
                <OnboardModal name={name} setName={setName} closeModal={closeModal} />
            ) : (
                <div className=''>
                    <TypewriterEffect words={words}/>
                </div>
            )}
        </div>
    )
}

export default Greetings
