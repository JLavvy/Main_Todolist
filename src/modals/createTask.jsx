import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const CreateTaskModal = ({ modal, toggle,save }) => {
    const[taskName, setTaskName]=useState('');
    const [descrption,  SetDescription]=useState('');

    const handleChange = (e)=>{

        const {name, value} =e.target

        if(name=="taskName"){
            setTaskName(value)
        }else{
            SetDescription(value)
        }

    }
    const handleSave=() =>{
        let taskObj= {}
        taskObj["Name"]= taskName
        taskObj["Description"]= descrption
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>

                    <div className="task-form">
                        <label>Task Name</label>
                        <input type="text" className='form-control' value={taskName} onChange={handleChange} name="taskName"/>
                    </div>

                    <div className="task-form">
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value={descrption} onChange={handleChange} name='description'></textarea>
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};
