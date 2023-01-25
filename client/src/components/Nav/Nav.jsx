import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
        <ul>

          <li>
            <Link to='/'>Lista de Tareas</Link>
          </li>

          <li>


          </li>
          <Link to='/new'>Crear nueva tarea</Link>
          <li>


          </li>
        </ul>

    </>
  )
}

export default Nav