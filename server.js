const client = require('./database');

// client.query(`select * from demodata`, (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     }
    
//     client.end();
// })

// client.query(`select * from demodata where id=$1`, [1], (err, res) => {
//     if(!err){
//         console.log(res.rows);
//     }
    
//     client.end();
// })


//Async Await
const query = async() => {
    const result = await client.query(`select * from demodata where id=$1`, [1]);
    console.log(result.rows);
    // client.end();
}

query();

//Async Await 2
(async() => {
    const result = await client.query(`select * from demodata where id=$1`, [2]);
    console.log(result.rows);
    client.end();
})();
