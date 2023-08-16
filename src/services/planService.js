import dataRequest from "./dataRequest";
import { apiConstants } from "./apiConstants";

export const planService = {
    getPlan: async (request) => {
        const endPoint = apiConstants.BASE_URL + '/api/v1/plan';
        return dataRequest.post(endPoint, request);
    }
};

export default planService;
