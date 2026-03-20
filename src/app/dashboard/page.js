import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-10 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2">Welcome to your dashboard</p>
      </main>

      <Footer />
    </>
  );
}