import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { MdEmail, MdPerson, MdMessage } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // ⭐ Optimized stars (no re-random on re-render)
  const stars = React.useMemo(
    () =>
      [...Array(80)].map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 5,
      })),
    []
  );

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("Name", data.name);
      formData.append("Email", data.email);
      formData.append("Message", data.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwjLAyD3e14Api3qWnrixa3tCn0gsIgp-C_ZnzDRgx1ghOwwpLF6VRjywkgYnHu0PCW/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      toast.success(
        "Thank you! Your message has been sent. I’ll get back to you soon 👋",
        {
          duration: 5000,
          style: {
            background: "linear-gradient(90deg, #00FFA3, #00A3FF)",
            color: "#fff",
            borderRadius: "10px",
          },
        }
      );

      reset();
      document.getElementById("name")?.focus();
    } catch (error) {
      toast.error(
        "Something went wrong. Please email me at yadavstuntboy@gmail.com 😥",
        {
          duration: 6000,
        }
      );
    }
  };

  const ErrorMessage = ({ children }) => (
    <span className="text-sm text-red-400 bg-red-500/10 px-3 py-1 rounded-md mt-1 inline-block">
      {children}
    </span>
  );

  return (
    <div id="contact" className="relative min-h-screen overflow-hidden">
      <Toaster position="top-right" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#0A0F1C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.08)_0,transparent_100%)]" />

        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-80"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `floatUp ${star.duration}s linear infinite ${star.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative py-20 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Open for collaborations, internships & full-time opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
          >
            <div className="flex items-center mb-6">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
              <span className="text-green-400 text-sm font-medium">
                Available for Work
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Response Time</p>
                <p className="text-white font-medium">Within 24 hours</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Lucknow, India</p>
              </div>
            </div>

            <a
              href="mailto:yadavstuntboy@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition mb-6"
            >
              <MdEmail className="text-xl" />
              yadavstuntboy@gmail.com
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/mohityadavGit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900/50 rounded-lg hover:scale-110 transition"
              >
                <FaGithub className="text-2xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohityadav1920/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900/50 rounded-lg hover:scale-110 transition"
              >
                <FaLinkedin className="text-2xl text-blue-500" />
              </a>
              <a
                href="https://x.com/MohitYadav1920"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900/50 rounded-lg hover:scale-110 transition"
              >
                <FaTwitter className="text-2xl text-blue-400" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
          >
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300"
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </div>

              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300"
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </div>

              <div>
                <textarea
                  rows="4"
                  {...register("message", {
                    required: "Message is required",
                    minLength: 10,
                  })}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300"
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:scale-[1.02] transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
