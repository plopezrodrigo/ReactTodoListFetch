import React, {useState, useEffect } from "react";


const SubmitForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const change1 = (e) => {
    setInputValue(e.target.value);
  };

  const getList = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
    .then(resp => {
      return resp.json();
  })
  .then(data => {
      setTodos(data);
  })
  .catch(error => {
    console.log(error);
  });
	};

const updatetask = (item) => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr",{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(item)
  })
  .then(resp => {
    return resp.json();
})
.then(data => {
    console.log(data);
})

  
}

 const deleteItem = (index) => {
 let newTodos =  todos.filter((item, i) => {
  return i !== index;
 })
 setTodos(newTodos)
 updatetask(newTodos)
  };

  useEffect(() => {
		getList();
	}, []);

  return (
    <div className="form form-control ">
        <input
          className="text-black task-input"
          type="text"
          value={inputValue}
          onChange={change1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodos([...todos, {label: inputValue, done: false}]);
              setInputValue("");
              updatetask([...todos, {label: inputValue, done: false}])
            }
          }}
          placeholder="What needs to be done?"
        ></input>
      {
        <div className="list">
          <div className="">
            <ul className="list-group list-group-flush">
              {todos.map((itemvalue, index) => {
              return (
                <li className="text-black" key={index}>{itemvalue.label}
                  <button className="btn" >
                  <i className="far fa-trash-alt" onClick={() => deleteItem(index)}/>
                  </button>
                </li>
                );
              })}
            </ul>
          </div>
         
		  <div className="task-ammount text-muted">{todos.length} item left</div>
        </div>
      }
    </div>
  );
};

export default SubmitForm;

