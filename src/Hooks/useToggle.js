import { useState } from "react";

export default function useToggle() {
  const [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible((prev) => !prev);
  }

  return [isVisible, toggle];
}
