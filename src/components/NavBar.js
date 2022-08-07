import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {

  const { logout } = useAuthentication();
  const { user } = useAuthValue();

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
        {!user && (
          <>
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
            </>
        )}
          {user && (
              <>
                <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
                  <NavLink to='/posts/create'>
                    Novo Post
                  </NavLink>
                </li>     
              </>
            )}
             <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
                  <NavLink to='/posts/feed'>
                    Feedback/Postagens
                  </NavLink>
                </li>           
        {user && (
          <>
          <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'> 
           <NavLink
             to="/dashboard"
           >
             Dashboard
           </NavLink>
         </li>
         </>
        )}
        <li className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer'>
          <NavLink to='/about'>
            Sobre
          </NavLink>
        </li>
        {user && (
           <button 
           className='text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer' 
           onClick={logout}>Sair</button>
        )}     
      </ul>
    </nav>


  )
}

export default NavBar
