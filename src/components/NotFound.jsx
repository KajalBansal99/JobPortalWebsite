import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="px-4 py-2 bg-[#6A38C2] text-white rounded hover:bg-[#5A2CAD]"
      >
        Go to Homepage
      </Link>
    </div>
  );
}