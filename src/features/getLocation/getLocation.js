import {useEffect, useState} from "react";
import {Select} from "../../shared/ui/select";
import cls from "./getLocation.module.sass"

const list = [
    {name: "dsad1", label: "dsads", id: 1},
    {name: "dsad2", label: "dsads", id: 2},
    {name: "dsad3", label: "dsads", id: 3},
    {name: "dsad4", label: "dsads", id: 4},
]

const GetLocation = () => {

    const [location, setLocation] = useState([])
    const [selectedLocation, setSelectedLocation] = useState([])


    useEffect(() => {
        setLocation(list)
    }, [])

    const changeSelectedLocation = (id) => {
        const filteredLocation = location.filter(item => item.id === +id)
        setLocation(
            location.map(item => {
                if (item.id === +id) {
                    return {...item, disabled: true}
                }
                return item
            })
        )
        setSelectedLocation(arr => [...arr, ...filteredLocation])
    }

    const onDeleteLoc = (id) => {

        setLocation(location => {
            return location.map(item => {
                if (item.id === +id) {
                    return {...item, disabled: false}
                }
                return item
            })
        })
        setSelectedLocation(selectedLocation.filter(item => item.id !== +id))
    }
    return (
        <div className={cls.locations}>
            <Select
                onChangeOption={changeSelectedLocation}
                options={location}
            />
            {
                selectedLocation.length > 0 ?
                    <div className={cls.locations__items}>
                        {selectedLocation.map((item, i) => {
                            return (
                                <div className={cls.locations__item}>
                                    <i onClick={() => onDeleteLoc(item.id)} className="fa fa-times"></i>
                                    <p>{item.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    : null
            }

        </div>
    )
}
export default GetLocation