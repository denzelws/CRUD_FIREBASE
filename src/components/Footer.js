
import iconinsta from '../img/insta.svg'
import iconface from '../img/facebook.svg'
import icontwitter from '../img/twitter.svg'

function Footer() {
  return (
         <div className='h-48 flex flex-col justify-center items-center bg-gray-200'> 
            <p className='font-black text-gray-400 p-4 cursor-pointer'>
              Logotrip &copy; 2022
            </p>

            <div className='flex'>
              <img src={iconinsta} alt="" className='cursor-pointer' />
              <img src={iconface} alt="" className='cursor-pointer' />
              <img src={icontwitter} alt="" className='cursor-pointer' />
            </div>
        </div>
  )
}

export default Footer