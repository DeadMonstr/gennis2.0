import React, { useEffect, useState } from 'react';
import { Modal } from "shared/ui/modal";
import { Input } from "shared/ui/input";
import { Select } from "shared/ui/select";
import cls from "./vacancyWorkerPermission.module.sass";
import { Button } from "../../../../shared/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getPermissionTables } from "../model/selectors/selectors";
import { fetchPermissionTable, postSelectedTable } from "../model/vacancyWorkerPermissionThunk";

export const VacancyWorkerPermission = React.memo(({ active, setActive, onAddVacancy }) => {
    const [selectedWorkName, setSelectedWorkName] = useState("");
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [availablePermissions, setAvailablePermissions] = useState([]); // Backenddan keladigan permissionlarni saqlash uchun
    const dispatch = useDispatch();
    const permissionData = useSelector(getPermissionTables);

    useEffect(() => {
        dispatch(fetchPermissionTable());
    }, [dispatch]);

    const onChangeWorkName = (value) => {
        setSelectedWorkName(value);
        // Tanlangan table ni backendga yuborish
        dispatch(postSelectedTable(value)).then((action) => {
            if (postSelectedTable.fulfilled.match(action)) {
                console.log("Received Permissions:", action.payload);
                setAvailablePermissions(action.payload.permissions); // Backenddan kelgan permissionlarni state ga saqlaymiz
            } else {
                console.error("Failed to fetch permissions:", action.payload);
            }
        });
    };

    const onChangePermission = (e, permission) => {
        if (e.target.checked) {
            setSelectedPermissions(prev => [...prev, permission]);
        } else {
            setSelectedPermissions(prev => prev.filter(item => item !== permission));
        }
    };

    const handleAdd = () => {
        const newVacancy = {
            id: Date.now(),
            workName: selectedWorkName,
            workerNames: selectedPermissions.join(", ")
        };
        onAddVacancy(newVacancy);
        setSelectedPermissions([]);
        setSelectedWorkName("");
        setActive(false);
    };

    return (
        <Modal active={active} setActive={setActive}>
            <div className={cls.filter}>
                <h1>Add</h1>
                <div className={cls.filter__container}>
                    <Select
                        title={"Ish turi"}
                        extraClass={cls.filter__select}
                        onChangeOption={onChangeWorkName}
                        options={permissionData.tables}
                        required
                        value={selectedWorkName}
                    />
                    {availablePermissions.permissions?.map(permission => (
                        <div key={permission.id} className={cls.workerPermission}>
                            <h4>{permission.name}</h4>
                            <Input
                                style={{ width: "20px", marginTop: "15px" }}
                                type={"checkbox"}
                                checked={selectedPermissions.includes(permission.name)}
                                onChange={(e) => onChangePermission(e, permission.name)}
                            />
                        </div>
                    ))}
                </div>
                <div className={cls.buttonHome}>
                    <Button children={"Add"} onClick={handleAdd} />
                </div>
            </div>
        </Modal>
    );
});
