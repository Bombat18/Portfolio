import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show or hide the button based on scroll position
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Smooth scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} style={buttonStyle}>
        <i
          className="fa-sharp fa-solid fa-chevron-up fa-shake"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        ></i>
      </button>
    )
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "30px",
  right: "20px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "10px",
  cursor: "pointer",
  height: "40px", // Adjust height for better visibility
  width: "40px", // Adjust width for better visibility
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "2000",
};

export default ScrollToTop;
