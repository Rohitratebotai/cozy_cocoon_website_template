
import { useNavigate } from "react-router-dom"
import { propertyData } from "../../../data"
import Heading from "../../commonComponents/heading/Heading"

const HomePage_Locations = () => {
    const navigate = useNavigate()

    const handleNavigate = (property: any) => {
        navigate(`/property_LocationDetails/${property?.id}`, { state: { property } })
    }
    return (
        <section className="pb-20">
            <Heading title={"Travel Destination"} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-32 p-6 place-items-center">
                {/* <Homepage_LocationBasedProperties /> */}
                {
                    propertyData?.filter((property) => property.location !== "Apartments") // Filter out "Apartments"                
                        ?.map((property: any) => {
                            return (
                                <>
                                    <div
                                        onClick={() => handleNavigate(property)}
                                        key={property.id}
                                        className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-md cursor-pointer group"
                                    >
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${property.location_image})` }}
                                        ></div>
                                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                                            <h2 className="text-white text-2xl font-bold">{property.location}</h2>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                }
            </div>
        </section>
    )
}

export default HomePage_Locations