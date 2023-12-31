import { serverUrl } from "../../main.js";

async function getStudents() {
  return fetch(`${serverUrl}/api/users?rol=Soy%20Estudiante`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

const listContainer = document.querySelector(".container_listado");
const allProjects = (filter) => fetch(`${serverUrl}/api/deliveries${filter}`).then((response) =>
  response.json()
);

const getStudentByEmail = (allStudents, email) => {
  const thisStudent = allStudents.Users.filter((student) => {
    return student.email === email;
  });
  return thisStudent[0];
};

document
  .querySelector("#division")
  .addEventListener("change", async function (e) {
    const students = await getStudents();
    const selectedCourse = document.querySelector("#division");
    const thisCourse = students.Users.filter((student) => {
      return student.course === selectedCourse.value;
    });

    const qualifiedProjects = await allProjects('?qualified=true');
console.log(qualifiedProjects)
    qualifiedProjects.forEach((element) => {
      const studentSlot = document.createElement("div");
      const thisStudent = getStudentByEmail(students, element.emailStudent);
      studentSlot.classList.add("estudiante");

      const name = document.createElement("div");
      name.classList.add("nombre-apellido");
      name.innerHTML = `<strong>${thisStudent.name} ${thisStudent.lastName}</strong>`;

      const work = document.createElement("div");
      work.classList.add("trabajo-realizado");
      work.innerHTML = `${element.title}`;

      const button = document.createElement("button");
      button.classList.add("ver-trabajo-btn");
      button.innerText = "Ver Trabajo";
      button.addEventListener("click", function (e) {
        e.preventDefault();
        abrirModal("Trabajo 1");
      });

      studentSlot.appendChild(name);
      studentSlot.appendChild(work);
      studentSlot.appendChild(button);
      listContainer.appendChild(studentSlot);
    });
  });
