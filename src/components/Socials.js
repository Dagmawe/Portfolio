import React from "react";
import { ImGithub, ImLinkedin } from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li className=" hover:scale-150">
          <a
            href="https://www.linkedin.com/in/dagmawe-legesse-299435198/"
            target="https://www.linkedin.com/in/dagmawe-legesse-299435198/"
          >
            <ImLinkedin />
          </a>
        </li>
        <li className=" hover:scale-150">
          <a
            href="https://github.com/Dagmawe?tab=repositories"
            target="https://github.com/Dagmawe?tab=repositories"
          >
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
