// Home.js


import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


function Home() {




  return (
    <div >
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center z-0"
        style={{ backgroundImage: 'url("https://res.cloudinary.com/dqhyudo4x/image/upload/v1707672340/WhatsApp_Image_2024-02-11_at_22.54.56_95b769f0_se5kcj.jpg")' }}
      >
        <div className="text-center text-white z-20 bg-lime-600 bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-5xl font-extrabold mb-4 hover:text-red-100">Welcome to Your App</h1>
          <p className="text-lg mb-8">Explore and manage your transactions</p>
          <Link to="/transaction">
          <Button color="blue" ripple="light" className="hover:bg-lime-600">
            Go to Transaction
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
