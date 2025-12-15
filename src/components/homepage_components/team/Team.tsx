import React from "react";
import HighlightedHeading from "../../commonComponents/heading/HighlightedHeading";

type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
};

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            id: 2,
            name: "Priyanka",
            role: "MBA, Don Bosco Bangalore ",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 1,
            name: "Vikas ",
            role: "MTech, IIT Bombay",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Khushboo ",
            role: "Masters,",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
        }
    ];

    return (
        <section className="py-16 bg-Bg_Primary text-primary">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <HighlightedHeading
                    beforeText="Your dream home in"
                    highlightedText="Our Team"
                    description="Meet the talented people behind our success"
                    highlightColor="#7DD3FC"
                    textColor="#fff"
                    descriptionColor="#7DD3FC"
                />

                {/* Team Layout - two cards per row */}
                <div className="grid w-full gap-8 sm:grid-cols-3 border px-5 py-2 rounded-xl">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex items-center gap-5 rounded-xl p-3 transition duration-300"
                        >
                            {/* Circle (Image) */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-40 w-40 rounded-full object-cover border-4 border-white"
                            />

                            {/* Details */}
                            <div>
                                <h3 className="text-xl font-semibold ">
                                    {member.name}
                                </h3>
                                <p className=" font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
