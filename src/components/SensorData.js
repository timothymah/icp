import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, fetchSensorData } from '../actions';

import roboticsAPI from '../apis/roboticsAPI'
import sensorNet from '../apis/sensorNet'

const SensorData = () => {
    const sensorDataState = useSelector(state => state.sensorData)

    const dispatch  = useDispatch()

    const SensorData = sensorNet.SensorData 

    useEffect(() => {
        dispatch(fetchSensorData(SensorData))
    },[])

    return (
    <div>
        <h1>SensorData</h1>
        <p> FOV: {sensorDataState.FOV} </p>
        <p> Zoom: {sensorDataState.Zoom} </p>
        <p> Pan Angle: {sensorDataState.PanAngle} </p>
        <p> Tilt Angle: {sensorDataState.TiltAngle} </p>

        <button onClick={() => dispatch(fetchSensorData(SensorData))}>Update Sensor Data</button>
    </div>    
    )
}

export default SensorData;

