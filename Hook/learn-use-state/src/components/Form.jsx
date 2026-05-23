import React , {useState} from  "react";
function Form(){
    const [InputValue, setInputValue] = useState(0);

    const handelChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
        <input type="text" value={InputValue} onChange={handelChange}/>
        <p>You typed:{InputValue}</p>
        </div>

    );
}
export default Form;