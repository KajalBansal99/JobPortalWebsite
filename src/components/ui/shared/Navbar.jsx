import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate import
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // This already returns the path
    navigate('/login'); // Navigate to login page
  };

  const handleViewProfile = () => {
    navigate('/profile'); // Navigate to profile page
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#6A38C2]">Portal</span>
            </h1>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:text-[#F83002] cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#F83002] cursor-pointer">
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="hover:text-[#F83002] cursor-pointer">
                  <Link to="/browse">Browse</Link>
                </li>
              </ul>
            </nav>

            {isLoggedIn ? (
  <Popover>
    <PopoverTrigger>
      <div className="flex items-center gap-2 cursor-pointer">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.avatar} />
          <AvatarFallback>
            {user?.name?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        {/* Always show name if available */}
        {user?.name && (
          <span className="text-sm font-medium text-gray-700">
            {user.name}
          </span>
        )}
      </div>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start"
                    onClick={handleViewProfile}
                  >
                    View Profile
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            ) : (
              <div className="flex gap-4 items-center">
                <Link to="/login">
                  <Button variant="outline" className="border-[#F83002] text-[#F83002] hover:bg-[#F83002] hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="border-[#F83002] text-[#F83002] hover:bg-[#F83002] hover:text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;