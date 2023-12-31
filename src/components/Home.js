// import './App.css';
// import logo1 from './images/3.png'
import right from "./images/panda.png"
import quiz from './images/quiz.jpeg'
import game from './images/game.avif';
import game2 from './images/game2.avif';
import game4 from './images/game4.webp';
import game5 from './images/game5.avif';
import game6 from './images/game6.webp';
import game7 from './images/game7.png';
import './home.css';
// import './style.scss'



function Home() {
  return (
    <div className=' md:widt m-0 '>
    <div className=" bg-gradient-to-r from-white to-blue-500 ... m-auto flex md:flex-row flex-col-reverse mt-20 w-9/12 ">
     <div className=" md:w-1/2 w-4/5 text-black md:mt-32 mt-10 md:mb-0 mb-20 sm:ml-12 ml-4">
   
      <h1 className="sm:text-5xl text-3xl font-bold sparkle u-hover--sparkle">We are Legal Visions </h1>
      <h1 className="sm:text-3xl text-xl font-semibold sm:ml-0 ml-5 mt-3 sm:mt-10">Here you can play interactive games and watch stories from which you learn about various children's rights</h1>
     </div>
     <div className=" md:w-1/2 w-3/4 m-auto mt-16 md:mt-0">
     <img src={right} className=" w-max float-right"></img>
     </div>
    </div>

    {/* games section start */}
    <div className=" bg-white w-10/12 sm:w-9/12 m-auto ">
    <h1 className='font-extrabold text-6xl mx-auto mt-20 p-5 text-center'> Featured Games</h1>

   <div className=' flex-col flex sm:flex-row mr-8 pb-10'>
    <div className='sm:wid w-11/12 img ml-7 sm:ml-8  mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={quiz}/>
    <a href='https://650d218b1817910505c67d8f--spectacular-lebkuchen-e35132.netlify.app/'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Quiz Game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'>Here you can play the quiz and win the games.</p>
    </div>

    <div className='sm:wid w-11/12 img ml-7 sm:ml-8  mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game2}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Run Dumbo game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> An action game </p>
    </div>
    <div className='sm:wid w-11/12 img ml-7 sm:ml-8 mt-10 rounded-b-lg border-4 border-zinc-950' ><img className=' h-52 w-full' src={game7}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Junior Justice League </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> Funny Game</p>
    </div>

    </div>

    <div className=' flex-col flex sm:flex-row mr-8 pb-20'>
    <div className='sm:wid w-11/12 img ml-7 sm:ml-8  mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game4}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Balance Ball </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> A sports Game</p>
    </div>

    <div className='sm:wid w-11/12 img ml-7 sm:ml-8 mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game5}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Balloon Muzzle </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'>Puzzle Game</p>
    </div>
    <div className='sm:wid w-11/12 img ml-7 sm:ml-8  mt-10 rounded-b-lg border-4 border-zinc-950' ><img className=' h-52' src={game6}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Blue Story </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> Strategy Game</p>
    </div>

    </div>


    </div>
    </div>
  );
}

export default Home;