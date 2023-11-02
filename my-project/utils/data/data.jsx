import cal from "../../src/assets/newimages/calendar.svg";
import { MdArrowDropDown } from "react-icons/md";
import development from "../../src/assets/newimages/developer.png";
import art from "../../src/assets/newimages/arthm.png";
import graphic from "../../src/assets/jpegimages/graphic.jpg";
import mobile from "../../src/assets/jpegimages/mobilesd.avif";
import { BsArrowRight } from "react-icons/bs";
import read from "../../src/assets/fearure/read.svg";
import certified from "../../src/assets/fearure/certified.svg";
import video from "../../src/assets/fearure/video.svg";
import learner from "../../src/assets/fearure/learner.svg";
import light from "../../src/assets/portfolio/light.png";
import star from "../../src/assets/portfolio/star.png";
import expert from "../../src/assets/portfolio/expert.png";
import client1 from "../../src/assets/portfolio/client.avif";
import client2 from "../../src/assets/portfolio/client2.avif";
import { AiFillCaretRight, AiOutlineLeft } from "react-icons/ai";
import ethicalon from'../../src/assets/courses/ethicalon.webp'
import Penetration from'../../src/assets/courses/penetration.webp'
import pythonoffline from'../../src/assets/courses/pythonoffline.webp'
import weoffline from'../../src/assets/courses/weoffline.webp'
import androindoffline from'../../src/assets/courses/androindoffline.webp'
import datascienceoffline from'../../src/assets/courses/data-science.webp'
import contentwriting from'../../src/assets/courses/content-writing.webp'
import Mernstack from'../../src/assets/courses/best-mern.webp'
import digitalMarketing from'../../src/assets/courses/dm-offline.webp'
import pythononline from'../../src/assets/courses/python.webp'
import webdevelopment from'../../src/assets/courses/web-development.webp'
import Reactjs from'../../src/assets/courses/reactjs.jpg'
import pythonSelf from'../../src/assets/courses/python.webp'
import frontend from'../../src/assets/courses/frontend-self.png'



export const Header = [
  { name: "Home", icon: <MdArrowDropDown /> },
  {
    name: "Courses",
    icon: <MdArrowDropDown />,
    children: [
      { name: "Web Development", icon: <MdArrowDropDown /> },
      { name: "Microsoft Excel", icon: <MdArrowDropDown /> },
      { name: "Basic Computer", icon: <MdArrowDropDown /> },
    ],
  },
  { name: "Team", icon: <MdArrowDropDown /> },
  { name: "Pages", icon: <MdArrowDropDown /> },
  { name: "Blog", icon: <MdArrowDropDown /> },
  { name: "Contact" },
];

export const PopularCategory = [
  {
    image: development,
    title: [
      { title: "Development", course: "27 Courses", icon: <BsArrowRight /> },
    ],
  },
  {
    image: graphic,
    title: [
      { title: "Graphic Design", course: "5 Courses", icon: <BsArrowRight /> },
    ],
  },
  {
    image: mobile,
    title: [
      {
        title: "Mobile Application",
        course: "6 Courses",
        icon: <BsArrowRight />,
      },
    ],
  },
  {
    image: art,
    title: [
      {
        title: "Art & Humanities",
        course: "4 Courses",
        icon: <BsArrowRight />,
      },
    ],
  },
];

export const Checkout = [
  {
    title: "Convenient Practice",
    image: read,
    para: "The most convenient way to lead your life is to live every moment as your last. You will find it amazingly convenient",
    quote: "Read More",
    icon: <BsArrowRight />,
  },
  {
    title: "Certified Educators",
    image: certified,
    para: "The most convenient way to lead your life is to live every moment as your last. You will find it amazingly convenient",
    quote: "Read More",
    icon: <BsArrowRight />,
  },
  {
    title: "Video Lecture",
    image: video,
    para: "The most convenient way to lead your life is to live every moment as your last. You will find it amazingly convenient",
    quote: "Read More",
    icon: <BsArrowRight />,
  },
  {
    title: "Active Learners",
    image: learner,
    para: "The most convenient way to lead your life is to live every moment as your last. You will find it amazingly convenient",
    quote: "Read More",
    icon: <BsArrowRight />,
  },
];

export const footer = [
  {
    image: light,
    review: "31 K +",
    para: "learners Enrolled in Patel Institute",
  },
  { image: star, review: "20", para: "Award & Certificate Received" },
  {
    image: expert,
    review: "12 +",
    para: "Qualified Teachers And Language Experts",
  },
];

