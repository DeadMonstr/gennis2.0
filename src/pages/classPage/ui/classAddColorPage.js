import { ClassColorAddFilter, ClassColorAddTable} from "entities/class";

export const ClassAddColorPage = ({color}) => {
    return (
        <>
            <ClassColorAddFilter color={color}/>
            <ClassColorAddTable/>
        </>
    );
};

