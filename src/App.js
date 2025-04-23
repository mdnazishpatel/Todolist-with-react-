import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { tabs } from './tabs';


function App() {
  let [todolist, settodolist] = useState([])
  let [activeTabs, setactiveTabs] = useState(0)
  let [activeContent, setactiveContent] = useState(tabs[0])
  let changeData=(index)=> {
setactiveTabs(index)
setactiveContent(tabs[index])
  }
  let saveTodoList = (event) => {

    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finalDOlist = [...todolist, toname]
      settodolist(finalDOlist)
    } else {
      alert("to do added already")
    }
    /// alert(toname)
    event.preventDefault();
  }
  let list = todolist.map((value, index) => {

    return (
      <ToDoItems value={value} key={index} indexNumbe={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    )
  })

  return (

   <div>
      <h1>TO-DO-LIST</h1>
      <form onSubmit={saveTodoList}>
        <input type='text' name='toname' /><button>SAVE</button>
      </form>
      <div className='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;
function ToDoItems({ value, indexNumbe, todolist, settodolist }) {
  let [status, setstatus] = useState(false)
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumbe)
    settodolist(finalData)
  }
  let checkStatus = () => {
    setstatus(!status)
  }
  return (
    <li className={(status) ? 'complete' : ''} onClick={checkStatus}> {indexNumbe + 1} {value} <span onClick={deleteRow}>&times;</span></li>
  )
}