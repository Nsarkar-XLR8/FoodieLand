import { useState } from "react";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });
  const [status, setStatus] = useState("");


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/auth/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }



  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <section className="w-full max-w-lg bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6">
        <header className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-100">
            Contact Me For Business Purposes
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Fill out the form below and I’ll get back to you soon.
          </p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
              placeholder="Your full name"
              className="mt-2 w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInput}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject} onChange={handleInput}
              placeholder="Subject of your message"
              className="mt-2 w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message} onChange={handleInput}
              rows="4"
              placeholder="Write your message here..."
              className="mt-2 w-full rounded-md bg-gray-700 border border-gray-600 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md px-4 py-2 font-semibold bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-colors"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-center">{status}</p>}
      </section>
    </main>
  );
};

export default Contact;
