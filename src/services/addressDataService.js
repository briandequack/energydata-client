import dataRequest from "./dataRequest";
import { apiConstants } from "./apiConstants";

const addressDataService = {
    getAddresInfo: (request) => {
        const endPoint = apiConstants.BASE_URL + '/api/v1/address';
        return dataRequest.post(endPoint, request);
    }
};

export default addressDataService;