/*
    Client side API for reteriving Blog data.
    api version: 1.0


    example usage: 
        import * as api from '../api/BlogApi';
        api.getBlogPosts().then((results) =>{
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
                            id: posts[i]._id.$oid,
                        date: posts[i].date.$date,
                        title: posts[i].title,
                        discr: posts[i].discr,
                        tags: posts[i].tags,
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
                        id: posts[i]._id.$oid,
                        date: posts[i].date.$date,
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
                        id: posts[i]._id.$oid,
                        date: posts[i].date.$date,
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

            .then((post) => {
                let data = {
                    id: post._id.$oid,
                    date: post.date.$date,
                    title: post.title,
                    discr: post.discr,
                    text: post.text,
                    tags: post.tags,
                    visable: post.visable
                };
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);    
            });
        });
    },
    getPage: function(title) {
        return new Promise((resolve, reject) =>{
            let url = BASE_URL + "/api/v1/pages/" + title;
            fetch(url).then((response) => {
                if(response.status !== 200){
                    reject("API call failed, status code: "
                        + response.status);
                }
                return response.json();
            })

            .then((page) => {
                let data = {
                    id: page._id.$oid,
                    title: page.title,
                    text: page.text,
                };
                resolve(data);
            })

            .catch((err) => {
                reject("fetch error: ", err);    
            });
        });
    },
};
