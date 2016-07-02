import Backbone from "backbone";
import RepositoriesModel from "./../Models/model.repository";

class RepositoriesCollections extends Backbone.Collection {
    constructor() {
        super();
    }

    get model() {
        return RepositoriesModel;
    }

    parse(response) {
        return response.items;
    }
}

export default RepositoriesCollections;
