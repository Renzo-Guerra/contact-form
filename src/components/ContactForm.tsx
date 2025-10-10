interface props {

}

export const ContactForm = ({ }: props) => {

  return (
    <>
      <form className="max-w-md mx-auto my-auto bg-white shadow-lg rounded-2xl px-8 py-6 flex flex-col gap-2 md:gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
        <p className="text-gray-500 text-sm">
          Please fill in the form below to get in touch with us.
        </p>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="termsAndPrivacy"
            className="mt-1 accent-indigo-600"
          />
          <span className="text-sm text-gray-600">
            I've read and agree with
            <a
              href="#"
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >Terms of Service</a>
            and
            <a
              href="#"
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >Privacy Policy</a>.
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </>
  )
} 