import {useDroppable} from "@dnd-kit/core";

export function Droppable({id, children, extraClass}) {
    const {isOver, setNodeRef} = useDroppable({
        id: id
    });
    const style = {
        background: isOver ? "green" : undefined
    };

    return (
        <div
            key={id}
            ref={setNodeRef}
            style={style}
            className={extraClass}
        >
            {children}
        </div>
    );
}