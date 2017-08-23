/*
    Client side API for reteriving Blog data.
    api version: 1.0
*/

const BASE_URL = 'http://localhost:5000'

module.exports = {
    getBlogPosts: function() {
        let url = BASE_URL + "/api/v1/blog/";
        fetch(url).then((response) => {
            if(response.status !== 200){
                console.log("getBlogPosts API call failed, status code: " 
                    + response.status);
                return;
            } 
            return response.json();
        })

        .then((posts) => {
            let data = [];
            for(let i=0; i < posts.length; i++){ 
                data.push({
                    id: posts[i]._id,
                    date: posts[i].date,
                    title: posts[i].title,
                    discr: posts[i].discr,
                    tags: posts[i].tags,
                    visable: posts[i].visable
                });
            }
            console.log(data);
            return data;
        })

        .catch((err) => {
            console.log("fetch error: ", err);    
        });
    }
};
