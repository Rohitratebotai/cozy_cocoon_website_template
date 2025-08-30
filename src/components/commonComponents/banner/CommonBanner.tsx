
interface CommonBannerProps {
    image: string;
    PageName: string
}

const CommonBanner: React.FC<CommonBannerProps> = ({ image, PageName }) => {

    return (
        <section className='relative w-full'>
            <div className='relative h-[60vh] md:h-[75vh] w-full'>
                <img className='object-cover object-center w-full h-full' src={image} alt="Banner_Image" />
            </div>
            <div className='absolute left-28 md:left-20 bottom-20 md:bottom-1/3 text-white bg-[#01B7C2] px-4 lg:px-8 py-3 rounded-md'>
                <span className='text-xl md:text-3xl font-semibold tracking-wide'>{PageName}</span>
            </div>
        </section>
    )
}

export default CommonBanner