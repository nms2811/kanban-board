import "../App.css";
import { Draggable } from "react-beautiful-dnd";

const CardItems = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-item-information">
            <p>{item.Task}</p>
            <div className="card-item-details">
              <p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CardItems;
