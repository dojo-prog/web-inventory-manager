import { LockIcon, User2Icon } from "lucide-react";
import AuthInput from "../../../shared/AuthInputs";
import Header from "./components/Header";
import { useForm } from "../../../hooks/useForm";

const Signin = () => {
  const { formData, handleChange } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  return (
    <div className="h-screen w-screen">
      <Header />

      {/* Main */}
      <main className="h-[calc(100vh-4rem)] w-full bg-background flex items-center justify-center">
        {/* Login Container */}
        <div className="w-md bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden">
          <div className="h-2 w-full bg-linear-to-r from-primary to-secondary" />
          <div className="h-ful w-full p-12 flex flex-col items-center">
            {/* Header Text */}
            <div className="w-full text-center mb-4">
              <h2 className="font-headline text-3xl font-bold mb-2">
                Admin Sign In
              </h2>
              <p className="text-xs text-secondary font-body">
                Welcome back. Please enter your credentials to access the
                management dashboard.
              </p>
            </div>

            {/* Form */}
            <form className="w-full space-y-4">
              <AuthInput
                type="email"
                label="Email Address"
                placeholder="admin@example.com"
                Icon={User2Icon}
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <AuthInput
                type="password"
                label="Password"
                placeholder="********"
                Icon={LockIcon}
                id="password"
                name="password"
                isPasswordField={true}
                value={password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="h-10 w-full bg-primary hover:bg-primary-hover text-white font-label font-semibold rounded-md text-sm mt-6 flex items-center justify-center transition-colors duration-200 cursor-pointer "
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signin;
