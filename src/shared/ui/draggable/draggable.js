import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";

export function Draggable({id, children, extraClass}) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id
    });
    const style = transform
        ? {
            transform: CSS.Translate.toString(transform)
        }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            className={extraClass}
            style={style}
            {...listeners}
            {...attributes}
        >
            {children}
        </div>
    );
}