// import img
import image from '../../img/wallpaper4.jpg'
import hotelimg from '../../img/hotel-1880.png'
import calendar from '../../img/calendar-5748.png'
import phoneimg from '../../img/phone-6916.png'
import picture from '../../img/picture.jpg'
import tripimg from '../../img/trip1.jpg'
import tripimg2 from '../../img/trip2.jpg'
import tripimg3 from '../../img/trip3.jpg'
import tripimg5 from '../../img/trip5.jpg'
import orlandoimg from '../../img/orlando.jpg'
import cancunimg from '../../img/cancun.jpg'
import maceioimg from '../../img/maceio.jpg'
import portoimg from '../../img/portoseguro.jpg'



const Home = () => {
    return (
        <>
            <div style={{ background: `url(${image})` }} className='w-screen h-72'>
                <div className='container h-full flex items-center justify-center'>
                    <div>
                        <div className='text-right'>
                            <h1 className='text-gray-50 font-bold text-4xl mb-2'> Os melhores hotéis, com o melhor valor sob o sol estão aqui</h1>
                            <p className='text-gray-50 font-bold'>Escolha o estado e cidade para achar os melhores resorts.</p>
                        </div>

                        <div className='flex items-center justify-center mt-7'>

                            <form className='space-x-4'>
                                <select className='bg-gray-50 px-3 py-2 border border-gray-200 rounded text-gray-500'>
                                    <option value="">Escolha o estado</option>
                                </select>

                                <select className='bg-gray-50 px-3 py-2 border border-gray-200 rounded text-gray-500'>
                                    <option value="">Escolha a cidade</option>
                                </select>

                                <button className='inline-flex items-center text-gray-50 bg-blue-800 font-medium px-3 py-2 rounded'>
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    Pesquisar
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-gray-50'>
                <div className='container mx-auto px-4 py-10'>
                    <div className='flex justify-around '>
                        <div>
                            <div className='flex items-center'>
                                <img src={hotelimg} alt="" />
                                <div className='inline-flex ml-2 text-gray-800 text-md text-bold'>Milhares de hotéis</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src={calendar} alt="" />
                            <div className='inline-flex ml-2 text-gray-800 text-md text-bold'>Agendamento online</div>
                        </div>
                        <div className='flex items-center'>
                            <img src={phoneimg} alt="" />
                            <div className='inline-flex ml-2 text-gray-800 text-md text-bold'>Atendimento 24h</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-50'>
                <div className='container mx-auto px-4 py-10'>
                    <div className='flex'>
                        <div className='flex-col'>
                            <div className='text-sm text-gray-400 font-medium'>RESORT EM DESTAQUE</div>
                            <div className='text-gray-600 text-2xl mb-4'>Salinas Maceió All Inclusive Resort</div>
                            <div className='text-gray-600 mb-4'>
                                4 estrelas
                                <div className='inline-flex ml-2'>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                    <svg class="w-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                    <svg class="w-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                    <svg class="w-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                                </div>
                            </div>
                            <div className='text-gray-600'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos expedita ex asperiores voluptates sed vitae quia accusantium, est distinctio quasi deserunt architecto cupiditate suscipit aliquid quam possimus impedit. Iusto, soluta.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti maxime laboriosam commodi minus magni qui consequuntur. Soluta animi quis quae eum eos, nesciunt voluptates recusandae consequuntur est nostrum quibusdam architecto!</p>
                            </div>
                        </div>
                        <div className='inline-flex ml-10'><img src={picture} alt="" width={800} /></div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 py-4'>
                <div>
                    <h3 className='text-stone-800 text-2xl font-semibold mb-8'>Pacotes mais procurados</h3>

                    <div className='grid grid-cols-4 gap-4 h-40'>
                        <div className='relative'>
                            <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold'>
                                Pacote tailândia
                            </div>
                            <img src={tripimg} alt="" className='rounded-lg w-full h-full object-cover' />
                        </div>

                        <div className='relative'>
                            <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold'>
                                Pacote Grécia
                            </div>
                            <img src={tripimg2} alt="" className='rounded-lg w-full h-full object-cover' />
                        </div>

                        <div className='relative'>
                            <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold'>
                                Pacote Punta Cana
                            </div>
                            <img src={tripimg3} alt="" className='rounded-lg w-full h-full object-cover' />
                        </div>

                        <div className='relative'>
                            <div className='absolute bottom-0 pl-4 pb-4 text-white font-bold'>
                                Pacote Caraíva
                            </div>
                            <img src={tripimg5} alt="" className='rounded-lg w-full h-full object-cover' />
                        </div>


                    </div>
                    <div className='mt-16'>
                        <h3 className='text-stone-800 text-2xl font-semibold mb-8'>Destinos que todo mundo ama</h3>

                        <div className='grid grid-cols-4 gap-4'>
                            <div className='h-96 relative'>
                                <div className='absolute bottom-0 pl-4 pb-4  text-white text-2xl font-bold'>
                                    Orlando
                                </div>
                                <img src={orlandoimg} alt="" className='w-full text-white h-full object-cover rounded-lg' />
                            </div>

                            <div className='relative'>
                                <div className='absolute bottom-0 pl-4 pb-4  text-white text-2xl font-bold'>
                                    Cancun
                                </div>
                                <img src={cancunimg} alt="" className='w-full text-white h-full object-cover rounded-lg' />
                            </div>

                            <div className='relative'>
                                <div className='absolute bottom-0 pl-4 pb-4  text-white text-2xl font-bold'>
                                    Maceió
                                </div>
                                <img src={maceioimg} alt="" className='w-full h-full object-cover rounded-lg' />
                            </div>

                            <div className='relative' >
                                <div className='absolute bottom-0 pl-4 pb-4  text-white text-2xl font-bold'>
                                    Porto
                                </div>
                                <img src={portoimg} alt="" className='w-full h-full object-cover rounded-lg' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home