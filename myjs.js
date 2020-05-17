function requestMethod (par1,par2,par3,callback){
    var xhr =new XMLHttpRequest();//第一步：创建请求对

    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c'+par2);
   //连接
    xhr.setRequestHeader("content-Type","application/x-www-form-urlencoded");
   //头信息
    xhr.send(par3);//发送请求
    xhr.onreadystatechange = function(){

       if (xhr.readyState == 4 && xhr.readyState == 200){
           var res = JSON.parse(xhr.responseText);
           var str = res.data;
           callback(str);
       }
    }
}