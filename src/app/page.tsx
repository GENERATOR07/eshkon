"use client";
import { useAppDispatch } from "@/store";
import styles from "./page.module.css";

import { useEffect } from "react";
import { setLoaded } from "@/store/slice";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoaded());
  }, []);
  return <main className={styles.main}>home</main>;
}
