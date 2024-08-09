import {useDroppable} from "@dnd-kit/core";

export function Droppable({id, key, children, extraClass}) {
    const {isOver, setNodeRef} = useDroppable({
        id: id
    });
    const style = {
        background: isOver ? "green" : undefined
    };

    return (
        <div
            key={key}
            ref={setNodeRef}
            style={style}
            className={extraClass}
        >
            {children}
        </div>
    );
}