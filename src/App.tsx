import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <div className="container mx-auto px-20 py-10">
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.....</p>}>
        <Technologies></Technologies>
      </Suspense>
    </div>
  );
}

export default App;
