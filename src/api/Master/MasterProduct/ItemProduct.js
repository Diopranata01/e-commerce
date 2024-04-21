import Services from "../../../services";

class ItemProduct {
    getList () {
        return Services.get('/product/?level=OTC')
    }
    getListCategory () {
        return Services.get('/product/category/')
    }
    getProductDetail (id) {
        return Services.get(`/product/${id}/`)
    }
}


export default new ItemProduct();