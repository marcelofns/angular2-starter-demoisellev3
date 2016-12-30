module.exports = {
    
    /**
     * Must contain at least one endpoint
     * Example:
     * {
     *      'main' : 'http://localhost/app'
     * }
     * 
     */ 
    'endpoints' : {
         'main' : 'http://10.200.24.50/todo/api/',
          
        
    },
    'multitenancy' : {
        'active': false,
         'apiUrl': 'http://localhost:8080/app/api/v1/'
    }


}