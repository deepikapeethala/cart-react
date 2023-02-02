export default function Quiz(props){
    let chosenOption=-1;
    function handleChange(e){
        console.log(e.target.value);
        chosenOption=e.target;

    }
    function onNext(){
        // guard clause
        if(chosenOption === -1){
        return alert("choose vaild option");
        }
        if (chosenOption == props.q.ans)
        props.increaseScore()
        // props.increaseScore console.log("correct")
        chosenOption=false
        props.changeQuiz();
    }
    return(
        <div className="wrapper">
            <div className="question">{props.q.question}</div>
            <div className="options">
             <div className="option">
                <input onChange={handleChange} type="radio" name="option" id="0" value="0"/>
                <label htmlFor="0">{props.q.option[0]}</label>
            </div>
            <div className="option">
                <input onChange={handleChange} type="radio"  name="option" id="1" value="1"/>
                <label htmlFor="1">{props.q.option[1]}</label>
            </div>
            <div className="option">
                <input onChange={handleChange} type="radio"  name="option" id="2" value="2"/>
                <label htmlFor="2">{props.q.option[2]}</label>
            </div>
        </div>
        <button onClick={onNext}>Next</button>
        </div>
    );
}