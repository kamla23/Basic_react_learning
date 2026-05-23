import React, {useState} from "react";

function Toggle(){
    const [isToggle, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggle);
    }

    return(
        <button
            onClick={handleToggle}
            style={{backgroundColor: isToggle ? "green" : "red"}}
        >
            {isToggle ? "on" : "off"}
        </button>
    )
}
export default Toggle; 