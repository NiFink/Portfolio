function Contact() {
  return (
    <div className="flex h-full">
      {/* Icons go here */}
      <div className="grid grid-cols-2 w-full h-full text-3xl md:text-5xl lg:text-7xl text-white gap-4 ">
        <button className=" h-full w-full  hover:text-gray-400 rounded-lg bg-gradient-to-br from-fuchsia-900 to-pink-600">
          <i className="bi bi-instagram"></i>
        </button>
        <button className="h-full  hover:text-gray-400 rounded-lg bg-gradient-to-bl from-indigo-900 to-blue-700 ">
          <i className="bi bi-linkedin "></i>
        </button>
        <button className="h-full  hover:text-gray-400 rounded-lg bg-gradient-to-tr to-violet-600 from-indigo-800">
          <i className="bi bi-github "></i>
        </button>
        <button className="h-full  hover:text-gray-400 rounded-lg bg-gradient-to-tl to-emerald-700 from-emerald-900">
          <i className="bi bi-envelope-at-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Contact;
