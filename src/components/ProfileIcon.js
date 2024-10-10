import React, { useState, useEffect, useRef } from "react";
import "../assets/css/components/ProfileIcon.scss"; // Assuming your CSS file for styling

const ProfileIcon = () => {
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const iconRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the 3D-like tilt effect based on mouse position
  const getTransformStyle = () => {
    if (!iconRef.current) return {};

    const rect = iconRef.current.getBoundingClientRect();
    const iconCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };

    // Get the relative position of the mouse to the center of the icon
    const dx = mousePosition.x - iconCenter.x;
    const dy = mousePosition.y - iconCenter.y;

    // Scale factor to control the amount of tilt
    const tiltAmount = 0.05;

    // Calculate rotation angles
    const rotateX = dy * tiltAmount; // Vertical tilt (up and down)
    const rotateY = -dx * tiltAmount; // Horizontal tilt (left and right)

    return {
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out", // Smooth transition
    };
  };

  return (
    <div
      className="profile-icon animate"
      ref={iconRef}
      style={getTransformStyle()}
    >
      <img
        src="/static/media/profile.2f797833c455374725b45c0c872a7e67.svg" // Static path to your SVG file
        alt="Profile Icon"
        style={{
          width: "100px", // Adjust the width and height as per your needs
          height: "100px",
        }}
      />
    </div>
  );
};

export default ProfileIcon;
