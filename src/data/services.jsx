import React from 'react';
import { FaServer } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { VscCode } from "react-icons/vsc";

export default [
  {
    title: "Front-end",
    icon: <MdWeb className="w-full h-full" />,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Back-end",
    icon: <FaServer className="w-full h-full" />,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Web Developement",
    icon: <VscCode className="w-full h-full" />,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
