import deluxe from "../images/Deluxe x.png";
import deluxe1 from "../images/Delueinfo - 4.jpg";
import deluxe2 from "../images/Deluxe logo.png";
import deluxe3 from "../images/Deluxeinfo - 3.jpg";

import jetoj from "../images/jetoj.jpg";
import jetoj1 from "../images/JETOJ (2).png";
import jetoj2 from "../images/JETOJ (3).png";
import jetoj3 from "../images/JETOJ (1).png";

import Slusalke from "../images/slusalke shop.jpg";
import slusalke1 from "../images/slusalke (1).png";
import slusalke2 from "../images/slusalke (2).png";
import slusalke3 from "../images/slusalke (3).png";

import rsmpalvelut from "../images/rsmpalvelut.jpg";
import rsmpalvelut1 from "../images/rsmpalvelut (1).png";
import rsmpalvelut2 from "../images/rsmpalvelut (2).png";
import rsmpalvelut3 from "../images/rsmpalvelut (3).png";

import DullajCleaning from "../images/Dullaj Cleaning.jpg";
import DullajCleaning1 from "../images/Dullaj Cleaning (2).png";
import DullajCleaning2 from "../images/Dullaj Cleaning (3).jpg";
import DullajCleaning3 from "../images/Dullaj Cleaning (4).png";

export const Detalis = [
  {
    title: "Dullaj Cleaning",
    thumbnail: DullajCleaning,
    describe: {
      year: "2022",
      role: "Designer, Developer",
      web: "https://dullaj-cleaning.de/",
    },
    images: [DullajCleaning1, DullajCleaning2, DullajCleaning3],
    path: "dullajcleaning",
    nextProject: "rsmpalvelut",
    previousProject: "slusalke",
  },
  {
    title: "rsmpalvelut",
    thumbnail: rsmpalvelut,
    describe: {
      year: "2022",
      role: "Designer, Developer",
      web: "https://rsmpalvelut.com",
    },
    images: [rsmpalvelut2, rsmpalvelut3, rsmpalvelut1],
    path: "rsmpalvelut",
    nextProject: "jetoj",
    previousProject: "dullajcleaning",
  },
  {
    title: "JETOJ",
    thumbnail: jetoj,
    describe: {
      year: "2022",
      role: "Designer, Developer",
      web: "https://jetoj.eu/",
    },
    images: [jetoj1, jetoj2, jetoj3],
    path: "jetoj",
    nextProject: "deluxe",
    previousProject: "rsmpalvelut",
  },
  {
    title: "DELUXE",
    thumbnail: deluxe,
    describe: {
      year: "2021",
      role: "Designer, Developer",
      web: "https://www.deluxeinfo.ch/",
    },
    images: [deluxe1, deluxe2, deluxe3],
    path: "deluxe",
    nextProject: "slusalke",
    previousProject: "jetoj",
  },
  {
    title: "SLUSALKE",
    thumbnail: Slusalke,
    describe: {
      year: "2021",
      role: "Developer",
      web: "https://slusalkeshop.herokuapp.com/",
    },
    images: [slusalke2, slusalke1, slusalke3],
    path: "slusalke",
    nextProject: "jetoj",
    previousProject: "rsmpalvelut",
  },
];
