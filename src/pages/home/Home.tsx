import Parallax from "../../components/commonComponents/parallax/Parallax"
// import Amenities from "../../components/homepage_components/amenities/Amenities"
import Homepage_ExclusiveService from "../../components/homepage_components/homepage_exclusiveservice/Homepage_ExclusiveService"
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
            {/* <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A2E] font-[Caveat] leading-tight">
                All your business on <span className="highlight-yellow">one platform.</span>
            </h2>
            <p className="text-xl mt-2 font-[Caveat] text-[#0A1A2E]">
                <span className="highlight-blue">Simple, efficient, yet affordable!</span>
            </p>

            <h2 className="text-4xl md:text-5xl font-bold font-[Caveat] text-[#111827]">
                Grow <span className="highlight-yellow">Smarter</span>, Scale <span className="highlight-yellow">Faster</span>
            </h2>
            <p className="text-xl mt-2 font-[Caveat] text-[#1F2937]">
                <span className="highlight-blue">Tools that automate your success.</span>
            </p>

            <h2 className="text-4xl md:text-5xl font-bold font-[Caveat] text-[#101820]">
                Your ideas, <span className="highlight-yellow">Perfectly Built.</span>
            </h2>
            <p className="text-xl mt-2 font-[Caveat] text-[#101820]">
                <span className="highlight-blue">Design. Develop. Deliver.</span>
            </p>

            <h2 className="text-4xl font-[Pacifico&display]">
                All your business on <span className="highlight-yellow">one platform.</span>
            </h2> */}


            <div className="">
                <Homepage_Properties />
            </div>
            {/* <div>
                <HomePage_Locations />
            </div> */}
            <div>
                <Parallax image={img} title={'Cult Escape – Where Luxury Meets Tranquility'} description={'Escape to Cult Escape, a sanctuary where elegance and serenity blend seamlessly. Experience unmatched hospitality, thoughtfully designed spaces, and a deep connection with nature—crafted to create moments that last a lifetime.'} />
            </div>
            {/* <div className=" px-4 lg:px-20 ">
                <Amenities />
            </div> */}
            {/* <div className=" px-4 lg:px-20 ">
                <CounterUp />
            </div> */}
            <div className="">
                <Homepage_LetUsGuide />
            </div>
            <div className="">
                <Team />
            </div>
            <div className="">
                <Homepage_ExclusiveService />
            </div>
            <div className="">
                <Homepage_WhyChoose />
            </div>
            <div className="">
                <Homepage_Testimonial />
            </div>
        </section>
    )
}

export default Home