import Banner from "../components/Banner";
import Features from "../components/Features";
import Hero from "../components/Hero";
import PartnerShip from "../components/PartnerShip";


function Homepage() {
  return (
    <div className="w-full">
        <Banner/>
        <Hero/>
        <Features/>
        <PartnerShip/>
    </div>
  )
}

export default Homepage