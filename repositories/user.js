// https://randomuser.me/api/
import axios from "axios"
const getUserDetail = async () => {
    try {
        alert('getUserDetail')
        let reponse = await axios.get('https://randomuser.me/api')
        if(reponse.status != 200) {
            throw 'Failed request'
        }
        if(reponse.data.results.length > 0) {
            let responseUser = reponse.data.results[0]
            let user = {}
            debugger
            user.dateOfBirth = new Date(responseUser.dob.date)
            user.email =responseUser.email
            user.gender = responseUser.gender
        }
    } catch (error) {
        debugger
        throw error
    }
}
const login = ({ email, password }) => {

}
export default {
    getUserDetail,
    login
}