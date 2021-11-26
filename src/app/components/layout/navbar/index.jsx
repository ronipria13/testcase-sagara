import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-6 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
                <Link to="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
                    <img className="h-8 w-8" src="/images/logo.jpg" alt="Logo" />
                </Link>
            </div>
            <div>
                <Link to="/login" className="ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent md:rounded-full lg:rounded-full shadow-sm text-base font-medium text-white bg-green-400 hover:bg-indigo-700 w-full  rounded-md mt-6 dark:bg-gray-700">Login</Link>
            </div>
            </nav>
        </div>
    )
}
