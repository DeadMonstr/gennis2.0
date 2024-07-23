import cls from "./teacher.module.sass";
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import React, {useMemo, useState} from "react";
import {DeletedTeachers, Teachers} from "entities/teachers";
import {TeacherFilter} from "features/filters/teacherFilter";
import {Pagination} from "../../../features/pagination";
import {teachersData} from "../../../entities/teachers/teachers/ui/teachers";
const branches =[
    {name: "chirchiq"},
    {name: "chirchiq1"},
    {name: "chirchiq2"},
]
export const TeachersPage = () => {
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("")
    const [selected , setSelected] = useState()
    const [active , setActive] = useState()
    const [activeSwitch  , setActiveSwitch] = useState(false)
  return(
      <div className={cls.teacher}>

          <div className={cls.teacher__filter}>
              <Button
                  status={"filter"}
                  extraClass={cls.extraCutClassFilter}
                  onClick={() => setActive(!active)}
                  type={"filter"}
              >
                  Filter
              </Button>
              <Button type={"login"} status={"timeTable"}>
                  time table
              </Button>
          </div>
          <div className={cls.table}>

              <h2>{activeSwitch ? "Deleted Teachers" : "Teachers"}</h2>
              {activeSwitch ? <DeletedTeachers/> : <Teachers/>}
          </div>

          <Pagination
              setCurrentTableData={setCurrentTableData}
              users={teachersData}
              search={search}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              pageSize={PageSize}
              onPageChange={page => {
                  setCurrentPage(page)
              }}
              type={"custom"}
          />

          <TeacherFilter activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch}  setActive={setActive} active={active}/>
      </div>
  )
}