export const clients = [
  {
    blueline:
      "Patel Computer Institute specializes in custom-tailored software solutions & Computer Technology.",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum autem hic quo placeat eligendi dolore velit veritatis in doloremque temporibus?",
    image: client1,
    name: "Patel Sir",
    character: "CEO, DataSoft",
    star: [1, 2, 3, 4],
  },
  {
    blueline:
      "Patel Computer Institute specializes in custom-tailored software solutions & Computer Technology.",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum autem hic quo placeat eligendi dolore velit veritatis in doloremque temporibus?",
    image: client1,
    name: "Patel Sir",
    character: "CEO, DataSoft",
    star: [1, 2, 3, 4],
  },
  {
    blueline:
      "Patel Computer Institute specializes in custom-tailored software solutions & Computer Technology.",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum autem hic quo placeat eligendi dolore velit veritatis in doloremque temporibus?",
    image: client2,
    name: "Patel Sir",
    character: "CEO, DataSoft",
    star: [1, 2, 3, 4],
  },
  {
    blueline:
      "Patel Computer Institute specializes in custom-tailored software solutions & Computer Technology.",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum autem hic quo placeat eligendi dolore velit veritatis in doloremque temporibus?",
    image: client1,
    name: "Patel Sir",
    character: "CEO, DataSoft",
    star: [1, 2, 3, 4],
  },
];

export const blogs = [
  {
    image: development,
    iconc: cal,
    title: "New Features Enhance Virtual Teaching & Learning",
    btnname: "Read More",
    arrow: <BsArrowRight />,
    claass: "first",
  },
  {
    image: graphic,
    iconc: cal,
    title: "Our Business Thrives TO Contribute Global",
    btnname: "Read More",
    arrow: <BsArrowRight />,
    claass: "second",
  },
  {
    image: mobile,
    iconc: cal,
    title: "New Features Enhance Virtual Teaching & Learning",
    btnname: "Read More",
    arrow: <BsArrowRight />,
    claass: "third",
  },
];
// export const specialist = [
//   {
//     image: first,
//     name: "Elias Janifer",
//     work: "Founder & CEO",
//   },
//   {
//     image: second,
//     name: "Camila Luna",
//     work: "Managing Director",
//   },
//   {
//     image: third,
//     name: "Anthony Jeferson",
//     work: "Assistant Manager",
//   },
//   {
//     image: fourth,
//     name: "Anthony Jsia",
//     work: "Manager",
//   },
// ];
export const user_datas = [
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
  {
    name: "shekhar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3N_G8r1d_oOfLZgGJ4TFG2ZUfS1jPhV3XB0idS9Twmycg9JNWkrtuZWYfHKrgvkir8E&usqp=CAU",
    gmail: "metreshekhar249@gmail.com",
  },
];

export const carousel = [
  {
    content: "",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
  },
  {
    content: "",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
  },
  {
    content: "",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
  },
  {
    content: "",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
  },
  {
    content: "",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
  },
];

export const courseTtile = [
  {
    image: "https://www.wscubetech.com/images/online-live-training.webp",
    header: "Classroom/Offline Courses",
    info: "Rigourous Offline training in fully-digitized and distraction-free classrooms at our skill centers in jodhpur and jaipur.",
    button: "GET STARTED",
    icon: <BsArrowRight />,
  },
  {
    image: "https://www.wscubetech.com/images/self-placed.webp",
    header: "Self-paced Courses",
    info: "Pre-recorded self-paced courses curated by industry experts. The affordable learing experience with professional with certfication.",
    button: "GET STARTED",
    icon: <AiOutlineLeft />,
  },
];

