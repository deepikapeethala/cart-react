// import Btn, { f1 , f2 } from "./Button";

// function App() {
//   return <Btn/>;
// }
// export default App;
//...................................................................
// import ButtonConatiner from "./ButtonConatiner";
// function App(){
//   return <ButtonConatiner/>;
// // }
// export default App;
//..........................................................................
import Header from "./Header";
import Scoreboard from "./Scoreboard";
import Revealer from "./Revealer";
import Input from "./Input";
import SuggestionBox from "./SuggestionBox";
 function App(){
  return (
    <div>
      <Header/>
      <Scoreboard/>
      <main>
      <Revealer/>
      <Input/>
      <SuggestionBox/>
      </main> 
    </div>
  )
}
 export default App;


