import AnimatedCounter from '../../../AnimatedCounter'

const CounterUp = () => {
    return (
        <div className=' py-10 px-4 md:px-20 bg-bgsecondary text-center lg:px-20 h-fit'>
            {/* grid and CounterUp */}
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-5'>
                <div className='flex  flex-col items-center sm:items-center'>
                    <span className="text-primary_desClr flex text-2xl sm:text-3xl lg:text-5xl font-semibold">
                        <AnimatedCounter from={0} to={3500} />+
                    </span>
                    <p className='text-primary_desClr text-center sm:text-start font-normal text-2xl'>Hotels</p>
                </div>
                <div className='flex  flex-col items-center sm:items-center'>
                    <span className="text-primary_desClr flex text-2xl sm:text-3xl lg:text-5xl font-semibold">
                        <AnimatedCounter from={0} to={150} />+                                    </span>
                    <p className='text-primary_desClr text-center sm:text-start font-normal text-2xl'>OTAs</p>
                </div>
                <div className='flex  flex-col items-center sm:items-center'>
                    <span className="text-primary_desClr flex text-2xl sm:text-3xl lg:text-5xl font-semibold">
                        <AnimatedCounter from={0} to={300} />+
                    </span>
                    <p className='text-primary_desClr text-center lg:text-start font-normal text-2xl'>Travel Agent Partners</p>
                </div>
                <div className='flex  flex-col items-center sm:items-center'>
                    <span className="text-primary_desClr flex text-2xl sm:text-3xl lg:text-5xl font-semibold">
                        <AnimatedCounter from={0} to={75000} />+                                    </span>
                    <p className='text-primary_desClr text-center sm:text-start font-normal text-2xl'>Rooms</p>
                </div>
                <div className='flex  flex-col items-center sm:items-center'>
                    <span className="text-primary_desClr flex text-2xl sm:text-3xl lg:text-5xl font-semibold">
                        <AnimatedCounter from={0} to={250} />+
                    </span>
                    <p className='text-primary_desClr text-center sm:text-start font-normal text-2xl'>Locations</p>
                </div>
                <div className='flex  flex-col items-center sm:items-center'>
                    <span className="text-primary_desClr flex text-2xl sm:text-3xl lg:text-5xl font-semibold">
                        <AnimatedCounter from={0} to={2} />
                    </span>
                    <p className='text-primary_desClr text-center sm:text-start font-normal text-2xl'>Countries</p>
                </div>
            </div>
        </div>
    )
}

export default CounterUp