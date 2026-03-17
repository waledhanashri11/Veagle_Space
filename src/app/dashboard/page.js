import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center bg-gray-50">
        
        <h1 className="text-3xl font-bold text-green-600">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Welcome to your dashboard 🎉
        </p>

      </main>

      <Footer />

    </div>
  );
}