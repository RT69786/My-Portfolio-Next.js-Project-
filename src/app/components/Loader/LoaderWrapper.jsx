"use client";
import { useEffect, useState } from "react";
import LoaderName from "./LoaderName";

export default function LoaderWrapper() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // stay visible
    const hold = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // remove from DOM AFTER fade
    const remove = setTimeout(() => {
      setShowLoader(false);
    }, 2600);

    return () => {
      clearTimeout(hold);
      clearTimeout(remove);
    };
  }, []);

  if (!showLoader) return null;

  return <LoaderName isVisible={!fadeOut} />;
}
