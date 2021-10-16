import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchVehicleList } from '../../store/VehicleModel/vehicleModelAction';
import Sidebar from '../Layouts/Sidebar'
import VehicleList from './VehicleList'

export default function Index() {
    const dispatch = useDispatch();
    const vehicleList = useSelector(state => state.vehicleModel.car)
    useEffect(() => {
        dispatch(fetchVehicleList())
    }, [])
    return (
        <div className="flex">
            <div className="w-2/12">
                <Sidebar/>
            </div>
            <div className="w-10/12 px-6 py-20 mt-10">
                <VehicleList vehicleList={vehicleList}/>
            </div>
        </div>
    )
}
