import {makeObservable, action, observable} from 'mobx';
import Products from '../Product';

class ProductStore {
    @observable products = Products;
    @observable filterText = '';
    @observable inStockOnly = false;

    constructor() {
        makeObservable(this)
    }

    @action
    handleFilterTextChange(changeText) {
        this.filterText = changeText;
    }

    @action
    handleInStockChange(stocked) {
        this.inStockOnly = stocked;
    }
}

export default new ProductStore();