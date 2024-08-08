import cls from "./employeesPage.module.sass"
import {Button} from "shared/ui/button";
import {Select} from "shared/ui/select";
import {DeletedEmployers, Employers} from "entities/employer";
import {useState} from "react";
import {EmployeesFilter} from "features/filters/employeesFilter";

export const EmployerPage = () => {
    const [activeFilter , setActiveModal] = useState(false)

    const [activeSwitch , setActiveSwitch] = useState(false)
  return(
      <div className={cls.employer}>
        <div className={cls.employer__header}>
            <Button onClick={() =>setActiveModal(!activeFilter)} status={"filter"} type={"filter"}>Filter</Button>
            <Select/>
        </div>
          {activeSwitch ? <DeletedEmployers/> : <Employers/>}
          <EmployeesFilter activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} active={activeFilter} setActive={setActiveModal}/>
      </div>
  )
}
