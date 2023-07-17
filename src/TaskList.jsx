import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from './TaskContext'

function TaskList() {

   const {tasks} = useContext(TaskContext)

   if (tasks.length === 0) {
      return (
         <div className='container pt-3'>
            <ul className="nav flex-column">
               <li className="nav-item form-control mb-2">
                  <div className="d-flex justify-content-center" aria-current="page" href="#">
                     <h1 className='taskMessage'>No hay tareas asignadas</h1>
                  </div>
               </li>
            </ul>
         </div>
      )
   }

   return (
      <div className='container pt-3'>
         <ul className="nav flex-column">
         {
            tasks.map((task) => (
               <TaskCard key={task.id} task={task}/>
            ))
         }
         </ul>
      </div>
   )
}

export default TaskList