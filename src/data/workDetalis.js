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
export const Detalis = [
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
  },
];
