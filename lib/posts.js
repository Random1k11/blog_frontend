import API_URL from "../http-utils";
const fetch = require("node-fetch");


export async function getAllPostIds() {

    try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        return posts.map(post => {
            return {
                params: {
                    id: post.id.toString(),
                    all: '/'
                }
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export async function getPostData(id) {
    try {
        const res = await fetch(API_URL + id)
        const post = await res.json()
        return post
    } catch (e) {
        console.log(e)
    }
}
