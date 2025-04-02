import React from "react";

import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MdEmail, MdPerson, MdMessage } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("Name", data.name);
      formData.append("Email", data.email);
      formData.append("Message", data.message);

      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwjLAyD3e14Api3qWnrixa3tCn0gsIgp-C_ZnzDRgx1ghOwwpLF6VRjywkgYnHu0PCW/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required for Google Apps Script
        }
      );

      // Show success message
      toast.success(
        "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        {
          duration: 5000,
          icon: "👋",
          style: {
            background: "linear-gradient(90deg, #00FFA3, #00A3FF)", // Gradient background
            color: "#FFFFFF", // Text color
            borderRadius: "10px", // Rounded corners
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
            padding: "15px", // Padding inside the box
          },
        }
      );

      // Reset form
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Oops! Something went wrong. Please email me directly at yadavstuntboy@gmail.com",
        {
          duration: 7000,
          icon: "😥",
          style: {
            background: "linear-gradient(90deg, #FF6F61, #FF3D00)", // Gradient background for error
            color: "#FFFFFF", // Text color
            borderRadius: "10px", // Rounded corners
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
            padding: "15px", // Padding inside the box
          },
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#111827] to-[#0A0F1C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.08)_0,transparent_100%)]" />
        <div className="stars-container absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="star absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animation: `floatUp ${Math.random() * 5 + 3}s linear infinite ${
                  Math.random() * 5
                }s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Existing Content */}
      <div className="relative py-16 px-4">
        {/* Decorative top separator */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-gray-900/50" />

        <div className="max-w-6xl mx-auto">
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
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Stats and Availability Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Availability Status */}

                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mr-2" />
                  <span className="text-green-400 text-sm font-medium  ">
                    Available for Work
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-gray-400 text-sm mb-1">
                      Response Time
                    </h4>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                    <p className="text-white font-medium">Lucknow, India</p>
                  </div>
                </div>

                {/* Preferred Contact Methods */}
                <div className="space-y-3">
                  <h4 className="text-white text-lg font-medium mb-4">
                    Preferred Contact Methods
                  </h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <MdEmail className="text-xl" />
                    <span className="animate-pulse">
                      yadavstuntboy@gmail.com
                    </span>
                  </a>
                  <div className="flex space-x-4 mt-6">
                    <a
                      href="https://github.com/mohityadavGit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <FaGithub className="text-2xl text-white" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/mohityadav1920/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <FaLinkedin className="text-2xl text-blue-500" />
                    </a>
                    <a
                      href="https://x.com/MohitYadav1920"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <FaTwitter className="text-2xl text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdPerson className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      {...register("name", {
                        required: "Please introduce yourself!",
                        minLength: {
                          value: 2,
                          message: "Name should be at least 2 characters long",
                        },
                      })}
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-300 placeholder-gray-500 hover:border-blue-500/50 transition-all duration-300"
                    />
                    {errors.name && (
                      <ErrorMessage>{errors.name.message}</ErrorMessage>
                    )}
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdEmail className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <input
                      type="email"
                      {...register("email", {
                        required: "How can I reach you back?",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-300 placeholder-gray-500 hover:border-blue-500/50 transition-all duration-300"
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                  </div>

                  <div className="relative group">
                    <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                      <MdMessage className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      {...register("message", {
                        required: "Don't forget to write your message!",
                        minLength: {
                          value: 10,
                          message:
                            "Please share a bit more detail (at least 10 characters)",
                        },
                      })}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-300 placeholder-gray-500 hover:border-blue-500/50 transition-all duration-300"
                    ></textarea>
                    {errors.message && (
                      <ErrorMessage>{errors.message.message}</ErrorMessage>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-gray-900/50" />
      </div>
    </div>
  );
}

export default Contact;
