import img1 from '../../../assets/NearByplaces/Nagaon_Beach.jpg'
import img4 from '../../../assets/NearByplaces/murund_janjira.jpg'
import img2 from '../../../assets/NearByplaces/peth fort.webp'
import img3 from '../../../assets/about_images/mandwa_beach.jpeg'

interface Room {
    title: string,
    thumbnail: string,
    description: string,
}

const ExclusiveService_Card = () => {
    //  Card Data 
    const data: Room[] = [
        {
            title: "Your Paradise Awaits",
            thumbnail: img1,
            description: "Indulge in a peaceful sanctuary where elegance and comfort come together, creating the perfect escape from the ordinary."
        },
        {
            title: "A Home for Every Heart",
            thumbnail: img2,
            description: "Experience a haven of comfort and charm, thoughtfully crafted to complement every journey, lifestyle, and aspiration."
        },
        {
            title: "Sip, Relax, Repeat. ",
            thumbnail: img3,
            description: "Begin your morning with a cup of perfection—where every sip sparks inspiration and every moment feels richer."
        },
        {
            title: "Celebrations That Last a Lifetime. ",
            thumbnail: img4,
            description: "Make every moment unforgettable with events designed to turn your special day into something truly exceptional."
        },
    ];

    return (
        <section>
            <div className='h-full w-full  py-10 rounded-lg '>
                {/* mapping Card  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 '>
                    {data?.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="group relative h-[50vh] md:h-[65vh] w-full mb-3  rounded-lg overflow-hidden"
                            >
                                <img
                                    className="object-cover h-4/6 w-full  rounded-lg "
                                    src={item.thumbnail}
                                    alt="BackgroundImage"
                                />
                                <div className="h-2/6 flex flex-col justify-start items-center gap-1 text-center px-5 py-4">
                                    <p className="text-base font-light lg:text-base ">{item.description}</p>
                                </div>
                                <span className="cursor-pointer text-xl md:text-2xl font-bold absolute inset-0 flex justify-center items-center text-white  text-center group-hover:-top-20 transform duration-200 px-4 py-[6px]">
                                    {item.title}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExclusiveService_Card;
