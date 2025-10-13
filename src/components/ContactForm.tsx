import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const schema = z.object({
  firstName: z.string().min(1, "First name is required!"),
  lastName: z.string().min(1, "Last name is required!"),
  email: z.email("Invalid email!").min(1, "Email is required!"),
  phoneNumber: z.string().min(1, "Phone number is required!"),
  message: z.string().min(1, "A messege is required"),
  termsConditions: z.literal(true, "The terms and policy must be accepted!"),
});

type FormFields = z.infer<typeof schema>

interface props {

}

export const ContactForm = ({ }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset } = useForm<FormFields>(
      {
        resolver: zodResolver(schema)
      },
    );

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    await toast.promise(
      // In a real case scenario the data will be sent to a server to be proccesed
      // axios.post(variables.endpoint, data, { headers: { "Content-Type": "application/json" } }),
      await new Promise(resolve => setTimeout(resolve, 4000)),
      {
        loading: "Sending...",
        success: "Form sent successfully!",
        error: "Something went wrong...",
      }
    ).then(() => reset());

  }
  return (
    <>
      <form
        className="max-w-md mx-auto my-auto bg-white shadow-lg rounded-2xl px-8 py-6 flex flex-col gap-2 md:gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold text-gray-800">Send Us a Message</h2>
        <p className="text-gray-500 text-sm">
          Please fill in the form below to get in touch with us.
        </p>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <div>

            <input
              type="text"
              placeholder="First name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("firstName")}
            />
            {errors.firstName && (<p className="text-red-500">{errors.firstName.message}</p>)}
          </div>
          <div>

            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("lastName")}
            />
            {errors.lastName && (<p className="text-red-500">{errors.lastName.message}</p>)}
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
          <div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("email")}
            />
            {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
          </div>
          <div>

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              {...register("phoneNumber")}
            />
            {errors.phoneNumber && (<p className="text-red-500">{errors.phoneNumber.message}</p>)}
          </div>
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("message")}
          ></textarea>
          {errors.message && (<p className="text-red-500">{errors.message.message}</p>)}
        </div>
        <div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="mt-1 accent-indigo-600"
              {...register("termsConditions")}
            />
            <span className="text-sm text-gray-600">
              I've read and agree with{" "}
              <a
                href="#"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >Terms of Service</a>
              {" "}and{" "}
              <a
                href="#"
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >Privacy Policy</a>.
            </span>
          </div>
          {errors.termsConditions && (<p className="text-red-500">{errors.termsConditions.message}</p>)}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-medium py-2 rounded-lg hover:bg-gray-800 transition disabled:cursor-not-allowed disabled:bg-gray-300"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </>
  )
} 