import {Pagination} from "../../../../features/pagination";
import React, {useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSearchValue} from "../../../../features/searchInput";
import {StudentsPayments} from "../../../../entities/accounting";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {onDeleteStudents} from "../../../../entities/accounting/model/slice/studetntSlice";
import {Button} from "../../../../shared/ui/button";

export const StudentSalary = ({studentData}) => {
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const {request} = useHttp()
    const [deleted , setDeleted] = useState(false)
    const dispatch = useDispatch()

    const searchedUsers = useMemo(() => {
        const filteredHeroes = studentData?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [studentData, setCurrentPage, search])

    const onDelete = (id) => {
        console.log(id)
        request(`${API_URL}Students/student_payment_delete/${id}/`, "DELETE", JSON.stringify({id}), headers())
            .catch(err => {
                console.log(err)
            })
        dispatch(onDeleteStudents({id: id}))
    }

    return (
        <div>
            <div style={{display: "flex" , gap: "2rem"}}>
                <Button type={"simple__add"}>
                    Archive
                </Button>
                <Button type={"danger"} onClick={() => setDeleted(!deleted)}>
                    Deleted
                </Button>
            </div>
            <StudentsPayments onDelete={onDelete} studentData={studentData} deleted={deleted}/>
            <Pagination
                setCurrentTableData={setCurrentTableData}
                users={searchedUsers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                pageSize={PageSize}
                onPageChange={page => {
                    setCurrentPage(page)
                }}
                type={"custom"}
            />
        </div>
    );
};

