import {Table} from "shared/ui/table";
import {Button} from "../../../../../shared/ui/button";
import React, {useMemo, useState} from "react";
import cls from "../accountingTableWorkerSalary/empSalary.module.sass";
import {Modal} from "../../../../../shared/ui/modal";
import {Pagination} from "../../../../../features/pagination";
import {useSelector} from "react-redux";
import {getSearchValue} from "../../../../../features/searchInput";
import {MiniLoader} from "../../../../../shared/ui/miniLoader";

export const AccountingAdditionalCosts = ({
                                              activeDelete,
                                              additionalCosts,
                                              extraclassName,
                                              setActiveDelete,
                                              setChangingData,
                                              changingData,
                                              onDelete,
                                              formatSalary,
                                              loading,
                                              paymentStyle
                                          }) => {
    const search = useSelector(getSearchValue)
    let PageSize = useMemo(() => 50, [])
    const [currentTableData, setCurrentTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const searchedUsers = useMemo(() => {
        const filteredHeroes = additionalCosts?.slice()
        setCurrentPage(1)


        if (!search) return filteredHeroes

        return filteredHeroes.filter(item =>
            item.name?.toLowerCase().includes(search.toLowerCase())
        )
    }, [additionalCosts, setCurrentPage, search])
    const onDeleteModal = (data) => {
        setActiveDelete(true)
    }


    const renderOverHeadList = () => {
        return currentTableData?.map((item, i) => (
            <tr>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{formatSalary(item.price)}</td>
                <td>{item.created}</td>
                <td><div className={paymentStyle}>{item.payment.name}</div></td>
                <td>
                    <div>
                        <Button
                            onClick={() => {
                                onDeleteModal({
                                    id: item.id,
                                    name: item.name,

                                })
                                setChangingData({
                                    id: item.id,
                                    name: item.name,
                                })
                            }
                            }
                            type={"delete"}
                            children={<i className={"fa fa-times"} style={{color: "white"}}/>}
                        />
                    </div>
                </td>
            </tr>
        ))
    }

    const render = renderOverHeadList()
    return (
        <>

            <div className={extraclassName}>
                <Table>
                    <thead>
                    <tr>
                        <th/>
                        <th>Nomi</th>
                        <th>Narxi</th>
                        <th>Sana</th>
                        <th>To'lov turi</th>
                        <th>O'chirish</th>
                    </tr>
                    </thead>
                    <tbody>
                    {render}
                    </tbody>
                </Table>
            </div>
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
        </>
    );
};

