export default function Result(total,score){
    return(
        <div className="result">
            <div className="text">
                Thank you far attending the quiz!<br/>
                you Got<br/>
                <span>
                    {score}/{total}
                    </span>
            </div>
            <button onClick={() => reset()}>Retry</button>
        </div>
    );
      
}