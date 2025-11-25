import React from "react";
import Hero from "./component/hero.jsx";
import Fab from "./component/fab.jsx";
import Poster from "./component/poster.jsx";
import OneMain from "./component/oneMain.jsx";
import TwoMain from "./component/twoMain.jsx";
import Achivements from "./component/achivments.jsx";
import Review from "./component/review.jsx";
import Faq from "./component/faq.jsx";
import Footer from "./component/footer.jsx";
import Map from './component/map.jsx'
const App = () => {
  return (
    <>
      <div className="scroll-smooth overflow-hidden">
        <Hero />
        <Poster />
        <OneMain />
        <TwoMain />
        <Achivements />
        <Faq />
        <Review />
<Map/>
        <Footer />

        <Fab />
      </div>
    </>
  );
};

export default App;
