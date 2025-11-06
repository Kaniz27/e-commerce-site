import React from "react";

const AboutSection = () => {
  const aboutItems = [
    {
      title: "Who we are",
      description:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Ellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our history",
      description:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Ellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our mission",
      description:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. Ellus eros donec ac odio orci ultrices in.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[250px] bg-white p-6 rounded-lg  "
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
