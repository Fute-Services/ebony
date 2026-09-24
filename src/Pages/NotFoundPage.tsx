import { Link } from "react-router-dom";


export default function NotFoundPage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700">The page you are looking for does not exist...</p>
      <Link to="/" className="bg-black px-4 py-2 rounded-lg mt-5 text-white hover:bg-gray-300 text-[13px] font-bold hover:text-black transition-all duration-300 ease-in-out">GO HOME</Link>
    </div>
     
    </>
  );
}