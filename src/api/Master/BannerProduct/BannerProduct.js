import api from "../../../services";

class BannerProduct {
    getListBanner () {
        return api.get('/banner/?is_active=true')
    }
}


export default new BannerProduct();