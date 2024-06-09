"use client";
import { useAppDispatch } from "@/store";
import { setLoaded } from "@/store/slice";
import React, { useEffect } from "react";

export default function ABTestPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoaded());
  }, []);
  return <div>ab test page not from slug</div>;
}