export const TitleCOurse = {
  offline: [
    {
      image: ethicalon,
      header2: "Online Ethical Courses In Bidar",
      paragraph:
        "To Equip you with latest hacking methodologies,tools,advanced techniques,and skills required to become a pro on ethical hacking.",
      li1: "60 days Training",
      li2: "14k+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: Penetration,
      header2: "Penetration Testing Course",
      paragraph:
        "Learn Penetration testing of android,web apps,networks,along with hands-on premium tools,methodologies,and much more.",
      li1: "4 Months Training",
      li2: "21k+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: pythonoffline,
      header2: "Python programming Course",
      paragraph:
        "Worlds #1 programming language that helps you build career in development,machine learning,data science,and more.",
      li1: "45 days Training",
      li2: "28k+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: weoffline,
      header2: "Web Development Course",
      paragraph:
        "Learn HTML,CSS,Javascript,PHP,MYSQL,Bootstrap,Angular,React,Api Development,WordPress theme development and more.",
      li1: "4 Months Training",
      li2: "28k+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: androindoffline,
      header2: "Android APp Development Course",
      paragraph:
        "Build Your Career in Mobile app development by learning the right skills from experts,get certified,and work on real projects.",
      li1: "4 Months Training",
      li2: "23k+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: datascienceoffline,
      header2: "Data Science Course",
      paragraph:
        "The Comprehensive online data science training with python, machine learning,deep Learning,Ai and Data Analysts.",
      li1: "6 Months Training",
      li2: "400+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: contentwriting,
      header2: "COntent writing Course",
      paragraph:
        "Become a highly-skilled & top-notch content writer to monetize your skills,start freelancing,blogging,or full-time jobs.",
      li1: "45 days Training",
      li2: "500+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: Mernstack,
      header2: "Best Mern Stack Course",
      paragraph:
        "MERN Stack is a comprehensive of mongodb,express,react and node js all of which are based on Javascript.",
      li1: "Within a 4 Mont Training",
      li2: "50+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
  ],
  online: [
    {
      image: digitalMarketing,
      header2: "Digital Marketing Course",
      paragraph:
        "The best digital marketing course in jodhpur with intensive clasroom training,certification and job/internship opprtunities",
      li1: "4 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: pythononline,
      header2: "Python training",
      paragraph:
        "Learn python in Bidar with most advanced curriculam practical tranining,real projects,experts trainers,and more.",
      li1: "45 days Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: webdevelopment,
      header2: "Full stack web development with python",
      paragraph:
        "Learn how to build static and dynamic websites (both front-end and back-end and build career as a web developer) .",
      li1: "4 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: Reactjs,
      header2: "ReactJs Training",
      paragraph:
        "Become a certified React js developer within a feew weeks by learning ReactJS. (the popular javascript library)",
      li1: "2.5 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: frontend,
      header2: "Graphic Design  Course",
      paragraph:
        "Become a next-level graphic designer by mastering adobe photoshop,illustrator,InDesign,as well as CoreIDRAW.",
      li1: "6 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: webdevelopment,
      header2: "PHP Course",
      paragraph:
        "Build your career in the field of web development by learning php programming with Pate Institute.",
      li1: "60 days Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: weoffline,
      header2: "Booststrap Course",
      paragraph:
        "You can help with python backend and with frontend Boostrap. Booststrap is one of themost popular front-end web degvelopment libraries.",
      li1: "30 days Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    // {
    //   image: "",
    //   header2: "Java Course",
    //   paragraph:
    //     "Learn the fundamanetal as well as advanced concept s of Java in depth.",
    //   li1: "75 days Training",
    //   li2: "50+ Learners trained",
    //   li3: "Professional Certification",
    //   button: "Learn More",
    //   icon: <BsArrowRight />,
    // },
  ],
  self: [
    {
      image: pythonSelf,
      header2: "Mastery in Python Programming",
      li1: "25+ Hours Training",
      li3: "Certification",
      discountPrice: 6999,
      price: 799,
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: frontend,
      header2: "Complete Front-end Web Development Course",
      paragraph: "Learn HTML,CSS,Javascript,JQuery,Bootstrap.",
      li1: "45 days Training",
      li3: "Certification",
      discountPrice: 99999,
      price: 1999,
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: "",
      header2: "Mastery in C Programming",
      paragraph:
        "Learn how to build static and dynamic websites (both front-end and back-end and build career as a web developer) .",
      li1: "4 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: "",
      header2: "ReactJs Training",
      paragraph:
        "Become a certified React js developer within a feew weeks by learning ReactJS. (the popular javascript library)",
      li1: "2.5 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: "",
      header2: "Graphic Design  Course",
      paragraph:
        "Become a next-level graphic designer by mastering adobe photoshop,illustrator,InDesign,as well as CoreIDRAW.",
      li1: "6 Months Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: "",
      header2: "PHP Course",
      paragraph:
        "Build your career in the field of web development by learning php programming with Pate Institute.",
      li1: "60 days Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: "",
      header2: "Booststrap Course",
      paragraph:
        "You can help with python backend and with frontend Boostrap. Booststrap is one of themost popular front-end web degvelopment libraries.",
      li1: "30 days Training",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
    {
      image: "",
      header2: "Java Course",
      paragraph:
        "Learn the fundamanetal as well as advanced concept s of Java in depth.",
      li1: "75 days Training",
      li2: "50+ Learners trained",
      li3: "Professional Certification",
      button: "Learn More",
      icon: <BsArrowRight />,
    },
  ],
};
