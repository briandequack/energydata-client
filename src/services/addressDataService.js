
const addressDataService = {

    

    getAddresInfo: async (zipCode, houseNumber, houseNumberSuffix) => {
        const addressDataRequest = {
            zipCode: zipCode,
            houseNumber: houseNumber,
            houseNumberSuffix: houseNumberSuffix
        };
        const jsonAddressData = JSON.stringify(addressDataRequest);
        try {
        const baseUrl = 'http://' + process.env.ENERZIE_API_HOST + ':' + process.env.ENERZIE_API_PORT;
        const response = await fetch( baseUrl + '/api/v1/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonAddressData
        });
        
        if (!response.ok) {             
            const error = new Error('Response not ok.');
            error.status = response.status;
            throw error; 
        } 
        
        const data = await response.json();
        return data;

        } catch(error){
            if(error.status === 404){
                error.message = 'Not found.'
                throw error 
            } else {
                error.message = 'Could not connect to server.';
                error.status = 503;
                throw error;
            }           
        }
    }
};

export default addressDataService;