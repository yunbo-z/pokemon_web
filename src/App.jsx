import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <div className="">
      <img
        src={"/src/assets/img/pokemon-homepage.png"}
        className="fixed top-0 left-0 w-screen object-cover -z-10"
      ></img>
      <div className="pt-6 flex justify-center gap-6">
        <Link
          className="bg-[url(/src/assets/img/wood-pattern.png)] bg-[#D28E4E] bg-blend-multiply px-6 py-3 rounded-2xl [box-shadow:6px_6px_4px_rgba(0,0,0,0.5)] transform hover:scale-110 transition duration-300 ease-in-out"
          to="/search">
          <span className='text-2xl text-[#6B381C] font-bold'>Search</span>
        </Link>
        <Link
          className="bg-[url(/src/assets/img/wood-pattern.png)] bg-[#D28E4E] bg-blend-multiply px-6 py-3 rounded-2xl [box-shadow:6px_6px_4px_rgba(0,0,0,0.5)] transform hover:scale-110 transition duration-300 ease-in-out"
          to="/search">
          <span className='text-2xl text-[#6B381C] font-bold'>Explore Pokemon</span>
        </Link>
      </div>
    </div>
  )
}

export default App
