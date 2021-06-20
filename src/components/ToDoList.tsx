import React from "react";

const ToDoList = () => {
    const [value, setValue] = React.useState<string>('');
    const [toDoList, setToDoList] = React.useState<string[]>([]);

    const removeTodo = (index: number) => {
        let array = [...toDoList];
        array.splice(index, 1);
        setToDoList(array);
    }
    return (
        <div>
          <input type="text" value={value || ''} onChange={e => setValue(e.target.value)}/>
          <button onClick={() => {toDoList.push(value); setValue('')}}>추가</button>
          <div>
            {
              toDoList.map((item, index) => 
                <div className="todo">
                  {item}
                  <span onClick={removeTodo.bind(this, index)}>X</span>
                </div>
              )
            }
          </div>
        </div>
    )
}

export default ToDoList;