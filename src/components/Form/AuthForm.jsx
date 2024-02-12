import { useState, useEffect } from "react";
import { Input,Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Authcontext";

export default function AuthForm({ title, onSubmit, buttonText, linkText, linkTo }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, setError } = useAuth();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await onSubmit(email, password);
      navigate("/");
    } catch (e) {
      setError(`Failed to ${title.toLowerCase()}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-lime-100 p-12 rounded-lg">
        <div>
          <h2 className="mt-4 text-3xl text-center tracking-tight font-light dark:text-white">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <Input
                  id="email-address"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              disabled={loading}
              color="sky-700"
              hover={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  "
            >
              {buttonText}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to={linkTo}
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                {linkText}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
