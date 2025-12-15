import HighlightedHeading from "../../commonComponents/heading/HighlightedHeading"
import ExclusiveService_Card from "./ExclusiveService_Card"

const Homepage_ExclusiveService = () => {
    return (
        <section className="px-4 lg:px-20 bg-Bg_Primary text-primary">
            {/* Heading 1 - Yellow Highlight */}
            <HighlightedHeading
                beforeText="All your business on"
                highlightedText="one platform."
                description="Simple, efficient, yet affordable!"
                highlightColor="#7DD3FC"
                textColor="#fff"
                descriptionColor="#7DD3FC"
            />
            <ExclusiveService_Card />
        </section>

    )
}

export default Homepage_ExclusiveService