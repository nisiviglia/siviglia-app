/*
    Client side api for accessing GitHub resources.
    For GitHub API v3.
    api version 1.0
*/

const BASE_URL = 'http://api.github.com'

module.exports = {
    getRepos: function() {
        return new Promise((resolve, reject) => {
            let url = BASE_URL + '/users/nisiviglia/repos';
            fetch( url ).then((response) => {
                if(response.status != 200){
                reject("GitHub API connection failed, status code: " 
                    + response.status);
                } 
                return response.json();
            }) 

            .then((repos) => {
                let data = [];
                for(let i=0; i < repos.length; i++){
                    data.push({
                        id: repos[i].id,
                        name: repos[i].name,
                        discr: repos[i].description,
                        lang: repos[i].language
                    });
                }
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);
            });
        });    
    }

};
