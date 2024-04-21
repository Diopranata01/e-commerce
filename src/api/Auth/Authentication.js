import Services from "../../services";

class Authentication {
    login (data) {
        return Services.post('/auth/login/', data)
    }

    register (data) {
        return Services.post('/customer/register/', data)
    }

    registerOtp (data) {
        return Services.post('/customer/register/otp/', data)
    }
}


export default new Authentication();