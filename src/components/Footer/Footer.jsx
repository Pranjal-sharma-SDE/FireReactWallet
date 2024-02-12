import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-lime-100">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 FireReact Wallet
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
            <Link to={'/aboutus'}>
          <Typography
           
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
          </Link>
        </li>
       
       
        <li>
            <Link to={'/toc'}>
          <Typography
          
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            TOC
          </Typography>
          </Link>
        </li>
        <li>
            <Link to={'/contactus'}>
          <Typography
          
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
          </Link>
        </li>
      </ul>
    </footer>
  );
}