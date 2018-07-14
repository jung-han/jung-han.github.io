import toast from '../public/static/images/toast.png';
import inha from '../public/static/images/inha.png';
import ctp from '../public/static/images/ctp.png';
import intern from '../public/static/images/intern.jpeg';
import medium from '../public/static/images/medium.svg';

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100005573837145&ref=bookmarks",
  instagram: "https://www.instagram.com/hann0ng/",
  medium: "https://medium.com/@junghan_61455",
  linkedin: "https://www.linkedin.com/in/jung-han-819501125",
  github: "https://github.com/jung-han"
};

export const projectInfo = [
  {
    title: "🐶 Current Projects",
    summary: [
      "I work on TOAST FILE with FE Development Lab at NHN Entertainment.",
      "I am interested in OpenSource and JavaScript."
    ],
    image: toast
  },
  {
    title: "🐱 Education",
    summary: [
      "Transfer to Department of Computer Science in Inha Univ.(2013.02)",
      "Graduate in Computer Science in Inha Univ.(2013~2018)"
    ],
    image: inha
  },
  {
    title: "🐰 Internship",
    summary: [
      "1. Network lab Intern. (Reasearch on SDN, OpenDayLight)",
      "2. Getcha FE development Intern. (HTML / CSS / JS / jQuery / JSP)",
      "3. TMON FE Intern. (React.js / Redux)"
    ],
    image: intern
  },
  {
    title: "🐷 Club",
    summary: [
      "1. Inha Univ. CTP Algorithm Study Club Activities(2013~2017)",
      "2. Inha Univ. Likelion Web Development Club Activities(2017.03 ~ 2017.12)"
    ],
    image: ctp
  },
  {
    title: "🐵 Blog",
    summary: [
      "I'm practicing studying and writing. I also have a record of the books I have read and the seminars I participated in."
    ],
    image: medium
  }
];
