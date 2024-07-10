import user from "/user.svg"; 
import myntra from "/myntra.svg"

const Navbar = () => {
    return (
        <nav className="bg-custom-gradient bg-opacity-30 backdrop-blur-md fixed w-full top-0 left-0 z-50 m-0 p-0" style={{ height: '50px' }}>
            <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 h-12" >
                <div className="flex items-center justify-between h-full mx-0">
                    <div className="flex items-center mx-0">
                        <img src={myntra} alt="logo" style={{ height: '100%' }} />
                    </div>
                    <div className="flex space-x-8 items-center justify-between mx-0 h-full">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Participate</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Vote</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                        {/* User Profile Section */}
                        <div className="flex items-center h-full">
                            <img src={user} alt="User Profile"  /> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
