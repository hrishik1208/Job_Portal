// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const express = require('express');
// const mongoose = require("mongoose");

// import alert from 'alert'
const app = express();
// const popups = require('popups');
// const lodash = require("lodash");


const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var companysignupemail;
var companypassword;
var companyname ;
var position ;
var  ctc;
var clientsignupemail;
var clientpassword;
 var name1;
 var skills;
 var position;
 var btn;
 var expected;
 var name2;
 var Name11;
 var name4="google";
 var name5;
 var name6;
 
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );



app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(express.static("public"));
app.get('/',function(req,res){
 res.render('home.ejs');
});
mongoose.connect("mongodb+srv://Lalit-mehta:Lalit1234@cluster0.pioml.mongodb.net/jobportal");

const itemschema = {
    companysignupemail:String,
    companypassword:String,
    clientname:String,
    companyname :String,
    position :String,
    ctc:String,
    mobilenumber:Number,
     clientsignupemail:String,
clientpassword:String,
name1:String,
skills:String,
position:String,
expected:String,
name2:String,
name5:String,
    };
    const Item = mongoose.model("Item" , itemschema);
    const Item2 = mongoose.model("Item2" , itemschema);
    const Item3 = mongoose.model("Item3" , itemschema);
    const Item4 = mongoose.model("Item4" , itemschema);
    
app.get('/company_login',function(req,res){
    res.render('signin_company2.ejs');
   });
 app.get('/company_signup',function(req,res){
    res.render('company_signup.ejs');;
   });
   app.get('/dashbord',function(req,res){
    Item.find({},function( err, founditem){
        res.render('dashbord.ejs',{Name:name6,companysignupemail:founditem,position:founditem,companyname:founditem,ctc:founditem})})

    
   });
   app.get('/company_post',function(req,res){
    res.render('company_post.ejs');
   });
   app.get('/job_card',function(req,res){
    res.render('job_card.ejs');
   });
   app.get('/client_login',function(req,res){

    



    res.render('client_login.ejs');
   });
   app.get('/list',function(req,res){
    Item.find({},function( err, Founditem){
        res.render('list',{companysignupemail:Founditem})})
   });
   app.get('/clientsignup',function(req,res){
    res.render('clientsignup.ejs');
   });
   app.get('/ABOUTUS',function(req,res){
    res.render('ABOUT_US.ejs');
   });
   app.get('/candidatelist',function(req,res){
    Item4.find({},function( err, founditem){
        var list1=[];
        var list2=[];
        var list3=[];
        var list4=[];
        var list5=[];
        for(var i=0;i<founditem.length;i++){
            let c=founditem[i].name2;
            let d=name6;
            if(c === d){
                list1.push(founditem[i].name1);
                list2.push(founditem[i].name2);
                list3.push(founditem[i].skills);
                list4.push(founditem[i].position);
                list5.push(founditem[i].expected);
            }
            
            // if(founditem[i].name2 === 'google'){
            //     list.push(founditem[i]);
            // }
        }
        console.log(list1.length)
    
      
    res.render('candidatelist.ejs',{name6:name6,List1:list1,List2:list2,List3:list3,List4:list4,List5:list5})})
   
   });
   app.get('/card',function(req,res){
       Item.find({},function( err, founditem){

   
        
    
res.render('card',{companysignupemail:founditem,position:founditem,companyname:founditem,ctc:founditem})})
       })
    app.get('/card6',function(req,res){
        Item.find({},function( err, founditem){
        res.render('card6',{companysignupemail:founditem,position:founditem,companyname:founditem,ctc:founditem})})
    });
    app.post("/candidatedata",function(req,res){
        name1 =req.body.name;
        skills =req.body.skills;
        position = req.body.position;
        
        expected=req.body.expected;
        name2=btn;
        
        // console.log("hello");

        const item4 = new Item4({
            name1:name1,
            skills:skills,
            position:position,
            expected:expected,
            name2:name2,

          });
          item4.save();
          res.redirect("/card6");

    });;
    app.post('/btn',function(req,res){
         btn=req.body.btn;
         console.log(btn);
         res.redirect('card')
    });
   app.post("/company_login",function(req,res){
    var signinmail = req.body.emailcompany;
    var password = req.body.passwordcompany;

    Item2.find({},function( err, founditem){
        if(err){
            console.log(err);
        }
        else{
        // console.log(item1);
        
     founditem.forEach(function(found){
         if(signinmail===(found.companysignupemail) && password === (found.companypassword)){
            
             name6=found.name5;
             console.log(name6);

            res.redirect('/dashbord');

         }
    //  console.log(found.clientn);
     })
    }
    });
   });
   app.post('/clientsignup',function(req,res){
    clientsignupemail=req.body.clientsignupemail;
    clientpassword = req.body.clientpassword; 
    const item3 = new Item3({
        clientsignupemail:clientsignupemail,
        clientpassword:clientpassword,
      });
      item3.save();
      res.redirect('/card6');

   })
   app.post('/company_signup',function(req,res){
       companysignupemail=req.body.companysignupemail;
       companypassword = req.body.companypassword;
       name5=req.body.name;
       console.log(name5);
       
    //    name4 = req.body.name;
       var sign= req.body.Sign_Up;

       const item2 = new Item2({
        companysignupemail :companysignupemail,
        companypassword:companypassword,
        name5:name5,
      });
      item2.save();
    //   console.log(sign+"this");
     
      res.redirect('company_login');


   })
   app.post('/client_login',function(req,res){
    var signinmail = req.body.clientemail;
    var password = req.body.clientpassword;
    Item3.find({},function( err, founditem){
        if(err){
            console.log(err);
        }
        else{
        // console.log(item1);
        
     founditem.forEach(function(found){
         if(signinmail===(found.clientsignupemail) && password === (found.clientpassword)){
            console.log("hel");
            res.redirect('/card6');

         }
    //  console.log(found.clientn);
     })
    }
    });
   })
   app.post("/dashbord",function(req,res){
    companyname = req.body.companyname;
    position = req.body.position;
    ctc= req.body.ctc;
    const item1 = new Item({
       companyname:companyname,
       position:position,
       ctc:ctc,

      });
      item1.save();
      res.redirect('/dashbord');
       
   })
app.listen(process.env.PORT ||3000,function(){

});
  