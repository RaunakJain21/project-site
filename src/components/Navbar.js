// import './App.css';
import logo from './images/2.png';
// import './Navbar.css'

function Navbar() {
  return (
    <div className=" w-screen">
    <nav className=" w-screen border-gray-200 bg-gray-900">
  <div className="max-w-screen-xl flex sm:ml-5  items-center justify-between mx-auto p-4">
    <div className='flex flex-row justify-between'><a href="#" className="flex flex-row items-center">
      <img
        src={logo}
        className=" md:h-16 h-10 mr-3"
        alt="legal visions logo"
      />
      <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-white">
        Legal Visions
      </span>
    </a>
    {/* <div className="flex md:order-2"> */}
      {/* <button
        type="button as"
        className="text-white hover:underline text-base hidden sm:flex sm:text-xl px-4 py-2 mr-3 md:mr-0 "
      >
        Login/Signup
      </button> */}
      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        className=" flex flex-row items-center p-2 w-10 h-10 ml-20 sm:ml-0 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-cta"
        aria-expanded="false"
      >
        <span className=" sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path 
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    {/* </div> */}
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mr-10"
      id="navbar-cta"
    >
    {/* extra section */}
     
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-900  dark:border-gray-700">
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:p-0 "
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent hover:text-blue-700 md:p-0  text-white   md:dark:hover:bg-transparent dark:border-gray-700"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent hover:text-blue-700 md:p-0  text-white   md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent hover:text-blue-700 md:p-0  text-white   md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
