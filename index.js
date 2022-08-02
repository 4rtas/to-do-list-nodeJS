let arr = [
  {
    id: 123,
    task: "buy milk",
  },
  {
    id: 321,
    task: "buy meat",
  },
  {
    id: 234,
    task: "buy eggs",
  },
  {
    id: 543,
    task: "clean my room",
  },
];

document.getElementById("addBtn").addEventListener("click", () => {
  const inputValue = document.getElementById("taskInput").value;
  const form = document.getElementById("taskInput");

  //tikrinam ar tuščias input stringas//
  if (!inputValue.trim()) {
    alert("You must write something!");
    //trina parašyta formą//
    form.value = "";
    return;
  }
  console.log("text");

  const newTask = {
    id: new Date().getTime(),
    task: inputValue,
  };

  form.value = "";

  arr.unshift(newTask);
  drawTaskList();
});

const drawTaskList = () => {
  const taskLists = document.getElementById("tasksList");
  taskLists.textContent = null;

  arr.forEach((value, ind) => {
    //creating Elements
    const container = document.createElement("div");
    const myLi = document.createElement("li");
    const myInput = document.createElement("input");
    const myLabel = document.createElement("label");

    //adding styles
    myLi.className = "list-group-item";
    myInput.className = "form-check-input me-1";
    myLabel.className = "form-check-label";

    //adding other attributes
    //input
    myInput.setAttribute("type", "checkbox");
    myInput.setAttribute("id", value.id);

    //label
    myLabel.setAttribute("for", value.id);
    myLabel.textContent = value.task;

    //append childs
    myLi.append(myInput, myLabel);

    taskLists.append(myLi);
  });
};

drawTaskList();
