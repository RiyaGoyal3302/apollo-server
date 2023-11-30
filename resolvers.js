const connection = require('./db');

const resolvers = {
  Query: {

    filter: (_, { SiteId, AlertStatus }) => {
        return new Promise ((resolve, reject)=>{
            const query = 'SELECT * FROM alerts WHERE SiteId = ? AND AlertStatus = ?';
            connection.query(query,[SiteId, AlertStatus],(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    invoices : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from invoices';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    alertcounts : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from alertcounts';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    alerts : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from alerts';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    appointments : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from appointments';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    orderlineitems : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from orderlineitems';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    orders : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from orders';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    returns : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from returns';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    },

    shipments : () => {
        return new Promise ((resolve, reject)=>{
            const query = 'select * from shipments';
            connection.query(query,(error,res)=>{
                if(error){
                    return reject(error);
                }
                resolve(res);
            })
        })
    }
  }
};

module.exports = resolvers;
