import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

export const login = data =>{
    return request({
        method: 'POST',
        url: '/api/users/login',
        data
    })
}

export const register = data =>{
    return request({
        method: 'POST',
        url: '/api/users',
        data
    })
}

export const getArticles = params =>{
    return request({
     method: 'GET',
     url: '/api/articles',
     params
    })
}

export const getTags = () =>{
    return request({
     method: 'GET',
     url: '/api/tags',
    })
}