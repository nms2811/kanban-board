import { useState } from "react";
import { columnsData } from "./data.js";
import CardItems from "./card-items.jsx";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { onDragEnd } from "./dragHandler";
import "../App.css";

const KanbanBoard = () => {
  const [columns, setColumns] = useState(columnsData);
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      <div className="board-container">
        <div className="board-columns">
          {Object.entries(columns).map(([columnId, column], index) => {
            console.log(columnId, column, index);
            return (
              <Droppable key={columnId} droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    className="todo-list"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <span className="todo-list-title">{column.title}</span>
                    {column.items.map((item, index) => (
                      <CardItems
                        key={`card-${(item, index)}`}
                        item={item}
                        index={index}
                      />
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
