import { serverPath } from "../../main.js";

async function fetchStudentProjects() {
	const studentEmail = localStorage.getItem('studentEmail');
	const studentGrade = localStorage.getItem('studentGrade');
	const urlProjects = `${serverPath}/api/projects?course=${studentGrade}&emailStudents=${studentEmail}`;

	try {
    const response = await fetch(urlProjects, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
		});

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();

    const projectsContainer = document.getElementById('studentProjects');

    data.Projects.forEach((project) => {

      const projectTemplate = `
      <div class="wrapper">
            <button class="collapsible" type="button">
                <div class="coll-title">
                    Proyecto:${project.name}
                    <div class="info">
                        <p>Fecha de inicio:${project.startDate} </p>
                        <p>Fecha de finalización:${project.finishDate} </p>
                    </div>
                </div>
                <img src="../../assets/images/collapsible-arrow.svg" alt="flecha hacia abajo" id="arrow-down">
            </button>
            <div class="content">
                <p class="drop-text">¡Sigue adelante con tu proyecto!</p>
                <p class="d-text">¡Adelántate y cumple tu meta a tiempo!</p>
                <p class="text">Haz click en el botón para seguir trabajando </p>
                <a href="/busqueda.html">
                    <button type="button" aria-label="boton ir" class="go-btn">¡Vamos!<img
                            src="../../assets/images/arrow-right.svg" alt="flecha hacia la derecha"></button>
                </a>
            </div>
        </div>
      `;


      projectsContainer.innerHTML += projectTemplate;
    });

    console.log('Projects rendered successfully.');

    document.querySelectorAll('.collapsible').forEach((collapsible) => {
      collapsible.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'rem';
        }
      });
    });

  } catch (error) {
    console.error('Error al cargar los proyectos', error);
  }
}


fetchStudentProjects()

function createYouTubePlayer(container, videoId) {

  const cardContainer = document.createElement('div');
  cardContainer.className = 'video-card';


  const playerIframe = document.createElement('iframe');
  playerIframe.src = `https://www.youtube.com/embed/${videoId}`;
  playerIframe.width = '100%';
  playerIframe.height = '100%';
  playerIframe.allowfullscreen = true;

  cardContainer.appendChild(playerIframe);

  container.appendChild(cardContainer);

}




