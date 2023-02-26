import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import "./kanban.css";

const KanbanCard = ({ title, index, parent }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
    data: {
      title,
      index,
      parent,
    },
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      className="card-container"
      style={style}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
    >
      <p>{title}</p>
    </div>
  );
};

export default KanbanCard;
