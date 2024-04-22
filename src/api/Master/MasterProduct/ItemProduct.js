import api from "../../../services";
// import Services from "../../../services";

class ItemProduct {
    getList () {
        return api.get('/product/?level=OTC')
    }
    getListCategory () {
        return api.get('/product/category/')
    }
    getProductDetail (id) {
        return api.get(`/product/${id}/`)
    }
}


export default new ItemProduct();