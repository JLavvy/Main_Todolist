import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import dayjs from 'dayjs';

export const CreateTaskModal = ({ modal, toggle,save }) => {
    const[taskName, setTaskName]=useState('');
    const [description,  SetDescription]=useState('');

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
        taskObj["Description"]= description
        taskObj["createdAt"] = dayjs().format('YYYY-MM-DD ')
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
                        <textarea rows="5" className='form-control' value={description} onChange={handleChange} name='description'></textarea>
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
