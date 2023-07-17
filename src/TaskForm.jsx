import {useState, useContext} from 'react'
import { TaskContext } from './TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        // createTask(title)
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')
    }

    return (
        <div className='container pt-3'>
            <form className='form-control' onSubmit={handleSubmit}>
                <div className='mb-3 d-grid'>
                    <label htmlFor="" className="form-label">Nombre de tarea</label>
                    <input type="text" className='form-control' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Nombre de tarea'
                    />
                </div>
                <div className='mb-3 d-grid'>
                    <label htmlFor="" className="form-label">Descripcion de tarea</label>
                    <textarea className='form-control' 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Descripcion de tarea'
                    />
                </div>
                <div className="mb-3 d-grid">
                    <button type="submit" className='btn btn-primary'>Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm