import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

export default (ctx) =>{
    // Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    
    const { user } = ctx.store.state

    if(user && user.token){
        config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}

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

export const getFeedArticles = params =>{
    return request({
     method: 'GET',
     url: '/api/articles/feed',
     params
    })
}

export const addFavorite = slug =>{
    return request({
     method: 'POST',
     url: `/api/articles/${slug}/favorite`
    })
}

export const deleteFavorite = slug =>{
    return request({
     method: 'DELETE',
     url: `/api/articles/${slug}/favorite`
    })
}

export const getArticle = slug =>{
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}

export const follow = username =>{
    return request({
        method: 'POST',
        url: `/api/profiles/${username}/follow`
    })
}

export const unfollow = username =>{
    return request({
        method: 'DELETE',
        url: `/api/profiles/${username}/follow`
    })
}

export const getComments = slug =>{
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`
    })
}

export const addComment = (comment, slug) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/comments`,
        comment
    })
}

