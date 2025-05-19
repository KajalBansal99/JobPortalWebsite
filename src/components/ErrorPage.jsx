import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg mb-6">Sorry, an unexpected error has occurred.</p>
      <Link 
        to="/" 
        className="px-4 py-2 bg-[#6A38C2] text-white rounded hover:bg-[#5A2CAD]"
      >
        Return to Home
      </Link>
    </div>
  );
}