import React, { useEffect, useState } from 'react';

const Title = () => {
  const [title, setTitle] = useState("Projects | Portfolio Ramya");
  const [favicon, setFavicon] = useState("../src/assets/images/favicon.png");

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTitle("Projects | Portfolio Ramya");
        setFavicon("../src/assets/images/favicon.png");
      } else {
        setTitle("Come Back To Portfolio");
        setFavicon("../src/assets/images/favhand.png");
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Set initial title and favicon
    document.title = title;
    const faviconElement = document.getElementById("favicon");
    if (faviconElement) {
      faviconElement.href = favicon;
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [title, favicon]); // Re-run the effect when title or favicon changes

  useEffect(() => {
    // This effect runs whenever title or favicon state changes to update the document.
    document.title = title;
    const faviconElement = document.getElementById("favicon");
    if (faviconElement) {
      faviconElement.href = favicon;
    }
  }, [title, favicon]);

 
};

export default Title;
