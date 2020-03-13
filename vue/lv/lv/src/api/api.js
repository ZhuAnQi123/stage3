//网络请求的封装np
//001.引入axios & jsonp
import axios from '../utils/axios'

/*************************hot页面数据************************* */
let getHotgoods = (pageNum) => {
    let url = `/hehe/rest/V1/api/catalog/flashSale?pager=${pageNum}&pageSize=10`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


/************************classification页面数据************************* */
let getClassification = () => {
    let url = `/hehe/rest/V1/api/home/header`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/************************listpagr页面数据************************* */
let getListPage = (id,page) => {
    let url = `/hehe/rest/V1/api/catalog/productList/?categoryId=${id}&pager=${page}&pageSize=10`
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}




export { getHotgoods,getClassification,getListPage }