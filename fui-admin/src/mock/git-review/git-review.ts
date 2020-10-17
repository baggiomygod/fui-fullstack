import carDriveingData from './carDriveingData'
export default {
    carDriveingData() {
        return Promise.resolve(carDriveingData)
    }
}