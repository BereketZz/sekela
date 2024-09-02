/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/ashu.jpg";
import Stream from "../assets/images/Portfolio/pc.jpg";
import Freelance from "../assets/images/Portfolio/sms.jpg";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import HRD from "../assets/images/TeamMembers/HRD.png";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.png";
import Backend1 from "../assets/images/TeamMembers/Backend1.png";
import Mobile2 from "../assets/images/TeamMembers/Mobile2.png";
import UIUX1 from "../assets/images/TeamMembers/UIUX1.png";

export const Services = [
  {
    title: "Web Development",
    imageUrl: Web,
    animation: "left",
  },
  {
    title: "Mobile Development",
    imageUrl: Mobile,
    animation: "up",
  },
  {
    title: "Digital Marketing",
    imageUrl: UIUX,
    animation: "right",
  },
];

export const Portfolios = [
  {
    id: "asd1293uasdads1",
    title: "VolunteerLink",
    imageUrl: Recruiting,
    type: "Website",
    dis: "Web Apps",
    responsibility: ["Website", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15164950-Recruiting-app",
    detail:
      "VolunteerLink is an online platform designed to connect volunteers with organizations efficiently. It aims to bridge the gap between eager volunteers and organizations in need of their skills.",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Pc Registration System",
    imageUrl: Stream,
    type: "Mobile Apps",
    dis: "Mobile & Web Apps",
    responsibility: ["Mobile Development", "UI/UX Design", "Website"],
    credit: "https://dribbble.com/shots/15276430-Stream",
    detail:
      "The PRMS for DBU project was developed to seamlessly protect personal computers from theft. This system is designed for the university community to streamline PC registration and management. It incorporates features such as barcode and QR code generation, along with PC owner identification.",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Abune Gorgorious School Management",
    imageUrl: Freelance,
    type: "Mobile Apps",

    dis: "Mobile & Web  Apps",
    responsibility: ["Mobile Development", "UI/UX Design", "Website"],
    credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
    detail:
      "Abune Gorgorios School Management System is a comprehensive and user-friendly platform designed to streamline and enhance the management and administration of educational institutions. This system provides a range of features to facilitate efficient communication, data management, and academic operations within the school.",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
export const Testimonials = [
  {
    id: 1,
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Racxstudio, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Racxstudio.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Racxstudio is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: "CEO & Full Stack Developer",
    position: "Back-end Developer",
    imageUrl: Backend1,
  },
  {
    name: "Bereket Zewde",
    position: "Full Stack Web Developer",
    imageUrl: Frontend1,
  },
  {
    name: "Tsehaynesh Biruh",
    position: "Social Media Marketer",
    imageUrl: HRD,
  },

  {
    name: "Belay Birhane",
    position: "Mobile App & Backend Developer",
    imageUrl: Mobile2,
  },

  {
    name: "Ashenafi Debela",
    position: "UI/UX & Frontend Developer",
    imageUrl: UIUX1,
  },
];
