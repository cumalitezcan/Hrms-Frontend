import axios from "axios"

export default class WorkTimesService{
    getWorkTimes(){
        return axios.get("http://localhost:8080/api/workTimes/getAll")
    }
}