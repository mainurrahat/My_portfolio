import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./Pages/Navber";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navber></Navber>
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
