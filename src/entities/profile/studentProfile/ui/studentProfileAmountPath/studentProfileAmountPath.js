import React, {memo, useEffect, useState} from 'react';
import classNames from "classnames";
import {useSelector, useDispatch} from "react-redux";
import {EditableCard} from "shared/ui/editableCard";
import {Table} from "shared/ui/table";
import {getBooksData} from "../../model/selectors/booksSelector";
import cls from "./studentProfileAmountPath.module.sass";
import inTo from "shared/assets/images/inTo.png";
import outTo from "shared/assets/images/out.png";
import {
    getPaymentList,
    getMessageDelete,
    getDeletedList,
    getDatasWithPost,
    studentPaymentListThunk,
    studentPaymenListDelete,
    studentPaymentListDeleteGetThunk, StudentPaymentEditModal, studentBookOrderListThunk, getBookPaymentsList
} from "features/studentPayment";
import {Button} from "shared/ui/button";
import {YesNo} from "../../../../../shared/ui/yesNoModal/yesNo";
import {StudentPaymentDates} from "../../../../../features/studentPaymentDates";
import {onAddAlertOptions} from "../../../../../features/alert/model/slice/alertSlice";
import {fetchStudentProfileData} from "../../../../../pages/profilePage/model/thunk/studentProfileThunk";
import {SimplePopup} from "../../../../../shared/ui/popup";
import {Modal} from "../../../../../shared/ui/modal";
import {Select} from "../../../../../shared/ui/select";
import {useParams} from "react-router";
import {getMonth} from "../../../../../features/studentPayment/model/selectors/selectors";
import {API_URL, headers, useHttp} from "../../../../../shared/api/base";
import {fetchStudentDebtorData} from "../../../../../features/studentPayment/model/studentPaymentThunk";

