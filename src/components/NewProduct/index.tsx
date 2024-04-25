import { useState } from "react";
import "./index.css";
import leftArrow from "../../assets/leftarrow.svg";
import rightArrow from "../../assets/rightarrow.svg";
import bitbucket from "../../assets/bitbucket1.svg";
import dropbox from "../../assets/dropbox.svg";
import giphy from "../../assets/giphy.svg";
import googlecalendar from "../../assets/googlecalendar.svg";
import googledrive from "../../assets/googledrive.svg";
import notion from "../../assets/notion.svg";
import trello from "../../assets/trello.svg";
import intercom from "../../assets/intercom1.svg";
import tagManager from "../../assets/tagManager.svg";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import KetmaKetlik from "../LoyihaKetmaKetligi";

const NewProduct = () => {
  const [projects, setProjects] = useState([
    { id: "bitbucket", name: "Bitbucket Cloud", image: bitbucket },
    { id: "dropbox", name: "Dropbox Paper", image: dropbox },
    { id: "giphy", name: "Giphy", image: giphy },
    { id: "googlecalendar", name: "Google Calendar", image: googlecalendar },
    { id: "googledrive", name: "Google Drive", image: googledrive },
    { id: "notion", name: "Notion", image: notion },
    { id: "trello", name: "Trello", image: trello },
    { id: "intercom", name: "Intercom", image: intercom },
    { id: "tagManager", name: "Google Tag Manager", image: tagManager },
  ]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newProjects = Array.from(projects);
    newProjects.splice(source.index, 1);
    newProjects.splice(destination.index, 0, projects.find(p => p.id === draggableId)!);

    setProjects(newProjects);
  };

  return (
    <div className="containerr">
      <div className="product-wrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="shadoww">
            <div className="ortga-davom">
              <img src={leftArrow} alt="" />
              <h1>Yangi loyiha ochish</h1>
              <div className="buttons">
                <button className="button1">Ortga</button>
                <button className="button2">
                  Davom etish{" "}
                  <span>
                    <img src={rightArrow} alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="projects">
            <Droppable droppableId="projects">
              {(provided) => (
                <div style={{display:"flex", flexWrap:"wrap"}} ref={provided.innerRef} {...provided.droppableProps}>
                  {projects.map((project, index) => (
                    <Draggable
                      key={project.id}
                      draggableId={project.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="project">
                            <img src={project.image} alt={project.name} />
                            <h4>{project.name}</h4>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        <KetmaKetlik />
      </div>
    </div>
  );
};

export default NewProduct;
