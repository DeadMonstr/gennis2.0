import classNames from "classnames";
import {memo, useMemo, useState} from "react";
import {Accordion} from "shared/ui/accardion/accardion";
import cls from './flowList.module.sass'
import {Table} from "shared/ui/table";
import {Input} from "shared/ui/input";
import {Pagination} from "features/pagination";
import {useSelector} from "react-redux";
import {getSearchValue} from "features/searchInput";

export const FlowList = memo(({flowList, number, onChangeSingle, onChangeAll}) => {


    const renderFlowList = () => {
        return flowList?.students?.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item?.user?.name} {item?.user?.surname}</td>
                <td>{item?.user?.phone}</td>
                <td>
                    <div className={cls.flowList__container}>
                        <Input
                            extraClassName={cls.flowList__input}
                            type={"checkbox"}
                            onChange={() => onChangeSingle(item?.id, flowList?.id)}
                            checked={item?.isCheck ? item?.isCheck : flowList?.isCheck}
                            disabled={item?.extra_info ? !item?.extra_info?.status : false}
                        />
                        {
                            item?.extra_info ?
                                <div className={classNames(cls.status, {
                                    [cls.active]: item?.extra_info?.status
                                })}>
                                    <div className={classNames(cls.status__inner, {
                                        [cls.active]: item?.extra_info?.status
                                    })}/>
                                </div> : null
                        }
                    </div>
                </td>
            </tr>
        ))
    }
    return (
        <div className={cls.flowList}>
            <Accordion
                number={number + 1}
                title={`${flowList?.class_number?.number} ${flowList?.color?.name}`}
                subtitle={
                    <Input
                        type={"checkbox"}
                        onChange={() => onChangeAll(flowList?.id)}
                        checked={flowList?.isCheck}
                        disabled={
                            flowList?.students[0]?.extra_info ?
                                flowList?.students?.filter(item => !item?.extra_info)[0] : false
                        }
                    />
                }
            >
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