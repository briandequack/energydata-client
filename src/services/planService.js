
export const planService = {
    getPlan: async (request) => {
   
        const json = JSON.stringify(request);
        
        try {
        const baseUrl = 'http://' + process.env.ENERZIE_API_HOST + ':' + process.env.ENERZIE_API_PORT;
        const response = await fetch( baseUrl + '/api/v1/plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: json
        });
        
        if (!response.ok) {
            if (response.status === 404) {
                const error = new Error('Not Found');
                error.status = 404;
                throw error;
            }
            throw new Error('Network response was not ok');
        } 
        

        const data = await response.json();
        return data;

        } catch(error){
            error.message = 'Could not connect to server.';
            error.status = 503;
            throw error;
        }
        
    }
};

export default planService;
