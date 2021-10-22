module.exports = function coffeeShop(pool){


   async function waiterName(waiter){
    try {
        let name = waiter.trim().toUpperCase();
        await pool.query('INSERT INTO waiters(names)VALUES("$1")', [name])
//         var dbName = await pool.query('SELECT names FROM waiters WHERE names = $1', [name]);
//         if(dbName.rowCount === 0){
//             await pool.query('INSERT INTO waiters(name) VALUES($1)', [name])
//    }
    } catch (error) { 
    }
}

   //try to display all the waiters in the database
   async function showWaiter(){
       let displayWaiter = await pool.query('SELECT *  FROM waiters')
       return displayWaiter.rows;
   }


    return{
        waiterName,
        showWaiter
    }
};