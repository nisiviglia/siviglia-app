/*
    Client side API for reteriving Blog data.
    api version: 1.0


    example usage: 
        this.getBlogPosts().then((results) =>{
            console.log(results)
        })
        .catch((err) => {
            console.log(err);
        });
*/

const BASE_URL = 'http://localhost:5000'

module.exports = {
    getBlogPosts: function() {
        return new Promise((resolve, reject) => {
            let url = BASE_URL + "/api/v1/blog/";
            fetch(url).then((response) => {
                if(response.status !== 200){
                    reject("API call failed, status code: " 
                        + response.status);
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
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);    
            });
        });
    },
    getAmountOfBlogPosts: function(amount) {
        return new Promise((resolve, reject) =>{
            let url = BASE_URL + "/api/v1/blog/" + amount;
            fetch(url).then((response) => {
                if(response.status !== 200){
                    reject("API call failed, status code: "
                        + response.status);
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
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);    
            });
        });
    },
    getBlogPostsAfterId: function(id) {
        return new Promise((resolve, reject) =>{
            let url = BASE_URL + "/api/v1/blog/id/after/" + id;
            fetch(url).then((response) => {
                if(response.status !== 200){
                    reject("API call failed, status code: "
                        + response.status);
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
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);    
            });
        });
    },
    getPostByTitle: function(title) {
        return new Promise((resolve, reject) =>{
            let url = BASE_URL + "/api/v1/blog/title/" + title;
            fetch(url).then((response) => {
                if(response.status !== 200){
                    reject("API call failed, status code: "
                        + response.status);
                }
                return response.json();
            })

            .then((posts) => {
                let data = [];
                data.push({
                    id: posts._id,
                    date: posts.date,
                    title: posts.title,
                    discr: posts.discr,
                    text: posts.text,
                    tags: posts.tags,
                    visable: posts.visable
                });
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);    
            });
        });
    },
};
