function Contact() {
  return (
    <div className="bg-black flex h-full rounded-lg items-center justify-center">
      {/* Icons go here */}
      <div className="grid grid-cols-2 w-full h-full text-3xl md:text-5xl lg:text-7xl text-green-200 gap-6 ">
        <button className="focus:outline-none aspect-square hover:bg-green-900 rounded-lg bg-green-800 ">
          <i className="bi bi-instagram"></i>
        </button>
        <button className="focus:outline-none aspect-square hover:bg-green-900 rounded-lg bg-green-800">
          <i className="bi bi-linkedin "></i>
        </button>
        <button className="focus:outline-none aspect-square hover:bg-green-900 rounded-lg bg-green-800">
          <i className="bi bi-github "></i>
        </button>
        <button className="focus:outline-none aspect-square hover:bg-green-900 rounded-lg bg-green-800">
          <i className="bi bi-envelope-at-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Contact;
