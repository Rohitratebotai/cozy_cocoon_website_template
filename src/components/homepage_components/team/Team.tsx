import React from "react";

type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
};

const Team: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: "Alice Johnson",
            role: "Frontend Developer",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 2,
            name: "Mark Wilson",
            role: "Backend Developer",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Sophia Lee",
            role: "UI/UX Designer",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            id: 4,
            name: "James Brown",
            role: "Project Manager",
            image: "https://randomuser.me/api/portraits/men/20.jpg",
        },
    ];

    return (
        <section className="py-16 ">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">
                        Our Team
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the talented people behind our success
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="text-center group"
                        >
                            {/* Avatar */}
                            <div className="mb-4 inline-block">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg border-4 border-white group-hover:shadow-xl transition-shadow duration-300"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="text-gray-600 font-medium">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;