import Navbar from "../Navbar";
import Footer from "../Footer";

const BaseLayout = ({ children }) => {
  return (
    <main className="w-full flex flex-col bg-gray-50 min-h-screen">
      <Navbar />
      <div
        className={`flex-1 w-full  bg-white mx-auto mt-[55px] py-4`}
      >
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default BaseLayout;
