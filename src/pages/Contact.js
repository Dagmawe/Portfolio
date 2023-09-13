import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import emailjs from "@emailjs/browser";
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
        // initial={{ opacity: 0, y: "100%" }}
        // animate={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0, y: "100%" }}
        // transition={transition1}
        className="section pt-10 flex flex-row gap-2  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      >
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="flex items-center justify-center w-max"
        >
          <div className="pb-20 flex flex-col w-full">
            <div>
              {" "}
              <h1 className="h1 drop-shadow-2xl">Contact Me</h1>
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={transition1}
          className="py-8 lg:py-16 px-4 mx-0 w-[700px] justify-end "
        >
          <form
            action="#"
            className="space-y-8"
            ref={form}
            onSubmit={sendEmail}
          >
            <label
              for="website-admin"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                name="user_name"
                type="text"
                id="name"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john"
              />
            </div>

            <label
              for="input-group-1"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                name="user_email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                name="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </motion.div>
      </motion.section>
    </>
  );
};

export default Contact;
