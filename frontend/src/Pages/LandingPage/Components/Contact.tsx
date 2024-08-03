import React, { useState, ChangeEvent } from "react";

function Contact() {
  const [CopyTextNote, setCopyTextNote] = useState(false);
  const email = "nils@team-fink.de";
  const textToCopy = "Email kopieren"; // Ersetze mit dem Text, den du kopieren möchtest

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyTextNote(true);
        setTimeout(() => {
          setCopyTextNote(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Fehler beim Kopieren: ", err);
      });
  };

  const handleOpenEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleEmailClick = () => {
    handleCopyText();
    handleOpenEmailClient();
  };

  return (
    <div className="flex h-full">
      {/* Icons go here */}
      <div className="grid grid-cols-2 w-full h-full text-3xl md:text-5xl lg:text-7xl text-white gap-4 ">
        <button className=" h-full w-full  hover:text-gray-400 rounded-lg bg-gradient-to-br from-fuchsia-900 to-pink-600">
          <a href="https://www.instagram.com/n1ls3_8/">
            <i className="bi bi-instagram"></i>
          </a>
        </button>
        <button className="h-full  hover:text-gray-400 rounded-lg bg-gradient-to-bl from-indigo-900 to-blue-700 ">
          <a href="https://www.linkedin.com/in/nils-fink-42220b257/">
            <i className="bi bi-linkedin "></i>
          </a>
        </button>
        <button className="h-full  hover:text-gray-400 rounded-lg bg-gradient-to-tr to-violet-600 from-indigo-800">
          <a href="https://github.com/NiFink">
            <i className="bi bi-github "></i>
          </a>
        </button>
        <button
          className="h-full  hover:text-gray-400 rounded-lg bg-gradient-to-tl to-emerald-700 from-emerald-900"
          onClick={handleEmailClick}
        >
          <i className="bi bi-envelope-at-fill"></i>
        </button>
      </div>
      {CopyTextNote && (
        <div className="fixed bottom-0 left-0 w-full flex justify-center z-50">
          <div className="bg-gradient-to-r to-emerald-700 from-emerald-900 text-white py-2 px-4 rounded shadow-md">
              Email address was copied. Your mail programm will open soon.
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
