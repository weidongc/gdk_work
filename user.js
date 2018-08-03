const express=require('express');
const pool=require('../pool.js');
const router=express.Router();
router.post('/add',(req,res)=>{
	//console.log(req.body);
	var obj=req.body;
	var sql2='SELECT sname FROM student_basic WHERE sname=? or phone=? or linkman=? or linkman_phone=?';
	pool.query(sql2,[obj.sname,obj.phone,obj.linkman,obj.linkman_phone],(err,result)=>{
		if(err) throw err;
		if(result.length>0)
		{
			res.send({code:406,msg:'aready have sname or phone or linkman or linkman_phone'});
			return;
		}else{
			if(!obj.sname){
				res.send({code:401,msg:'sname require'});
				return;
			};
			if(!obj.phone){
				res.send({code:402,msg:'phone require'});
				return;
			};
			if(!obj.linkman){
				res.send({code:403,msg:'linkman require'});
				return;
			};
			if(!obj.linkman_phone){
				res.send({code:404,msg:'linkman_phone require'});
				return;
			};
			var sql='INSERT INTO student_basic SET ?';
			pool.query(sql,obj,(err,result)=>{
				if(err) throw err;
				//console.log(result);
				if(result.affectedRows>0){
					res.send({code:200,msg:'add success'})
				}else{
					res.send({code:405,msg:'add error'});
					return;
				}
			})
		}
	})
});
router.post('/list',(req,res)=>{
	var sql='SELECT * FROM student_basic';
	pool.query(sql,(err,result)=>{
		var table=`<table border='1' cellpadding='25' cellspacing='0'>`
		table+=`<td>ID</td><td>姓名</td><td>性别</td><td>年龄</td><td>学历</td><td>毕业院校</td><td>专业</td><td>工作经验</td><td>手机</td><td>QQ</td><td>现住地址</td><td>紧急联系人</td><td>紧急联系人电话</td>`
		for(var index in result){
			table+=`<tr>`
			for (var key in result[index] ){
				table+=`<td>${result[index][key]}</td>`
			}
			table+=`</tr>`
		}
		table+=`</table>`;
		res.send(table)
	})
});
module.exports=router;