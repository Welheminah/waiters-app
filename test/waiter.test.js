const assert = require('assert');
const coffeeShop = require('../waiter-factory');
const pg = require("pg");
const Pool = pg.Pool;

// we are using a special test database for the tests

const connectionString = process.env.DATABASE_URL || 'postgresql://codexer:code123@localhost:5432/waiters_test';

const pool = new Pool({
    connectionString
});

describe('The waiters availability web app', function(){

    beforeEach(async function(){
       
        await pool.query("delete from waiters;");
        await pool.query("delete from managers_access;");
        
    });

    
    it('should be to take the waiters name entered', async function(){
        
        
        let waiterApp = coffeeShop(pool);
        await waiterApp.waiterName('Moipone')

        var theGetName = await waiterApp.showWaiter();
        // console.log(theGetName)
        // var set = theGetName[0].names;
        // console.log(set)
        assert.equal('Moipone', theGetName);
       

    });

    
    after(function(){
        pool.end();
    })
});