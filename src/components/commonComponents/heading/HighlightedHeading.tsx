
interface HighlightedHeadingProps {
    beforeText?: string;
    highlightedText: string;
    afterText?: string;
    description?: string;
    highlightColor?: string;
    textColor?: string;
    descriptionColor?: string;
}

const HighlightedHeading = ({
    beforeText = "",
    highlightedText,
    afterText = "",
    description,
    highlightColor = "#fff",
    textColor = "#fff",
    descriptionColor = "#4169E1"
}: HighlightedHeadingProps) => {
    return (
        <section className="py-14">
            <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center gap-6">

                {/* Main Heading with Highlight */}
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight"
                    style={{ fontFamily: "'Caveat', cursive, 'Playfair Display', serif" }}
                >
                    <span style={{ color: textColor, fontFamily: "'Caveat', cursive" }}>
                        {beforeText}{' '}
                    </span>
                    <span
                        className="relative inline-block"
                        style={{ color: textColor, fontFamily: "'Caveat', cursive" }}
                    >
                        {highlightedText}
                        <svg
                            className="absolute left-0 right-0 -bottom-2 md:-bottom-3 w-full"
                            viewBox="0 0 400 30"
                            preserveAspectRatio="none"
                            style={{ height: '20px', minHeight: '15px' }}
                        >
                            <path
                                d="M5 20 Q 100 5, 200 15 T 395 18"
                                fill="none"
                                stroke={highlightColor}
                                strokeWidth="10"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    <span style={{ color: textColor, fontFamily: "'Caveat', cursive" }}>
                        {' '}{afterText}
                    </span>
                </h1>

                {/* Description */}
                {description && (
                    <p
                        className="text-base md:text-xl lg:text-3xl max-w-3xl font-medium leading-normal tracking-wide"
                        style={{
                            color: descriptionColor,
                            fontFamily: "'Caveat', cursive"
                        }}
                    >
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default HighlightedHeading;


{/* Heading 1 - Yellow Highlight */ }
{/* <HighlightedHeading
                            beforeText="All your business on"
                            highlightedText="one platform."
                            description="Simple, efficient, yet affordable!"
                            highlightColor="#FFD166"
                            textColor="#1a1a1a"
                            descriptionColor="#4169E1"
                        /> */}

{/* <div className="border-t border-gray-300 my-12 max-w-4xl mx-auto"></div> */ }

{/* Heading 2 - Orange Highlight */ }
{/* <HighlightedHeading
                            beforeText="Discover properties in"
                            highlightedText="premium locations"
                            afterText="across Mumbai"
                            description="Luxury living spaces designed for modern families!"
                            highlightColor="#FF8C42"
                            textColor="#2d3748"
                            descriptionColor="#38B2AC"
                        /> */}

{/* <div className="border-t border-gray-300 my-12 max-w-4xl mx-auto"></div> */ }

{/* Heading 3 - Pink Highlight */ }
{/* <HighlightedHeading
                            beforeText="Experience the"
                            highlightedText="perfect blend"
                            afterText="of comfort"
                            description="Where elegance meets functionality in every detail!"
                            highlightColor="#FF6B9D"
                            textColor="#1a202c"
                            descriptionColor="#805AD5"
                        /> */}

{/* <div className="border-t border-gray-300 my-12 max-w-4xl mx-auto"></div> */ }