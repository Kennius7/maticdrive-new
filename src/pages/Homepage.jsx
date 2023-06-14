import Banner from "../components/Banner";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HomePageContactUs from "../components/HomePageContactUs";
import PartnerShip from "../components/PartnerShip";
import YoutubeEmbed from "../components/YoutubeEmbed";


function Homepage() {
  return (
    <div className="w-full">
        <Banner/>
        <Hero/>
        <YoutubeEmbed embedId="MDxSItbvdXM" />
        <Features/>
        <PartnerShip/>
        <HomePageContactUs/>
    </div>
  )
}

export default Homepage