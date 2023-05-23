import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTiktok,
  FaYoutubeSquare,
} from "react-icons/fa";

interface AddtionalServices {}
interface SocialIcons {
  SocialIcon: React.ElementType;
  name: string;
}

const AddtionalServices: React.FC<AddtionalServices> = () => {
  return (
    <div className="grid grid-cols-4 gap-4 text-white-">
      <div className="space-y-3 flex flex-col">
        <p className="text-white">Support</p>
        <p className="text-sm text-white hover:underline cursor-pointer">Need any help?</p>
      </div>
      <div className="space-y-3 flex flex-col">
        <p className="text-white">Contacts</p>
        <p className="text- text-white">USA</p>
        <p className="text-sm text-white">
          1309 Beacon Street, Suite 300, Brookline, MA, 02446
        </p>
      </div>

      <div className="space-y-3 flex flex-col">
        <p className="text-white">Preply social</p>
        <div className="text-white flex flex-col gap-2">
          <SocialIcons SocialIcon={FaFacebookSquare} name="Facebook" />
          <SocialIcons SocialIcon={FaInstagramSquare} name="Instagram" />
          <SocialIcons SocialIcon={FaYoutubeSquare} name="Youtube" />
          <SocialIcons SocialIcon={FaLinkedin} name="LinkedIn" />
          <SocialIcons SocialIcon={FaTiktok} name="Tiktok" />
        </div>
      </div>

      <div className="space-y-3 flex flex-col">
      <p className="text-white">Apps</p>
        <Image src="https://static.preply.com/static/ssr/_next/static/images/app_store_badge_en-79b8b5a578eb1f4d7bf116fad64f53e6.svg" alt="app_store_logo" width={110} height={110}/>
        <Image src="https://static.preply.com/static/ssr/_next/static/images/google_play_badge_en-99874120ff7b66206b0188ae0e2801ac.png" alt="play_store_logo" width={110} height={110}/>
         
      </div>
    </div>
  );
};

const SocialIcons: React.FC<SocialIcons> = ({ SocialIcon, name }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer hover:underline">
      <SocialIcon className="text-white w-4 h-4" />
      <p className="text-white text-sm">{name}</p>
    </div>
  );
};

export default AddtionalServices;
