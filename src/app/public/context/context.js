"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { categoryApi } from "@/app/public/utils/constant";

const LinkMenuContext = createContext();

export const LinkMenuProvider = ({ children }) => {
  const [linkMenu, setLinkMenu] = useState([]);

  useEffect(() => {
    // Fetch linkMenu on initial load
    axios
      .get(categoryApi)
      .then((res) => setLinkMenu(res.data.data || []))
      .catch((error) => console.error("Error fetching linkMenu:", error));
  }, []);

  return (
    <LinkMenuContext.Provider value={{ linkMenu }}>
      {children}
    </LinkMenuContext.Provider>
  );
};

export const useLinkMenu = () => useContext(LinkMenuContext);
