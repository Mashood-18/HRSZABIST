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
app.get("/query40",async(req,res)=>{
    try{
          const result = await pool.query('SELECT e.*, l.city, l.state_province, c.country_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id;');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query41",async(req,res)=>{
    try{
          const result = await pool.query('SELECT jh.*, e.first_name, e.last_name FROM job_history jh JOIN employees e ON jh.employee_id = e.employee_id;');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});

app.get("/query42",async(req,res)=>{
    try{
          const result = await pool.query('SELECT e.*, jh.start_date, jh.end_date, jh.job_id FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id;');
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query43",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT e.*, jh.start_date, jh.end_date, jh.job_id, d.department_name FROM employees e JOIN job_history jh ON
e.employee_id = jh.employee_id JOIN departments d ON jh.department_id = d.department_id;
`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});

app.get("/query44",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT e.*, jh.start_date, jh.end_date, jh.job_id, d.department_name, l.city, l.state_province FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id JOIN departments d ON jh.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id;
`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query45",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT e.*, jh.start_date, jh.end_date, jh.job_id, c.country_name FROM employees e JOIN job_history jh ON
e.employee_id = jh.employee_id JOIN departments d ON jh.department_id = d.department_id JOIN locations l
ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id;
`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query46",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT jh.*, e.first_name, e.last_name, d.department_name FROM job_history jh JOIN employees e ON jh.employee_id = e.employee_id JOIN departments d ON jh.department_id = d.department_id;
`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query47",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT jh.*, e.first_name, e.last_name, j.job_title FROM job_history jh JOIN employees e ON jh.employee_id = e.employee_id JOIN jobs j ON jh.job_id = j.job_id;
`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query48",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT jh.*, e.first_name, e.last_name, j.job_title, d.department_name FROM job_history jh JOIN employees e
ON jh.employee_id = e.employee_id JOIN jobs j ON jh.job_id = j.job_id JOIN departments d ON jh.department_id = d.department_id;

`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});
app.get("/query49",async(req,res)=>{
    try{
          const result = await pool.query(`SELECT jh.*, e.first_name, e.last_name, j.job_title, l.city, l.state_province FROM job_history jh JOIN employees e ON jh.employee_id = e.employee_id JOIN jobs j ON jh.job_id = j.job_id JOIN departments d ON jh.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id;
`);
          res.json(result.rows)
    }catch(err){
      res.status(500).json({Error:err.message});
    }

});

app.get('/query50',async(req,res)=>{
    try{
        const result=await pool.query('SELECT jh.*, e.first_name, e.last_name, j.job_title, c.country_name FROM job_history jh JOIN employees e ON jh.employee_id = e.employee_id JOIN jobs j ON jh.job_id = j.job_id JOIN departments d ON jh.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query51',async(req,res)=>{
    try{
        const result=await pool.query('SELECT r.region_id, r.region_name, c.country_id, c.country_name, l.location_id, l.city, l.state_province FROM regions r JOIN countries c ON r.region_id = c.region_id JOIN locations l ON c.country_id = l.country_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query52',async(req,res)=>{
    try{
        const result=await pool.query('SELECT c.country_id, c.country_name, r.region_name, l.location_id, l.city, l.state_province FROM countries c JOIN regions r ON c.region_id = r.region_id JOIN locations l ON c.country_id = l.country_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query53',async(req,res)=>{
    try{
        const result=await pool.query( 'SELECT l.location_id, l.city, l.state_province, c.country_name, r.region_name FROM locations l JOIN countries c ON l.country_id = c.country_id JOIN regions r ON c.region_id = r.region_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query54',async(req,res)=>{
    try{
        const result=await pool.query('SELECT r.region_id, r.region_name, c.country_id, c.country_name, l.location_id, l.city, l.state_province FROM regions r JOIN countries c ON r.region_id = c.region_id JOIN locations l ON c.country_id = l.country_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query55',async(req,res)=>{
    try{
        const result=await pool.query('SELECT d.department_id, d.department_name, e.employee_id, e.first_name, e.last_name, l.city, l.state_province FROM departments d JOIN employees e ON d.department_id = e.department_id JOIN locations l ON d.location_id = l.location_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query56',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, d.department_name, l.city, l.state_province, c.country_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query57',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, m.first_name AS manager_first_name, m.last_name AS manager_last_name, d.department_name, l.city, l.state_province FROM employees e LEFT JOIN employees m ON e.manager_id = m.employee_id JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query58',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, j.job_title, d.department_name, l.city, l.state_province FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query59',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, j.job_title, d.department_name, m.first_name AS manager_first_name, m.last_name AS manager_last_name FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id LEFT JOIN employees m ON e.manager_id = m.employee_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query60',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, j.job_title, d.department_name, m.first_name AS manager_first_name, m.last_name AS manager_last_name, l.city, l.state_province FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN departments d ON e.department_id = d.department_id LEFT JOIN employees m ON e.manager_id = m.employee_id JOIN locations l ON d.location_id = l.location_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query61',async(req,res)=>{
    try{
        const result=await pool.query('SELECT country_name FROM countries WHERE region_id = 1;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query62',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT d.department_id, d.department_name FROM departments d JOIN locations l ON d.location_id = l.location_id WHERE l.city LIKE 'N%';`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query63',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN employees m ON d.manager_id = m.employee_id WHERE m.commission_pct > 0.15;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query64',async(req,res)=>{
    try{
        const result=await pool.query('SELECT DISTINCT j.job_title FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.employee_id IN (SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL);');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query65',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT l.postal_code FROM locations l JOIN countries c ON l.country_id = c.country_id JOIN regions r ON c.region_id = r.region_id WHERE r.region_name = 'Asia';`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query66',async(req,res)=>{
    try{
        const result=await pool.query('SELECT DISTINCT d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id WHERE e.commission_pct < (SELECT AVG(commission_pct) FROM employees WHERE commission_pct IS NOT NULL);');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query67',async(req,res)=>{
    try{
        const result=await pool.query('SELECT DISTINCT j.job_title FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.salary > (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id);');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query68',async(req,res)=>{
    try{
        const result=await pool.query('SELECT employee_id FROM employees WHERE department_id IS NULL;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query69',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.first_name, e.last_name FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id GROUP BY e.employee_id, e.first_name, e.last_name HAVING COUNT(jh.job_id) > 1;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query70',async(req,res)=>{
    try{
        const result=await pool.query('SELECT department_id, COUNT(*) AS employee_count FROM employees GROUP BY department_id');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query71',async(req,res)=>{
    try{
        const result=await pool.query('SELECT j.job_title, SUM(e.salary) AS total_salary FROM employees e JOIN jobs j ON e.job_id = j.job_id GROUP BY j.job_title;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query72',async(req,res)=>{
    try{
        const result=await pool.query('SELECT department_id, AVG(commission_pct) AS avg_commission FROM employees GROUP BY department_id;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query73',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT c.country_name, MAX(e.salary) AS max_salary FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id GROUP BY c.country_name;
`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query74',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT e.first_name, e.last_name, d.department_name, l.city, l.state_province FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id WHERE e.first_name LIKE '%z%';`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query75',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT j.job_title, d.department_name, e.first_name, e.last_name, jh.start_date FROM job_history jh JOIN jobs j ON jh.job_id = j.job_id JOIN employees e ON jh.employee_id = e.employee_id JOIN departments d ON jh.department_id = d.department_id WHERE jh.start_date BETWEEN '1993-01-01' AND '1997-08-31';
`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query76',async(req,res)=>{
    try{
        const result=await pool.query('SELECT c.country_name, l.city, COUNT(d.department_id) AS num_departments FROM departments d JOIN locations l ON d.location_id = l.location_id JOIN countries c ON l.country_id = c.country_id JOIN employees e ON d.department_id = e.department_id GROUP BY c.country_name, l.city HAVING COUNT(e.employee_id) >= 2;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query77',async(req,res)=>{
    try{
        const result=await pool.query('SELECT e.first_name, e.last_name AS full_name, j.job_title, jh.start_date, jh.end_date FROM employees e JOIN jobs j ON e.job_id = j.job_id JOIN job_history jh ON e.employee_id = jh.employee_id WHERE e.commission_pct IS NULL OR e.commission_pct = 0;');
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query78',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT	e.first_name,	e.last_name,	e.salary,	e.department_id	FROM	employees	e	WHERE	e.salary	=
(SELECT MIN(salary) FROM employees WHERE department_id = e.department_id);
`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query79',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT * FROM employees WHERE salary =
(SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2);
`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/query80',async(req,res)=>{
    try{
        const result=await pool.query(`SELECT e.employee_id, e.first_name, e.last_name, e.salary FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees) AND e.department_id IN (SELECT department_id FROM employees WHERE first_name LIKE '%J%');
`);
        res.json(result.rows);

    }catch(err){
        res.status(500).json({Error:err.message})

    }
});
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connect sucessfully....On PORT ${PORT}`);
});