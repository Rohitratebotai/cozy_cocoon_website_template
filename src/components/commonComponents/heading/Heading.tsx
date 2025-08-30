interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <section>
            <div className="py-10 text-primary md:py-14 tracking-wide flex justify-start items-center text-xl md:text-2xl lg:text-5xl font-medium relative">
                <p className="relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-primary after:rounded-full after:transition-all after:duration-500 after:ease-in-out hover:after:w-0 cursor-pointer">
                    {title}
                </p>
            </div>
        </section>
    );
};

export default Heading;
