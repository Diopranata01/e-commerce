import Services from "../../../services";

class ListItemProduct {
    getList () {
        return Services.get('/product/?level=OTC')
    }
    getListCategory () {
        return Services.get('/product/category/')
    }
}


export default new ListItemProduct();