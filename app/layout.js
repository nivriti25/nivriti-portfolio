import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Nivriti Varada | Full Stack Developer & AI Engineer",
  description: "Personal portfolio of Nivriti Varada, designed in the exact style of Blitz DND. Computer Science student specializing in Web Development & AI Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-light text-text-dark min-h-screen flex flex-col font-inter antialiased">
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}