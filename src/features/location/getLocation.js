import {useEffect, useState} from "react";
import {Select} from "../../shared/ui/select";
import cls from "./getLocation.module.sass"
import login from "../../pages/login/ui/login";

const list = [
    {name: "dsad1", label: "dsads", id: 1},
    {name: "dsad2", label: "dsads", id: 2},
    {name: "dsad3", label: "dsads", id: 3},
    {name: "dsad4", label: "dsads", id: 4},
]

const GetLocation = ({getItem , deletedId}) => {

    const [location, setLocation] = useState([])
    const [selectedLocation, setSelectedLocation] = useState([])


    useEffect(() => {
        setLocation(list)
    }, [])
    useEffect(() => {
        if (deletedId !== 0){
            setLocation(location => {
                return location.map(item => {
                    if (item.id === +deletedId) {
                        return {...item, disabled: false}
                    }
                    return item
                  })
            })
            setSelectedLocation(selectedLocation.filter(item => item.id !== +deletedId))
            getItem(selectedLocation.filter(item => item.id !== +deletedId))
        }

    } ,[deletedId])
    const changeSelectedLocation = (id) => {
        const filteredLocation  = location.filter(item => item.id === +id)
        setLocation(
            location.map(item => {
                if (item.id === +id) {
                    return {...item, disabled: true}
                }
                return item

            })
        )
        setSelectedLocation(arr => [...arr, ...filteredLocation])
        getItem(arr => [...arr, ...filteredLocation])
    }

    return (
        <div className={cls.locations}>
            <Select
                onChangeOption={changeSelectedLocation}
                options={location}
            />
        </div>
    )
}
export default GetLocation