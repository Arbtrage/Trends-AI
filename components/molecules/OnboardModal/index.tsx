"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

const OnboardModal = ({ name, setName, closeModal }: any) => {


    const handleSubmit = (e: any) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        closeModal();
    }

    return (
        <Modal backdrop="blur" isOpen={true} onClose={closeModal}>
            <ModalContent>
                <ModalHeader>Good Afternoon</ModalHeader>
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
