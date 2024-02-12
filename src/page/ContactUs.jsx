import React from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute z-10 bg-white bg-opacity-80 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          We'd love to hear from you! If you have any questions, suggestions, or concerns,
          feel free to reach out to us using the contact information below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ContactDetail label="Email" value="pranjal1476772@gmail.com" icon={<FiMail />} />
          <ContactDetail label="LinkedIn" value={<a href="https://www.linkedin.com/in/pranjal-sharma-93b4a01a4/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400 transition duration-300">Pranjal Sharma</a>} icon={<FiLinkedin />} />
          <ContactDetail label="GitHub" value={<a href="https://github.com/Pranjal-sharma-SDE" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-400 transition duration-300">Pranjal-sharma-SDE</a>} icon={<FiGithub />} />
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://res.cloudinary.com/dqhyudo4x/image/upload/v1707376885/e12c454a-6cec-4f4c-a334-f41d7dbf0d04_tq0o3d.jpg")' }}></div>
    </div>
  );
};

const ContactDetail = ({ label, value, icon }) => (
  <div className="text-lg mb-4 flex items-center">
    {icon}
    <span className="font-semibold ml-2">{label}: </span>
    {label === 'Email' ? (
      <a href={`mailto:${value}`} className="underline hover:text-yellow-400 transition duration-300">{value}</a>
    ) : (
      value
    )}
  </div>
);

export default ContactUs;
