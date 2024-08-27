import React, { useEffect, useState } from 'react';
import { Select } from '../../shared/ui/select';
import cls from './getLocation.module.sass';
import { useDispatch } from 'react-redux';
import { fetLocationsForBranchesThunk } from '../../entities/vacancy/ui/vacancyWorkerList';

const GetLocation = ({ getItem, deletedId, locations }) => {
    const [location, setLocation] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setLocation(locations || []);
    }, [locations]);

    useEffect(() => {
        if (deletedId !== 0) {
            setLocation(location =>
                location.map(item => {
                    if (item.id === +deletedId) {
                        return { ...item, disabled: false };
                    }
                    return item;
                })
            );
            const updatedSelectedLocation = selectedLocation.filter(item => item.id !== +deletedId);
            setSelectedLocation(updatedSelectedLocation);
            getItem(updatedSelectedLocation);
        }
    }, [deletedId]);

    useEffect(() => {
        if (selectedLocation.length > 0) {
            const selectedLocationIds = selectedLocation.map(item => item.id);
            dispatch(fetLocationsForBranchesThunk(selectedLocationIds));
        }
    }, [selectedLocation, dispatch]);

    const changeSelectedLocation = id => {
        const filteredLocation = location.filter(item => item.id === +id);
        setLocation(
            location.map(item => {
                if (item.id === +id) {
                    return { ...item, disabled: true };
                }
                return item;
            })
        );
        const newSelectedLocation = [...selectedLocation, ...filteredLocation];
        setSelectedLocation(newSelectedLocation);
        getItem(newSelectedLocation);
    };

    return (
        <div className={cls.locations}>
            <Select onChangeOption={changeSelectedLocation} options={location} />
        </div>
    );
};

export default GetLocation;
