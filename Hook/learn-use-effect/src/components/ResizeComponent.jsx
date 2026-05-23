import React, {useState, useEffect} from "react";

function ResizeComponent(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handelResize = () => setWindowWidth(window.innerWidth);
        console.log("Event Listener Added");
        window.addEventListener('resize', handelResize);

        return () => {
            console.log("Event Listener Removed");
            window.removeEventListener('resize', handelResize);
        };
    }, []);

    return(
        <div>
            <h1>Window width:{windowWidth}px</h1>
        </div>
    );
}
export default ResizeComponent;