import Header from './Header';
import QuizStart from './QuizStart';
import Container from './Container';
import Quiz from './Quiz';
import Result from './Result';
import { useState } from 'react';
let questions=[
  {
    question:'Language that runs inside browser?',
    option:['java','css','Javascript'],
    ans:2,
  },
  {
    question:'which one is the markup language?',
    option:['html','c','javascript'],
    ans:3,
  },
  {
    question:'How will thigger the rerendder in react?',
    option:['jsx ','props',' none of the above'],
    ans:2,
  },
  {
    question:'choose correct option that applies to react?',
    option:['reclartive','declartive ','none the above'],
    ans:1,
  },
]

function App() {
  let [isStarted,setIsStarted]=useState(false);
 let [currentQuiz,setCurrentQuiz]=useState(0);
//useRef   is used to persist the value between re
 let score = useRef(0);
//  {current :0}
 function increseScore(){
  score.current+=1;

 }
 function changeQuiz(){
  setCurrentQuiz(currentQuiz+1);
 }
  return (
    <>
      <Header/>
      <Container >
        {isStarted?
        (currentQuiz<questions.length ? (<Quiz  increseScore={increseScore} changeQuiz={changeQuiz} q={questions[currentQuiz] }/>
        ) :<Result score={score.current}/> ): (<QuizStart setIsStarted={setIsStarted}/>)}
       {/* <Result/> */}
      </Container>

    </>
  );
}

export default App;
