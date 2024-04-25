import { useState } from "react";
import "./index.css";
import menu from "../../assets/menu.svg";
import addsquare from "../../assets/add-square.svg";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

const KetmaKetlik = () => {
  const [projects, setProjects] = useState<any[]>([
    { id: "project1", name: "Project 1" },
    { id: "project2", name: "Project 2" },
    { id: "project3", name: "Project 3" }
  ]); 

  const createInputMenu = () => {
    const inputMenuDiv = document.createElement("div");
    inputMenuDiv.classList.add("input-menu");

    const img = document.createElement("img");
    img.src = menu;
    img.alt = "";

    const inputDiv1 = document.createElement("div");
    inputDiv1.classList.add("input");

    const label1 = document.createElement("label");
    label1.htmlFor = "ustunNomi";
    label1.textContent = "Ustun Nomi";

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.classList.add("form-control");
    input1.id = `ustunNomi_${Date.now()}`;

    inputDiv1.appendChild(label1);
    inputDiv1.appendChild(input1);

    const inputDiv2 = document.createElement("div");
    inputDiv2.classList.add("input");

    const label2 = document.createElement("label");
    label2.htmlFor = "key";
    label2.textContent = "Key";

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.classList.add("form-control");
    input2.id = `key_${Date.now()}`;

    inputDiv2.appendChild(label2);
    inputDiv2.appendChild(input2);

    inputMenuDiv.appendChild(img);
    inputMenuDiv.appendChild(inputDiv1);
    inputMenuDiv.appendChild(inputDiv2);

    const inputsWrapper = document.getElementById("inputsWrapper");
    inputsWrapper?.appendChild(inputMenuDiv);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

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
    const [removed] = newProjects.splice(source.index, 1);
    newProjects.splice(destination.index, 0, removed);

    setProjects(newProjects);
  };

  return (
    <div className="containerr">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="ketmaketlik">
          <h1>Loyiha ketma-ketligi</h1>
          <div className="inputs">
            <Droppable droppableId="projects">
              {(provided) => (
                <div
                  id="inputsWrapper"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
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
                          <div className="input-menu">
                            <img src={menu} alt="" />
                            <div className="input">
                              <label
                                htmlFor={`ustunNomi_${project.id}`}
                                className="form-label"
                              >
                                Ustun Nomi
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id={`ustunNomi_${project.id}`}
                              />
                            </div>
                            <div className="input">
                              <label
                                htmlFor={`key_${project.id}`}
                                className="form-label"
                              >
                                Key
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id={`key_${project.id}`}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="addSquare">
              <img src={addsquare} alt="" />
              <h2 onClick={createInputMenu}>Ustun qo’shish</h2>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default KetmaKetlik;
