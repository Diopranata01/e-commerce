import api from "../../services";

class Authentication {
    login (data) {
        return api.post('/auth/login/', data)
    }

    register (data) {
        return api.post('/customer/registration/', data)
    }

    registerOtp (data) {
        return api.post('/customer/registration/otp/', data)
    }
}


export default new Authentication();