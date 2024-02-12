import {useState,useEffect} from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
 
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Authcontext";
import Logout from "../Logout";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const {  isLogging} = useAuth();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/transaction" className="flex items-center">
          Transaction
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/dashboard" className="flex items-center">
          Dashbord
        </Link>
      </Typography>
      
      
    </ul>
  );
 
  return (
    <div className=" max-h-[768px] w-[calc(100%)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none  lg:px-8 lg:py-4 bg-cyan-100">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
          <span className=" flex justify-center items-center" >
          <img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1707643486/image-removebg-preview_sif4s7.png" alt="logo" className=" h-20 w-20 bg-cover " />
          <Typography
            
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            FireReact Wallet
          </Typography>
          </span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {  !isLogging && (  <><Link to='signIn'>
                              <Button
                                  variant="text"
                                  size="sm"
                                  className="hidden lg:inline-block"
                              >
                                  <span>Log In</span>
                              </Button>
                          </Link>
                          <Link to='signUp'>
                                  <Button
                                      variant="gradient"
                                      size="sm"
                                      className="hidden lg:inline-block"
                                  >
                                      <span>Sign Up</span>
                                  </Button>
                              </Link></>)} 
                              { isLogging && (
                <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={openModal}
              >
                <span>Logout</span>
               
                <Logout modal={modal} setModal={setModal}/>
              </Button>
              )
}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
          {  !isLogging ? (  <><Link to='signIn'>
                              <Button
                                  variant="text"
                                  size="sm"
                                  className="inline-block lg:hidden"
                              >
                                  <span>Log In</span>
                              </Button>
                          </Link><Link to='signUp'>
                                  <Button
                                      variant="gradient"
                                      size="sm"
                                      className="inline-block lg:hidden"
                                  >
                                      <span>Sign Up</span>
                                  </Button>
                              </Link></>): 
              (
                <Button
                variant="gradient"
                size="sm"
                className=" block lg:hidden"
                onClick={openModal}
              >
                <span>Logout</span>
              
                <Logout modal={modal} setModal={setModal}/>
              </Button>
              )
}
          </div>
        </MobileNav>
      </Navbar>
    
    </div>
  );
}