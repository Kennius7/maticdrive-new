import Banner from "../components/Banner";
import Features from "../components/Features";
import Hero from "../components/Hero";


function Homepage() {
  return (
    <div className="w-full">
        <Banner/>
        <Hero/>
        <Features/>
    </div>
  )
}

export default Homepage