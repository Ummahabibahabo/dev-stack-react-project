import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { TechnologiesType } from "./Components/types";
const technologiesPromise = async (): Promise<TechnologiesType[]> => {
  const res = await fetch("/public/data.json");
  const data = res.json();
  return data;
};
function App() {
  return (
    <div className="container mx-auto px-20 py-10">
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.....</p>}>
        <Technologies
          technologiesPromise={technologiesPromise()}
        ></Technologies>
      </Suspense>
    </div>
  );
}

export default App;
