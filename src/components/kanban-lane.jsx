import { useDroppable } from "@dnd-kit/core";
import KanbanCard from "./kanban-card";
import "./kanban.css";

const KanbanLane = ({ title, items }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });
  return (
    <div className="lane-container">
      <h2 className="lane-title"></h2>
      <div className="lane-items" ref={setNodeRef}>
        {items &&
          items.map(({ title: cardTitle }, key) => (
            <KanbanCard
              title={cardTitle}
              key={key}
              index={key}
              parent={title}
            />
          ))}
      </div>
    </div>
  );
};

export default KanbanLane;
