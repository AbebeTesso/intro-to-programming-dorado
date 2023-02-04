const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
let mName = "Abebe Tesso";
copyright.innerHTML = `&#169; ${mName} ${thisYear}`;
footer.appendChild(copyright);
const skills = ["HTML", "CSS", "JavaScript"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.classList.add("S-List");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
///exercise 4.3
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  e.target.reset();
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `${name}<a href="mailto":${email}
      </a> <span>Wrote: ${message}</span>`;
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  // messageForm.reset();
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
});

/*  lesson-6.1 start here*/
/*accessing files */
function renderHTML(data) {
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");
  for (let i = 0; i < data.length; i++) {
    let project = document.createElement("li");
    project.innerHTML = `<a class="link-to-github" href="${data[i].html_url}"> ${data[i].name}</a> <p>${data[i].description}</p>`;

    projectList.appendChild(project);
  }
}
/*target_blank set up for a tags */
function setTarget() {
  var target_blank = document.querySelectorAll("section a");
  for (let i = 0; i < target_blank.length; i++) {
    target_blank[i].setAttribute("target", "_blank");
  }
}
/*lesson-6.1 end here */

/*lesson-6.2 start */
const fetchData = fetch("https://api.github.com/users/abebetesso/repos");
fetchData
  .then((response) => {
    return response.json();
  })
  //accessing data by event listener function
  .then((data) => {
    if (data.length >= 0) {
      renderHTML(data);
      setTarget();
    } else {
      throw new Error("The error response message");
    }
  })
  //adding catch() to handle error
  .catch((error) => {
    console.log(error, "error");
  });
/*lesson-6.2 end */
