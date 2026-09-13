import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologiesType } from "./Components/types";
import Footer from "./Components/Footer";
const technologiesPromise = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};
function App() {
  return (
    <div>
      <div className="container mx-auto px-20 py-10">
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense fallback={<p>Loading.....</p>}>
          <Technologies
            technologiesPromise={technologiesPromise()}
          ></Technologies>
        </Suspense>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
