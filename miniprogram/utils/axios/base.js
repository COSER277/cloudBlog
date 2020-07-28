const config={
  baseUrl:"http://localhost:3333/api"
}
class Base {
  constructor(){
    this.baseUrl = config.baseUrl
  }
  //封装数据请求
  axios(method,url,data){
    /*
    params请求需要的参数
    (method,url,data)
    */
     return new Promise((resolve,reject)=>{
       wx.request({
         url: this.baseUrl+url,
         method:method||'get',
         data: data||'',
         success(res){
           if(res.statusCode===200){
             resolve(res.data)
           }else{
             reject(res)
           }           
         },
         fail(err){
           reject(err)
         }
       })
     })
  }
}
export default Base