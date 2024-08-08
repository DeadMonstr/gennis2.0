import {memo, useMemo, useState} from "react";
import {Accordion} from "shared/ui/accardion/accardion";
import cls from './flowList.module.sass'
import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {Pagination} from "features/pagination";
import {useSelector} from "react-redux";
import {getSearchValue} from "features/searchInput";

export const FlowList = memo(({flowList, number}) => {


    const renderFlowList = () => {
        return flowList.data.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name} {item.surname}</td>
                <td>{item.number}</td>
                <td>
                    <div>{item.status ? <Input type={"checkbox"}/> : null}</div>
                </td>
            </tr>
        ))

    }
    return (
        <div className={cls.flowList}>
            <Accordion number={number + 1} title={flowList.className} subtitle={flowList.status}>
                <Table>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ism Familiya</th>
                        <th>Telefon Numer</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {renderFlowList()}
                    </tbody>
                </Table>
    
            </Accordion>
        </div>
    )
})