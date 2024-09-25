import React, { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Ensure the Tawk_API is initialized
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Check if the Tawk.to script is already loaded
    if (!document.querySelector("script[src='https://embed.tawk.to/66f3d65fe5982d6c7bb3fd9a/1i8k7qq6v']")) {
      // Create the script element
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/66f3d65fe5982d6c7bb3fd9a/1i8k7qq6v';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      // Insert the script before the first script tag in the document
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    }
  }, []); // Empty dependency array to run only once

  return null; // No UI elements needed for the chat widget
};

export default LiveChat;
