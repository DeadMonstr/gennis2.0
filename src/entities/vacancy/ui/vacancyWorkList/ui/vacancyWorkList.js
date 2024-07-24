import React from 'react';
import { Table } from "shared/ui/table";
import cls from './vacancyWorkList.module.sass';
import { Input } from "shared/ui/input";

export const VacancyWorkList = ({ currentTableData, currentPage, PageSize, editMode, onEditClick, selectedItems, setSelectedItems }) => {

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedItems(currentTableData.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (e, id) => {
        if (e.target.checked) {
            setSelectedItems(prev => [...prev, id]);
        } else {
            setSelectedItems(prev => prev.filter(item => item !== id));
        }
    };

    const renderVacancies = () => {
        return currentTableData.map((item, index) => (
            <tr key={item.id}>
                <td>{(currentPage - 1) * PageSize + index + 1}</td>
                <td>{item.workName}</td>
                <td>{item.workerNames}</td>
                {!editMode && (
                    <td>
                        <Input
                            style={{ width: 25 + "px" }}
                            type={"checkbox"}
                            checked={selectedItems.includes(item.id)}
                            onChange={(e) => handleSelectItem(e, item.id)}
                        />
                    </td>
                )}
            </tr>
        ));
    };

    return (
        <Table>
            <thead className={cls.theadBody}>
            <tr>
                <th>№</th>
                <th>Nima ish qilishi</th>
                <th>Manimcha kimligi bo'sa kere</th>
                {!editMode && (
                    <th className={cls.checkBox}>
                        <Input
                            style={{ width: 25 + "px" }}
                            type={"checkbox"}
                            onChange={handleSelectAll}
                            checked={selectedItems.length === currentTableData.length}
                        />
                    </th>
                )}
            </tr>
            </thead>
            <tbody>
            {renderVacancies()}
            </tbody>
        </Table>
    );
};
