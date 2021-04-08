const csvModel = require("../models/csv.model")
const fs=require('fs')
const fastcsv=require('fast-csv')


 exports.getAllCsv = (req,res) => {
   
    csvModel.getAll( (error,result)=>{

        if(error){

            return;           
        }
        else{

            let stream = fs.createReadStream("bezkoder.csv");
            let csvData = [];
            let csvStream = fastcsv
              .parse()
              .on("data", function(data) {
                result=csvData.push(data);
                res.status(200).send(result)
              
              })
              .on("end", function() {
                // remove the first line: header
                csvData.shift();
            
                // connect to the MySQL database
                // save csvData
              });
            
            stream.pipe(csvStream);
            res.status(200).send(result)
        }
        
    });
    
}




    




    