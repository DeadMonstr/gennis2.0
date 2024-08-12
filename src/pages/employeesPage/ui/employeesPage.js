import cls from "./employeesPage.module.sass"
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {DeletedEmployers, Employers} from "entities/employer";
import React, {useEffect, useMemo, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchEmployersData} from "../../../entities/employer/model/slice/employersThunk";
import {getEmployersData} from "../../../entities/employer/model/selector/employersSelector";
import {EmployeesFilter} from "features/filters/employeesFilter";
import {getSearchValue} from "../../../features/searchInput";
import {Pagination} from "../../../features/pagination";

export const EmployerPage = () => {
    const dispatch = useDispatch()
    const employersData = useSelector(getEmployersData)
    const [activeFilter , setActiveModal] = useState(false)
    const PageSize = useMemo(() => 10, []);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeSwitch , setActiveSwitch] = useState(false)
    const search = useSelector(getSearchValue);

    useEffect(() => {
        dispatch(fetchEmployersData())
    }, [dispatch])

    const searchedEmployers = useMemo(() => {
        const filteredRooms = employersData?.filter(item => !item.deleted) || [];
        setCurrentPage(1);

        if (!search) return filteredRooms;

        return filteredRooms.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        );
    }, [employersData, search]);

  return(
      <div className={cls.employer}>
        <div className={cls.employer__header}>
            <Button onClick={() =>setActiveModal(!activeFilter)} status={"filter"} type={"filter"}>Filter</Button>
            <Select/>
        </div>
          {activeSwitch ? <DeletedEmployers/> : <Employers currentTableData={searchedEmployers.slice((currentPage - 1) * PageSize, currentPage * PageSize)}/>}
          <EmployeesFilter activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} active={activeFilter} setActive={setActiveModal}/>
          <Pagination
              setCurrentTableData={() => {}}
              search={search}
              users={searchedEmployers}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              pageSize={PageSize}
              onPageChange={(page) => {
                  setCurrentPage(page);
              }}
          />
      </div>
  )
}
