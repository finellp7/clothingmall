import {request} from "./request";
export function getHomeMultidata(){
    // getHomeMultidata获取首页的多个数据
    return request({
        url:'/home/multidata'

    })

}

export function getHomeGoods(type,page){
   return request({
         url:'/home/data',
         params:{
             type,
             page
         }
   })
}