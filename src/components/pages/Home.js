import React, {useState,useEffect} from 'react';
import '../../App.css';
import Addtodo from '../Addtodo';
import HeroSection from '../HeroSection';
import Todos from '../Todos';
import Footer from "../Footer";

function Home(){

    let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, settodos] = useState(initTodo);

  const addtodo = (title) => {
    console.log("i'm adding this todo", title);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const len=title.length;
    let i;
    let count=0;
    for(i=0;i<len;i++){
      if(title[i]=="/"){
        count++;
      }
      if(count==3){
        if(title[i+1]=='w'){
            i+=8;
          }
        break;
      }
    }
    
    let mystr="https://youtube.com/embed/"+title.substring(i+1,len)+"rel=0";

    const mytodo = {
      sno: sno,
      title: mystr,
    //   desc: desc,
    };
    settodos([...todos, mytodo]);
    console.log(mytodo);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);





    return (
        <>
        <HeroSection/>
        <Addtodo addtodo={addtodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer/>

        </>
    )
}
export default Home;