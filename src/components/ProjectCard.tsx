import './ProjectCard.css';

type prp = {
    title: string;
    description: string;
    img: string;
}

function ProjectCard(props : prp) {
    return (
        <div class="projectcard"> 
            <div class="innercard">
                <h1>{props.title}</h1>
                <h2>{props.description}</h2>
            </div>
        </div> 

    );
}

export default ProjectCard;
