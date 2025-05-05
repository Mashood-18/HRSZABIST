const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",async(req,res)=>{
    try{
          res.json('Welcome To HR API');
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/emp",async(req,res)=>{
    try{
          const result = await pool.query('select * from employees');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/EmpCount",async(req,res)=>{
    try{
          const result = await pool.query('select Count(*) from employees');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/Empreg",async(req,res)=>{
    try{
          const result = await pool.query('select Count(*) from regions');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/EmpCoun",async(req,res)=>{
    try{
          const result = await pool.query('select Count(*) from countries');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connect sucessfully....On PORT ${PORT}`);
});