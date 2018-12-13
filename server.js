const mongodb=require("mongodb")
const MongoClient=mongodb.MongoClient;
const url="mongodb://localhost:27017"

const express=require("express")
const http=express()

http.listen("8080",()=>{
	console.log("ok")
})

http.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*")
	next()
})

http.get("/add",(req,res)=>{
	MongoClient.connect(url,(err,db)=>{
		let dbase=db.db("bBox")
		dbase.collection("qwer").insertOne(req.query,(err,data)=>{
			res.send("ok")
		})
		
	})
})

http.get("/api",(req,res)=>{
	MongoClient.connect(url,(err,db)=>{
		let dbase=db.db("bBox")
		dbase.collection("qwer").find().toArray((err,data)=>{
			res.send(data)
		})
	})
})

http.get("/del",(req,res)=>{
	MongoClient.connect(url,(err,db)=>{
		let dbase=db.db("bBox");
		dbase.collection("qwer").deleteOne({_id:mongodb.ObjectId(req.query.id)},(err,data)=>{
			res.send("ok")
		})
	})
})
