const express=require('express');
const bodyParser=require('body-parser');
const user=require('./routes/user.js');
const app=express();
app.listen(8080,()=>{
	console.log("服务器启动成功，监听端口8080...")
});
app.use(express.static('./static'));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use('/user',user);