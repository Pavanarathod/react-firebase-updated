type Props = {};

const Login = (props: Props) => {
  return (
    <div className="h-screen bg-indigo-300 flex justify-center items-center">
      <div className="bg-white w-[450px] rounded-md px-10 shadow-xl py-2 flex flex-col space-y-4 pb-6">
        {/* Header */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <h1 className="text-3xl text-blue-500 font-semibold">Lama Chat</h1>
            <p>Login</p>
          </div>
        </div>

        {/* form */}
        <form className="flex flex-col w-full space-y-5">
          <input type="email" placeholder="email" className="login__input" />
          <input
            type="password"
            placeholder="password"
            className="login__input"
          />

          <button className="bg-indigo-400 text-white py-2 rounded-md focus:outline-none ">
            Sign in
          </button>
          <p className="mt-5 text-center text-sm">
            Do not have an account? Register
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
