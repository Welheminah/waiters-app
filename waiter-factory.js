module.exports = function coffeeShop(pool){


   async function waiterName(user){
    var name = user.charAt(0).toUpperCase() + user.toLowerCase().slice(1);
    var test = regex.test(name);

    if (!test) {
        return "Invalid"
    }
    // let name = waiter;
//    let name = waiter.trim().charAt(0).toUpperCase().toLowerCase().slice(1);

   var dbName = await pool.query('SELECT names FROM waiters WHERE names = $1', [name]);
   if(dbName.rowCount === 0){
       await pool.query('INSERT INTO waiters(names) VALUES($1)', [name])
   }
   }


   async function showTheWaiters(waiter){
    let displayWaiter = await pool.query('SELECT *  FROM waiters WHERE names = $1', [waiter])
    // console.log(displayWaiter)
    return displayWaiter.rows;
}

async function setDays(){
    let days = await pool.query('SELECT * FROM theDays')
    return days.rows
}

async function getTheDays(the_days) {
    var daysId = await pool.query("SELECT id FROM theDays where the_days = $1", [the_days])
    return daysId.rows[0].id;
};


async function selectingDays(checkbox){


}


async function reset(){
    let clear = await pool.query('DELETE * FROM managers_access')
    return clear;
}

    return{
        waiterName,
        // showWaiter,
        showTheWaiters,
        reset,
        getTheDays,
        setDays,
        selectingDays
    }
};