import {useContext} from 'react'
import {TaskContext} from './TaskContext'

import { IoBookmarkOutline, IoWarningOutline } from "react-icons/io5";

function TaskCard({ task }) {

   const { deleteTask } = useContext(TaskContext)

   return (
      <li className="nav-item form-control mb-2">
         <a className="nav-link d-flex justify-content-between" aria-current="page" href="#">
            <div className="d-flex list">
               <div className="">
                  <IoBookmarkOutline className="svg-bookmar"/>
               </div>
               <div className="">
                  <span className="nav-text fw-bolder fs-6">
                     {task.title}
                  </span>
                  <span className="text-muted d-block">
                     {task.description}
                  </span>
               </div>
            </div>
            <div className="d-flex align-items-center list">
               
               <button type="submit" className='btn btn-danger' onClick={() => deleteTask(task.id)}>
                  <IoWarningOutline className="svg-warning"/>
                  Eliminar tarea</button>
            </div>
         </a>
      </li>
   )
}

export default TaskCard