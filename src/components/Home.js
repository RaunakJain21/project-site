// import './App.css';
import logo1 from './images/3.png'
import right from "./images/panda.png"
import game from './images/game.avif';
import './home.css';
// import './style.scss'



function Home() {
  return (
    <div>
    <div className=" bg-gradient-to-r from-white to-blue-500 ... m-auto flex flex-row mt-20 w-9/12">
     <div className=" w-1/2 text-black mt-32 ml-12">
     {/* <img src={logo1}/> */}
      <h1 className="text-5xl font-bold sparkle u-hover--sparkle">We are Legal Visions </h1>
      <h1 className="text-3xl font-semibold mt-10">Here you can play interactive games and watch stories from which you learn about various children's rights</h1>
     </div>
     <div className=" w-1/2">
     <img src={right} className=" w-max float-right"></img>
     </div>
    </div>

    {/* games section start */}
    <div className=" bg-white w-9/12 m-auto ">
    <h1 className='font-extrabold text-6xl mx-auto mt-20 p-5 text-center'> Featurd Games</h1>

   <div className='flex flex-row mr-8 pb-10'>
    <div className='wid img ml-8  mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Strategy game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> fsdjnsbj hjdsbfkvj sjdbf xfvdf ksjb</p>
    </div>

    <div className='img wid ml-8 mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Strategy game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> fsdjnsbj hjdsbfkvj sjdbf xfvdf ksjb</p>
    </div>
    <div className='wid img ml-8 mt-10 rounded-b-lg border-4 border-zinc-950' ><img className=' h-52' src={game}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Strategy game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> fsdjnsbj hjdsbfkvj sjdbf xfvdf ksjb</p>
    </div>

    </div>

    <div className='flex  flex-row mr-8 pb-20'>
    <div className='wid img ml-8  mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Strategy game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> fsdjnsbj hjdsbfkvj sjdbf xfvdf ksjb</p>
    </div>

    <div className=' wid img ml-8 mt-10 rounded-b-lg border-4 border-zinc-950'><img className=' h-52' src={game}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Strategy game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> fsdjnsbj hjdsbfkvj sjdbf xfvdf ksjb</p>
    </div>
    <div className='wid img ml-8 mt-10 rounded-b-lg border-4 border-zinc-950' ><img className=' h-52' src={game}/>
    <a href='#'><h1 className=' text-2xl p-4 font-semibold hover:underline'>Strategy game </h1></a>
    <p className='text-lg ml-4 mr-4 mb-4'> fsdjnsbj hjdsbfkvj sjdbf xfvdf ksjb</p>
    </div>

    </div>


    </div>
    </div>
  );
}

export default Home;