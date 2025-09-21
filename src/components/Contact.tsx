import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";


interface ContactFormInputs {
  name: string;
  email: string;
  message?: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [result, setResult] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setResult("Sending...");
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message || "");
    formData.append("access_key", "faf674dd-d1ad-4e7c-a4ab-75e7a99b76e5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resData = await response.json();

      if (resData.success) {
        Swal.fire({
          title: "Good job!",
          text: "Message sent successfully 🙂!",
          icon: "success",
          customClass: {
            confirmButton: styles.swalBtn,
          },
        });
        reset();
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setResult("");
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-animation`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 mt-1">{errors.name.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 mt-1">{errors.email.message}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              {...register("message")}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Submit
            {result && <p className="text-secondary mt-2">{result}</p>}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
