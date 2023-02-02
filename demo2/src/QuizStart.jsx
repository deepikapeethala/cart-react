export default function QuizStart(props){
    return(
        <>
        <div className="quizstart flexcenter"> 
        <p>Check your knowledge by attending the quiz ,give a try!</p>
        </div>
        <button  className="button" onClick={()=>props.setIsStarted(true)}>start</button>
        </>
    );
}