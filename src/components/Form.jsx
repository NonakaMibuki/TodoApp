import { useState } from "react";

const Form = ({todo, setTodo}) => {

  const [inputText, setInputText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    setTodo([...todo, {
        id: Math.floor(Math.random() * 1e5),
        text: inputText,
        completed: false,
    }])

    setInputText("");
  }


  return (
    <div className="todoForm">
        <form onSubmit={addTodo}>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
            <button>追加</button>
        </form>
    </div>
  )
}

export default Form;