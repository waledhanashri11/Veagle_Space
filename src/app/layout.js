import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata = {
  title: "Garage App",
  description: "Simple Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-100">

        <Navbar />

        <main className="min-h-screen p-6">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}