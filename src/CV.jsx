danarx.com-react\src\CV.jsx
import React from "react";

const CV = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />
        <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
        <p className="text-gray-500">Frontend Developer</p>
        <div className="flex space-x-4 mt-2">
          <span className="text-gray-400 text-sm">Email: johndoe@email.com</span>
          <span className="text-gray-400 text-sm">Phone: +123 456 7890</span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile</h2>
        <p className="text-gray-600">
          Passionate frontend developer with experience in building responsive web applications using React and Tailwind CSS. Strong problem-solving skills and a keen eye for design.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="font-bold text-gray-800">Frontend Developer</h3>
          <span className="text-gray-500 text-sm">Awesome Company &middot; 2021 - Present</span>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Developed and maintained web applications using React and Tailwind CSS.</li>
            <li>Collaborated with designers and backend developers to deliver high-quality products.</li>
            <li>Optimized applications for maximum speed and scalability.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">Web Developer Intern</h3>
          <span className="text-gray-500 text-sm">Tech Startup &middot; 2020 - 2021</span>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Assisted in building landing pages and UI components.</li>
            <li>Participated in code reviews and team meetings.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Education</h2>
        <div>
          <h3 className="font-bold text-gray-800">B.Sc. in Computer Science</h3>
          <span className="text-gray-500 text-sm">University of Example &middot; 2017 - 2021</span>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Git</span>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Languages</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>English (Fluent)</li>
          <li>Spanish (Intermediate)</li>
        </ul>
      </section>
    </div>
  );
};

export default CV;
