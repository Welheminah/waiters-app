module.exports = function coffeeShop(pool){


   async function waiterName(waiter){
    try {
        let name = waiter.charAt(0).trim().toUpperCase() + waiter.toLowerCase().slice(1);
        // await pool.query('INSERT INTO waiters(names)VALUES($1)', [name])
        var dbName = await pool.query('SELECT names FROM waiters WHERE names = $1', [name]);
        if(dbName.rowCount === 0){
            await pool.query('INSERT INTO waiters(names) VALUES($1)', [name])
   }
    } catch (error) { 
        // console.log(error)
    }
}

   //try to display each waiter in the database
   async function showWaiter(){
       let oneWaiter = await pool.query('SELECT *  FROM waiters')
        
       return oneWaiter;
       
   }

   //try to display all waiters in the database
   async function showTheWaiters(){
    let displayWaiter = await pool.query('SELECT *  FROM waiters WHERE names = $1')
    return displayWaiter.rows;
}

async function getTheDays(the_days) {
    var daysId = await pool.query("SELECT id FROM theDays where the_days = $1", [the_days])
    return daysId.rows[0].id;
};


async function setDays(checkbox){
    

}


async function reset(){
    let clear = await pool.query('DELETE * FROM managers_access')
    return clear;
}

    return{
        waiterName,
        showWaiter,
        showTheWaiters,
        reset,
        getTheDays,
        setDays
    }
};