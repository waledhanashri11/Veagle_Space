import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* <Navbar /> */}

      <main className="flex-grow flex items-center justify-center bg-gray-100">
        
        <div className="bg-white p-8 rounded-xl shadow-md w-80">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>
        </div>

      </main>

      {/* <Footer /> */}

    </div>
  );
}