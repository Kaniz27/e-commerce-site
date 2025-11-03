import React from "react";
import member1 from "../assets/about-6.png";
import member2 from "../assets/about-8.png";
import member3 from "../assets/about-8.png";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      image: member1,
      description: "Leading the company with vision and passion.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: member2,
      description: "Responsible for all tech innovations.",
    },
    {
      name: "Alice Johnson",
      role: "CFO",
      image: member3,
      description: "Managing finances and strategic planning.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Team</h2>
        <p className="text-gray-600 mt-2">Meet the people behind our success</p>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
          >
            {/* Info Div */}
            <div className="flex-1 flex flex-col gap-3">
              <h1 className="text-2xl font-bold">{member.name}</h1>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500">{member.description}</p>
              <button className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                View Profile
              </button>
            </div>

            {/* Images Div (Both images in one container) */}
            <div className="flex gap-4">
              <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute top-0 right-0 w-16 h-16 object-cover rounded-lg border-2 border-white shadow"
                />
                <div className="absolute bottom-2 left-2 bg-white p-1 rounded shadow text-xs text-gray-700">
                  {member.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
