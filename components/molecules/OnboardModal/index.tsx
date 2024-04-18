"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

const OnboardModal = ({ name, setName, closeModal }: any) => {
    const getGreetingTime = (d = new Date()) => {
        const split_afternoon = 12;
        const split_evening = 17; 
        const currentHour = parseFloat(d.toLocaleString('en-US', { hour: 'numeric', hour12: false }));

        if (currentHour >= split_afternoon && currentHour <= split_evening) {
            return "Good Afternoon";
        } else if (currentHour > split_evening) {
            return "Good Evening";
        } else {
            return "Good Morning";
        }
    };

    const greeting = getGreetingTime();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        closeModal();
    }

    return (
        <Modal backdrop="blur" isOpen={true} onClose={closeModal}>
            <ModalContent>
                <ModalHeader>{greeting}</ModalHeader>
                <ModalBody>
                    <h1>Please enter your name to get started!</h1>
                    <Input
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                        placeholder="Enter your name..."
                        variant="bordered"
                        onSubmit={handleSubmit}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default OnboardModal;
