import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* App Name */}
      <h1 className="text-xl font-bold tracking-wide">
        Dhanashri
      </h1>

      {/* Menu */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-yellow-400 transition">
          Home
        </Link>
        <Link href="/login" className="hover:text-yellow-400 transition">
          Login
        </Link>
      </div>

    </nav>
  );
}