import './ProjectCard.css';

type prp = {
    title: string;
    description: string;
    img: string;
    href: string;
}


function ProjectCard(props : prp) {
    return (
        <div className="projectcard"> 
            <div className="innercard">
                <h1><a href={props.href} target="_blank">{props.title}</a></h1> 
                <div className="textdiv"> 
                    <h2>{props.description}</h2>
                </div>  
                <div className="imgdiv">
                    image
                </div>
            </div>
        </div> 
    );
}

export default ProjectCard;
