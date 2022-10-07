// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log ("Entering password...")
    }
    return (
        <input onChange={handleChange} type="password" />
    )

}

export default Keypad;