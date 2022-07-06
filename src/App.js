import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos}  from "./MyComponents/Todos";

function App() {
  const onDelete = ()=>{
    console.log("Deleted")
  }
  let todos = [
    {
      sno : 1,
      title : " go to shop",
      desc : "bring paneer"
    },
    {
      sno : 2,
      title : " read aloud",
      desc : "will strenghten vocal muscles"
    },
    {
      sno : 3,
      title : " do flip",
      desc : "calisthenics"
    }

  ]
  return (
    <>
      <Header title = "My Todos List" searchbar = {true}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
