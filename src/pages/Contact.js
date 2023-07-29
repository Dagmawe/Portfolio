import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
const Contact = () => {
  const [isAlert, setIsAlert] = useState(false);

  const handleButtonClick = () => {
    setIsAlert(true);

    setTimeout(() => {
      setIsAlert(false);
    }, 3000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ik951le",
        "template_4fwz5tj",
        form.current,
        "wxYujhOwAC8_6Uvym"
      )
      .then(
        (result) => {
          console.log(result.text, "textResult");
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          handleButtonClick();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={transition1}
        className="section pt-10 flex flex-row gap-2"
      >
        <div className="flex items-center justify-center w-max">
          <div className="pb-20 flex flex-col w-full">
            <div>
              {" "}
              <h1 className="h1 shadow-xl">Contact Me</h1>
            </div>
            <div className="flex flex-col w-full justify-center items-center pt-10">
              <div className="gap-2">
                <a
                  href="https://www.linkedin.com/in/dagmawe-legesse-299435198/"
                  target="https://www.linkedin.com/in/dagmawe-legesse-299435198/"
                >
                  <button
                    type="button"
                    class="text-white bg-[#2557D6] hover:scale-110 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
                  >
                    Connect on LinkedIn
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-brand-linkedin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                      <rect x="4" y="4" width="16" height="16" rx="2" />{" "}
                      <line x1="8" y1="11" x2="8" y2="16" />{" "}
                      <line x1="8" y1="8" x2="8" y2="8.01" />{" "}
                      <line x1="12" y1="16" x2="12" y2="11" />{" "}
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />{" "}
                    </svg>
                  </button>
                </a>
              </div>
              <div className="pt-5">
                <a
                  href="https://github.com/Dagmawe?tab=repositories"
                  target="https://github.com/Dagmawe?tab=repositories"
                >
                  <button
                    type="button"
                    class="text-gray-900  hover:scale-110 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                  >
                    Connect on Github
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{" "}
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-16 px-4 mx-0 w-[700px] justify-end ">
          <form
            action="#"
            className="space-y-8"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Name..."
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <div className="flex flex-row">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:scale-110"
              >
                Send message
              </button>
              {isAlert && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  className="flex w-full h-max justify-end mb-10 "
                >
                  <div class="flex w-96 shadow-lg scale-75 rounded-lg absolute ">
                    <div class="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-white fill-current"
                        viewBox="0 0 16 16"
                        width="20"
                        height="20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
                      <div>Message Sent</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
