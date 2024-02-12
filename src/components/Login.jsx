import AuthForm from "./Form/AuthForm";
import { useAuth } from "../contexts/Authcontext";

export default function Login() {
  const { login, setError } = useAuth();

  return (
    <div className='flex justify-center items-center h-[100vh] mt-8'>
	<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img className="h-52 w-full object-cover md:h-full md:w-48" src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1706454923/717d076b-8688-40f9-93f0-350e63fbdc16_ppszd6.png" alt="Modern building architecture"/>
    </div>
    <div className="p-8">
    <AuthForm
      title="Login to your account"
      onSubmit={login}
      buttonText="Login"
      linkText="Don't have an account? Register"
      linkTo="/signUp"
    />
    </div>
  </div>
</div>
	</div>
    
   
  );
}

