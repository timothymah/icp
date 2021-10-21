const sensorNet = {
    SensorTelemetry: {
        SensorID: 12344321, 
        SensorType: "EO", 
        },

    SensorData: {
            FOV: 45, 
            Zoom: 2, 
            PanAngle: 20, 
            TiltAngle: 30
        },
    
    Registration: {
            RobotID: 1, 
            SensorType: "EO", 
            XYFloor: [1,2,3], 
            Sensor: ["EO", "Lidar"]
        }
}

export default sensorNet;