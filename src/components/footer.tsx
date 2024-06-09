"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Footer: React.FC = () => {
  const isLoaded = useSelector((state: RootState) => state.app.isLoaded);
  console.log(isLoaded);

  return <footer>{isLoaded && <p>The page has fully loaded.</p>}</footer>;
};

export default Footer;
