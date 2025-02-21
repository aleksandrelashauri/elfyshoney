import React from "react";
import ContactForm from "../components/body/mail/mail";
import Details from "../components/Details";
import Loyout from "../components/Loyout";

import { WrongUrl } from "./wrongUrl";

const routes = () => [
  {
    path: "/",
    element: <Loyout />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
  {
    path: "*",
    element: <WrongUrl />,
  },
];

export default routes;
