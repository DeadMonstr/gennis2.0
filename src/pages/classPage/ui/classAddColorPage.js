import { ClassColorAddFilter, ClassColorAddTable} from "entities/class";

export const ClassAddColorPage = ({color , setEdit , edit}) => {
    return (
        <>
            <ClassColorAddFilter
                color={color}
                edit={edit}
                setEdit={setEdit}/>
            {/*<ClassColorAddTable/>*/}
        </>
    );
};

