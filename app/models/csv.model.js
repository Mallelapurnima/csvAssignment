
const pool=require("../config/db")


//constructor
const Csv = function (Csv) {
    this.region =  csvMsg.region;
    this.country = csvMsg.country;
    this.ItemType = csvMsg.ItemType;
    this.SalesChannel = csvMsg.SalesChannel;
    this.orderPriority=csvMsg.orderPriority;
    this.orderDate=csvMsg.oderDate;
    this.orderId=csv.oderId;
    this.shipDate=csvMsg.shipDate;
    this.unitSold=csvMsg.unitSold;
    this.unitPrice=csvMsg.unitPrice;

    this.unitCost=csvMsg.unitCost;
    this.totalRevene=csvMsg.totalRevene;
    this.totalCost=csvMsg.totalCost;
    this.totalProfit=csvMsg.totalProfit;
}
Csv.insert = (newCsv, result) => {
    
    pool.query("INSERT INTO tbl_csvmsg SET ?", newCsv, (err, res) => {

        if(err) {

            return result(null, err)                                 
        } 

        if(res.affectesRows == 0) {
            //not found student with the id
            return result({kind:'not_found'}, null)
            
        } else {
           return result(null, {id: id}) 
        }

    })
}



Csv.getAll = result => {    

    pool.query("SELECT * FROM tbl_csvmsg  ", (err, res) => {

        if (err) {

            return result(err, null);
        } 
        if(res.affectesRows == 0) {
            //not found student with the id
            return result({kind:'not_found'}, null)
        } else {

            return result(null, res)
        }
    })
}



module.exports = Csv