export const StudentProfileAmountPath = memo(({active, setActive }) => {
    const pathArray = window.location.pathname.split('/');
    const lastId = pathArray[pathArray.length - 1];
    const booksList = useSelector(getBooksData);
    const bookPaymnetList = booksList.bookorders;
    const getTotalAmountData = useSelector(getPaymentList);
    const getDeletedLists = useSelector(getDeletedList);
    const getPaymentLists = useSelector(getDatasWithPost);
    const getBookPayments = useSelector(getBookPaymentsList);
    const dispatch = useDispatch();
    const [activeState, setActiveState] = useState("");
    const [selectedSalary, setSelectedSalary] = useState(null);
    const [portal, setPortal] = useState(false);
    const [modal, setModal] = useState(false);
    const [change, setChange] = useState(false);
    const month = useSelector(getMonth)



    const {id} = useParams()







    const handleDelete = () => {
        dispatch(studentPaymenListDelete(selectedSalary)).then((action) => {
            if (action.type.endsWith('fulfilled')) {
                dispatch(onAddAlertOptions({
                    type: "success",
                    status: true,
                    msg: "To'lov muvoffaqqiyatli o'chirildi"
                }))
                dispatch(fetchStudentProfileData(lastId))
                dispatch(studentPaymentListThunk(lastId));
            } else {

                dispatch(onAddAlertOptions({
                    tpye: "error",
                    status: true,
                    msg: "Server yoki internetda xatolik"
                }))
            }
            setPortal(false);
        });

    };

    useEffect(() => {
        if (!change) {
            dispatch(studentPaymentListThunk(lastId));
        } else {
            dispatch(studentPaymentListDeleteGetThunk(lastId));
        }
    }, [lastId, change]);

    useEffect(() => {
        dispatch(studentPaymentListThunk(lastId))
    }, [])


    useEffect(() => {
        dispatch(studentBookOrderListThunk(lastId));
    }, [lastId, dispatch]);


    const renderInData = () => {
        const listToRender = change ? getDeletedLists : getPaymentLists
        return listToRender?.map(item =>
            <tr key={item.id} onClick={() => setSelectedSalary(item.id)}>
                <td>
                    {item.status === false ? <td>To'lov</td> : <td>Chegirma</td>}
                </td>
                <td>{item.payment_sum}</td>
                <td>{item.date}</td>
                <td>
                    <div onClick={() => setModal(!modal)}
                         className={classNames(cls.inner, {
                             [cls.active]: item?.payment_type.name
                         })}
                    >
                        {item?.payment_type.name}
                    </div>
                </td>
                {!change && (
                    <td>
                        <Button onClick={() => setPortal(!portal)} type={"delete"}>
                            <i style={{color: "white"}} className={"fa-solid fa-xmark"}></i>
                        </Button>
                    </td>
                )}
            </tr>
        );
    };

    const renderOutData = () => {
        if (!bookPaymnetList || bookPaymnetList.length === 0) {
            return <div style={{width: 232 + "%", display: 'flex', alignItems: "center", justifyContent: "center"}}>
                <h1 style={{alignSelf: "center", marginLeft: 20 + "rem", marginTop: 12 + "rem", color: "#dddddd"}}>Kitob
                    sotib olinmagan</h1>
            </div>
        }

        return bookPaymnetList.map(item =>
            <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.payment}</td>
                <td>{item.date}</td>
            </tr>
        );
    };

    const renderDebtorData = () => {
        return month?.data?.map((item , i) => {
            return (
                <tr>
                    <td>{i +1}</td>
                    <td>{item?.month}</td>
                    <td>{item?.total_debt}</td>
                    <td>{item?.remaining_debt}</td>
                    <td>{item?.discount}</td>

                    <td>{item?.cash}</td>
                    <td>{item?.click}</td>
                    <td>{item?.bank}</td>

                </tr>
            )
        })
    }

    const renderIn = renderInData();
    const renderOut = renderOutData();
    const renderDebtor = renderDebtorData()

    return (
        <EditableCard
            extraClass={classNames(cls.path, {
                [cls.active]: active === "balance"
            })}
            titleType={"cross"}
            onClick={() => setActive("")}
        >
            <div
                className={classNames(cls.path__container, {
                    [cls.active]: activeState
                })}
            >
                <h1>Umumiy Hisob</h1>
                <div className={cls.items}>
                    <div
                        className={classNames(cls.items__inner, {
                            [cls.active]: activeState !== "balanceIn" && activeState
                        })}
                        onClick={() => setActiveState("balanceIn")}
                    >
                        <div className={cls.pathItem}>
                            <img src={inTo} alt=""/>
                            <h2>In</h2>
                        </div>
                        <p>To’lov va Chegirmalar</p>
                    </div>
                    <div
                        className={classNames(cls.items__inner, {
                            [cls.active]: activeState !== "balanceOut" && activeState
                        })}
                        onClick={() => setActiveState("balanceOut")}
                        style={{background: "#FFE4E6", border: ".1rem solid #F43F5E"}}
                    >
                        <div className={cls.pathItem}>
                            <h2>Out</h2>
                            <img src={outTo} alt=""/>
                        </div>
                        <p>Kitoblar</p>
                    </div>
                    <div
                        className={classNames(cls.items__inner, {
                            [cls.active]: activeState !== "balanceBackLog"
                        })}
                        onClick={() => setActiveState("balanceBackLog")}
                        style={{background: "#E0F8FF", border: ".1rem solid #20A5CA"}}
                    >
                        <h2 style={{color: "#20A5CA"}}>Qarzdorlik</h2>
                    </div>
                </div>
                {
                    activeState ?
                        <div className={cls.table}>
                            <div className={cls.table__header}>
                                {
                                    activeState === "balanceBackLog" ?
                                        <div className={cls.popup}>
                                            <AddDebt studentId={id} month={month}/>
                                        </div> :
                                        <>
                                            <Button children={change ? "Amaldagi" : "O'chirilganlar"}
                                                    extraClass={change ? cls.buttonDel2 : cls.buttonDel}
                                                    onClick={() => setChange(!change)}/>
                                            <StudentPaymentDates/>
                                        </>
                                }
                            </div>
                            <div className={cls.table__content}>
                                {
                                    activeState === "balanceIn" ? <Table>
                                        <thead>
                                        <tr>
                                            <th>Turi</th>
                                            <th>To’lov</th>
                                            <th>Sana</th>
                                            <th>To’lov turi</th>
                                            {!change && <th>O’chirish</th>}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {renderIn}
                                        </tbody>
                                    </Table> : activeState === "balanceOut" ? <Table>
                                        <thead>
                                        <tr>
                                            <th>Turi</th>
                                            <th>To’lov</th>
                                            <th>Sana</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {renderOut}
                                        </tbody>
                                    </Table> : activeState === "balanceBackLog" ?
                                        <div className={cls.tableDebt}>
                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Oy</th>
                                                    <th>Umumiy qarz</th>
                                                    <th>Qolgan qarz</th>
                                                    <th>Chegirma</th>

                                                    <th>Cash</th>
                                                    <th>Click</th>
                                                    <th>Bank</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {renderDebtor}
                                                </tbody>
                                            </Table>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                        : null
                }
                {!change && (
                    <YesNo
                        onDelete={handleDelete}
                        activeDelete={portal} setActiveDelete={() => setPortal(!portal)}/>
                )}
            </div>
            <StudentPaymentEditModal
                portal={modal}
                setPortal={() => setModal(false)}
                paymentId={selectedSalary}
                studentId={lastId}
            />
        </EditableCard>
    );
});


const AddDebt = ({month , studentId}) => {




    const [months , setMonths] = useState(null)


    const [activeModal, setActiveModal] = useState(false)

    const {request} = useHttp()
    const dispatch = useDispatch()
    const onClick = () => {


        request(`${API_URL}Students/missing_month_post/${studentId}/`  , "POST" , JSON.stringify({month: months}) , headers())
            .then(res => {
                console.log(res)
                dispatch(fetchStudentDebtorData(studentId))
                dispatch(onAddAlertOptions({
                    status: true,
                    type: "success",
                    msg: res.msg
                }))
                setActiveModal(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log(month)
    return (
        <>
            <Button onClick={() => setActiveModal(!activeModal)}>Qo'shish</Button>

            <Modal active={activeModal} setActive={setActiveModal}>
                <Select options={month.month} onChangeOption={setMonths}/>
                <Button extraClass={cls.buttonAdd} onClick={onClick}>Qo'shish</Button>
            </Modal>
        </>
    )
}