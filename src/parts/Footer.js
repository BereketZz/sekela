import React from "react";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Contact</h1>
            <p className="text-lg text-gray-400 font-light">info@sekela.com</p>
            <p className="text-lg text-gray-400 font-light">0921154404 </p>
            <p className="text-lg text-gray-400 font-light">
              Addis Ababa, Ethiopia
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">Social</h1>
            <Button
              href="https://t.me/sekelatech"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Instagram
            </Button>
            <Button
              href="https://www.linkedin.com/company/104257822/admin/inbox?lipi=urn%3Ali%3Apage%3Aorganization_admin_admin_inbox_index%3B5af00602-6c90-418c-843c-5de8c1740d4a"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/Sekela-Tech-Solutions"
              type="link"
              target="_blank"
              className="flex text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              Github
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            2024© Sekela Tech Solutions. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
