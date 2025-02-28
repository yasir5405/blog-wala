import { SignupForm } from "../components";

const SignupPage = () => {
  return (
    <div className="flex w-full h-screen px-[20px] lg:px-0 md:px-0">
      <div className="h-full w-full md:w-[50%] lg:w-[50%] flex items-center justify-center">
        <SignupForm />
      </div>
      <div className="h-full w-[50%] hidden md:flex lg:flex">
        <img
          src="/authImage.jpg"
          className="h-full w-full object-cover"
          alt="auth-image"
        />
      </div>
    </div>
  );
};

export default SignupPage;
