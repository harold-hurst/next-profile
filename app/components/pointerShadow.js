'use client'

import { useState, useEffect } from "react";

export default function PointerShadow() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-shadow"
      style={{
        left: position.x - 300,
        top: position.y - 300,
      }}
    />
  )
}
