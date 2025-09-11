import Parallax from "../../components/commonComponents/parallax/Parallax"
// import Amenities from "../../components/homepage_components/amenities/Amenities"
// import Homepage_ExclusiveService from "../../components/homepage_components/homepage_exclusiveservice/Homepage_ExclusiveService"
import Homepage_LetUsGuide from "../../components/homepage_components/homepage_letusguide/Homepage_LetUsGuide"
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties"
import Homepage_Testimonial from "../../components/homepage_components/homepage_testimonial/Homepage_Testimonial"
import Homepage_WhyChoose from "../../components/homepage_components/homepage_whychoose/Homepage_WhyChoose"
import Slider from "../../components/homepage_components/slider/Slider"
import img from '../../assets/cosy_villa_images/img_19.jpeg'
import Team from "../../components/homepage_components/team/Team"
// import HomePage_Locations from "../../components/homepage_components/homepage_locations/HomePage_Locations"
// import CounterUp from "../../components/homepage_components/counterup/CounterUp"

const Home = () => {
    // Slider Images 
    return (
        <section className="relative ">
            <div className="w-full h-fit ">
                <Slider />
            </div>
            <div className="bg-slate-50">
                <Homepage_Properties />
            </div>
            <div>
                {/* <HomePage_Locations /> */}
            </div>
            <div>
                <Parallax image={img} title={'Cult Escape – Where Luxury Meets Tranquility'} description={'Escape to Cult Escape, a sanctuary where elegance and serenity blend seamlessly. Experience unmatched hospitality, thoughtfully designed spaces, and a deep connection with nature—crafted to create moments that last a lifetime.'} />
            </div>
            {/* <div className=" px-4 lg:px-20 ">
                <Amenities />
            </div> */}
            {/* <div className=" px-4 lg:px-20 ">
                <CounterUp />
            </div> */}
            <div className="bg-white text-gray-800">
                <Homepage_LetUsGuide />
            </div>
            <div className="bg-slate-50">
                <Team />
            </div>
            {/* <div className="">
                <Homepage_ExclusiveService />
            </div> */}
            <div className="bg-white text-gray-800">
                <Homepage_WhyChoose />
            </div>
            <div className="bg-slate-50">
                <Homepage_Testimonial />
            </div>
        </section>
    )
}

export default Home