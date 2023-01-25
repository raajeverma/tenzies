

export default function Die(props){

    let dieFace;
    switch(props.value){
        case 1:
            dieFace= "one"
            break;
        case 2:
            dieFace="two"
            break;
        case 3:
            dieFace= "three"
            break;
        case 4:
            dieFace="four"
            break;
        case 5:
            dieFace= "five"
            break;
        case 6:
            dieFace="six"
            break;
    }
console.log(props.value)
    const bgColor={
         backgroundColor: props.isHeld?  "rgb(98 219 251)" : "white",
         color: props.isHeld && "white"
    }
    return(
        <div className="die-face" style={bgColor} onClick={props.holdDice}>
            <i className={`fa-solid fa-dice-${dieFace} fa-4x`}></i>
        </div>
    )
}