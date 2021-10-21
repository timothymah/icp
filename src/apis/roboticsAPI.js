const SensorTelemetry = {
    RobotID: 1, 
    RobotModel: "BD", 
    SensorID: 12344321, 
    SensorType: "EO", 
    SensorData: {FOV: 45, Zoom: 2, PanAngle: 20, TiltAngle: 30}
    }

const Localisation = {
    RobotID: 1, 
    RobotModel: "BD", 
    XYFloor: [1,2,3], 
    VxVy: [1,1] 
}
    
const Registration = {
    RobotID: 1, 
    RobotModel: "BD", 
    XYFloor: [1,2,3], 
    Sensor: ["EO", "Lidar"]
}

const roboticsAPI = {
    SensorTelemetry,
    Localisation,
    Registration
}

export default roboticsAPI;