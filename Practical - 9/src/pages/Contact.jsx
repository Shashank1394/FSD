const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Name..."
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email..."
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Message..."
          rows="4"
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
export default Contact;
