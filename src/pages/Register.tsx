import { PhotoIcon } from "@heroicons/react/24/outline";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="h-screen bg-indigo-300 flex justify-center items-center">
      <div className="bg-white w-[450px] rounded-md px-10 shadow-xl py-2 flex flex-col space-y-4 pb-6">
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <h1 className="text-3xl text-blue-500 font-semibold">Lama Chat</h1>
            <p>Register</p>
          </div>
        </div>

        {/* form */}
        <form className="flex flex-col w-full space-y-5">
          <input type="text" placeholder="name" className="login__input" />
          <input type="email" placeholder="email" className="login__input" />
          <input
            type="password"
            placeholder="password"
            className="login__input"
          />
          <div>
            <label
              htmlFor="file"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <PhotoIcon className="text-gray-500 h-7 cursor-pointer" />
              <span className="text-gray-400">Add new avatar</span>
            </label>
            <input type="file" hidden id="file" />
          </div>
          <button className="bg-indigo-400 text-white py-2 rounded-md focus:outline-none ">
            Sign up
          </button>
          <p className="mt-5 text-center text-sm">
            Allready have an account? Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
