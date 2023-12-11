import { serverUrl } from "../../main.js";
import "./StudentCard.js";

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let queryEmail = params.email;

async function getStudents() {
  const students =  await fetch(`${serverUrl}/api/users?rol=Soy Estudiante`)
	.then((response) => response.json())
	.then((data) => {
		return data.Users;
	})
	.catch((error) => {
		console.error("Error fetching data:", error);
	});

  return students;
}

// function setThisTeacher(allUsers) {
//   const thisTeacher = allUsers.List.filter((teacher) => {
//     return teacher.email === queryEmail;
//   });
//   return thisTeacher[0];
// }

// function setTeachersVideos(allVideos, thisTeacher) {
//   const thisTeachersVideos = allVideos.list.filter((video) => {
//     return video.nameTeacher === thisTeacher.name && !video.qualified;
//   });
//   return thisTeachersVideos;
// }

function getStudentById(allUsers, id) {
  const thisStudent = allUsers.List.filter((student) => {
    return student._id === id;
  });
  return thisStudent[0];
}

// async function getTeachersVideos() {
//   const allUsers = await getUsers();

//   // conseguir el nombre del docente
//   const thisTeacher = setThisTeacher(allUsers);

//   // conseguir los videos del docente
//   const thisTeachersVideos = setTeachersVideos(allVideos, thisTeacher);

//   // creo un array de objetos con los datos que necesito
//   const videosToQualify = thisTeachersVideos.map((video) => {
//     return {
//       studentName: getStudentById(allUsers, video.authorId).name,
//       studentEmail: getStudentById(allUsers, video.authorId).email,
//       videoUrl: video.url,
//       videoId: video._id,
//     };
//   });

// }


document.querySelector("#division").addEventListener("change", async function (e) {
    const selected = e.target.value;

    const projects = await fetch(`${serverUrl}/api/deliveries?course=${filters}`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    createStudentCards(projects);
});

const createStudentCards = async (projectsToQualify) => {
  const students = await getStudents();
  const studentCards = projectsToQualify?.map(
      (project) =>
        `<student-card name="${
          students.filter((el) => el.email === project.emailStudent)[0].name
        }" email="${project.emailStudent}" video-url="${
          project.videoURL
        }" video-id="${project._id}"></student-card>`
    )
    .join("");

  document.querySelector("#student-card-container").innerHTML = studentCards;
};
