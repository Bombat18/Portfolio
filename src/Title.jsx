import React, { useEffect } from 'react';

const Title = () => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                document.title = "Projects | Portfolio Jigar Sable";
                document.getElementById("favicon").setAttribute("href", "/favi/favicon.png");
            } else {
                document.title = "Come Back To Portfolio";
                document.getElementById("favicon").setAttribute("href", "/favi/favhand.png");
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

       
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

  
};

export default Title;
