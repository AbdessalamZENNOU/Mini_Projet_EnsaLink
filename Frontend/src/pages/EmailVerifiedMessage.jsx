import { useNavigate } from "react-router";

const EmailVerifiedMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="max-w-md w-full px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Congratulations!
          </h2>
          <p className="text-gray-400">
            Your email has been verified and your account has been created
            successfully.
          </p>
        </div>
        <button
          onClick={() => navigate("/signin")}
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

export default EmailVerifiedMessage;
