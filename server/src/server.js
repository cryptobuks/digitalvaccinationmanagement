const query  = require('express');
var express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

var app = express();

const db_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dccsystem'
})

app.use(cors())
app.use(express())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

/*************** APIs IN USE */

// This responds a POST request for the homepage
app.post("/api/make_appointment", (req, res) =>{
   const firstname = req.body.firstName
   const surname = req.body.surname
   const id_passport = req.body.id_passport
   const cellphone = req.body.cellphone
   const email = req.body.email

   
   const user_query = 'INSERT INTO user (user_id_passport, firstname,surname,cellphone,email) values (?,?,?,?,?)'
   const appointment_query = 'INSERT INTO appointment (user_id_passport, appointment_date) values (?,?)'

   db_connection.connect()

   if(db_connection){
     
      db_connection.query(user_query,[id_passport,firstname,surname,cellphone,email],(error,result) => {
         
        if(error !== null){
            if(error.code === "ER_DUP_ENTRY"){
               res.json("A user with this ID or Passport number already exists!")
            }
        } 
        else{
            const appoint_date = new Date(2023,01,30); 

               db_connection.query(appointment_query,[id_passport,appoint_date], (error,result) =>{

                  if(error !== null){
                     res.json("An error occured "+error.message)
                  } 
                  else{
                     res.status(200).json(firstname+' '+ surname +' you successfully made a vaccination appointment for');
                  }
               })
            
         }
      })

   }
   else{
      res.send('Impossible to connect to the database + '+ db_connection.error.message);
   
   }

})


app.post('/api/list_specific_user', (req, res) => {

   const id_passport = req.body.id_passport
   console.log("Passport..."+id_passport)
   db_connection.connect()
   if(db_connection){
      db_connection.query('SELECT * FROM user WHERE user_id_passport = ?',[id_passport], (error,result)=>{
        if(error){
           console.log("Specific user by ID: "+error.code)
           res.json("An error occured "+error.message)
        } 
        else{
            res.status(200).json(result);
         }
      })

   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }
})

app.post("/api/new_entry", (req, res) =>{

   db_connection.connect()

   const id_passport = req.body.id_passport
   const gender = req.body.gender
   const dob = req.body.dob
   const country = req.body.country
   const physicaladress = req.body.physicaladress
   const vaccine_id = req.body.vaccine_id
   
   const user_query = 'UPDATE user SET gender = ?, date_of_birth = ?, country_of_birth = ?, physical_address = ? WHERE user_id_passport = ?;'
   const vac_query = 'INSERT INTO vaccination (user_id_passport, vaccine_id) values (?,?)'

   if(db_connection){
     
      db_connection.query(user_query,[gender,dob,country,physicaladress,id_passport],(error,result) => {
      
        if(error !== null){
            console.log(error.code)
            if(error.code === "ER_DUP_ENTRY"){
               res.json("A user with this ID or Passport number already exists!")
            }
        } 
        else{
               db_connection.query(vac_query,[id_passport,vaccine_id], (error,result) =>{

                  if(error !== null){
                     console.log(error.code)
                     res.json("An error occured "+error.message)
                  } 
                  else{
                     res.status(200).json('You successfully made a vaccination entry for, \n you are ready to adminiter the choose vaccine');
                  }
               })
            
         }
      })

   }
   else{
      res.send('Impossible to connect to the database + '+ db_connection.error.message);
   
   }

})


/**END APIS in use */

// This responds with "Hello World" on the homepage
// app.get('/api/make_appointment', function (req, res) {
//     db_connection.connect()

//    if(db_connection){
//       console.log("Got a GET request for the homepage");
//       db_connection.query('INSERT INTO user (user_id_passport,firstname,surname,cellphone,email) values (?,?,?,?,?)',['OP0285679','Daniel','Nkulu','+27683529452','daniel@mail.com'],function(error,result,fields){
//         if(error){
//            res.send("An error occured "+error.message)
//         } 
//         else{
//            res.send('Successful ,Hello GET');
//          }
//       })

//    }
//    else{
//       res.send('Impossible to connect to the database +'+db_connection.error.message);
   
//    }
//    db_connection.end()
// })



// This responds a GET USER request for the /del_user page.
app.get('/list_users', function (req, res) {
   db_connection.connect()
   console.log("DB "+db_connection.state)
   if(db_connection){
      db_connection.query('SELECT * FROM user',function(error,result,fields){
        if(error){
           res.send("An error occured "+error.message)
        } 
        else{
           res.json(result);
         }
      })

   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }

   db_connection.end()
})

// This responds a GET request for the /list_user page.
app.post('/api/list_users', function (req, res) {
   db_connection.connect()
   if(db_connection){
      db_connection.query('SELECT * FROM user',function(error,result,fields){
        if(error){
           res.send("An error occured "+error.message)
        } 
        else{
           res.json(result);
         }
      })

   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }

   db_connection.end()
})

// This responds with "Hello World" on the homepage
app.get('/vaccine', function (req, res) {
   db_connection.connect()

   if(db_connection){
      const query ='INSERT INTO vaccine (vaccine_id, vaccine_name,vaccine_expiration,vaccine_no_doses,vaccine_manifacturer,vaccine_admin_route,vaccine_dosage_form) values (?,?,?,?,?,?,?)'
      db_connection.query(query,['VC00001','PFizer','2025-10-30','2','Pfizer','Intramuscular','Injection'],function(error,result,fields){
        if(error){
           res.send("An error occured "+error.message)
        } 
        else{
           res.send('Vaccine succefully inserted, Hello GET');
         }
      })
   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }
   db_connection.end()
})

// This responds a POST request for the homepage
app.post('/api/vaccine', function (req, res) {
   db_connection.connect()

   if(db_connection){
      const query ='INSERT INTO vaccine (vaccine_id, vaccine_name,vaccine_expiration,vaccine_no_doses,vaccine_manifacturer,vaccine_admin_route,vaccine_dosage_form) values (?,?,?,?,?,?,?)'
      db_connection.query(query,['VC00001','PFizer','2025-10-30','2','Pfizer','Intramuscular','Injection'],function(error,result,fields){
        if(error){
           res.send("An error occured "+error.message)
        } 
        else{
           res.send('Vaccine succefully inserted, Hello GET');
         }
      })
   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }
   db_connection.end()
})

// This responds a GET USER request for the /del_user page.
app.get('/list_vaccine', function (req, res) {
   db_connection.connect()
   if(db_connection){
      db_connection.query('SELECT * FROM vaccine',function(error,result,fields){
        if(error){
           res.send("An error occured "+error.message)
        } 
        else{
           res.json(result);
         }
      })

   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }

   db_connection.end()
})

// This responds a GET request for the /list_user page.
app.post('/api/list_vaccine', function (req, res) {
   db_connection.connect()
   if(db_connection){
      db_connection.query('SELECT * FROM vaccine',function(error,result,fields){
        if(error){
           res.send("An error occured "+error.message)
        } 
        else{
           res.json(result);
         }
      })

   }
   else{
      res.send('Impossible to connect to the database +'+db_connection.error.message);
   
   }

   db_connection.end()
})


var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://127.0.0.1", host, port)
})
