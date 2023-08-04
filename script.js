const task = $(".input-box input");
const listContainer = $(".list-container ul");

function addTask() {
  if (task.val() === "") {
    alert("You must write a task!");
  } else {
    const li = $("<li>");
    li.text(task.val());
    listContainer.append(li);
    const span = $("<span>");
    span.html("\u00d7");
    li.append(span);
  }
  task.val("");
}

listContainer.on("click", (event) => {
  const target = $(event.target);

  if (target.is("li")) {
    target.toggleClass("checked");
    target.toggleClass("checkedEL");
  } else if (target.is("span")) {
    target.parent().remove();
  }
});

 task.on("keydown", (event) => {
   if (event.keyCode === 13) {
     addTask();
   }
 });