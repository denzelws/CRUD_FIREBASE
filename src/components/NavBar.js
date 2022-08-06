import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
      <nav className='container mx-auto px-4 h-24 flex items-center'>
        <span className='font-black cursor-pointer'>
          Logotrip
        </span>

        <ul className='ml-auto flex gap-4'>
          
            <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
              <NavLink to='/'>
              Home
              </NavLink>
            </li>

            <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
              <NavLink to='/login'>
              Entrar
              </NavLink>
            </li>

            <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
              <NavLink to='/register'>
              Cadastrar
              </NavLink>
            </li>

            <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
              <NavLink to='/feed'>
              Postagens/Feedback
              </NavLink>
            </li>

            <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
              <NavLink to='/about'>
              Sobre
              </NavLink>
            </li>

        </ul>
      </nav>
    

  )
}

export default NavBar