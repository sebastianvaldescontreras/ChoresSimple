const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'ChoresDB',
  port: 5432
})

client.connect();

const ChoresService = {};

ChoresService.updateChore = async (_data)=>{
  try{
    await client.query("UPDATE CHORES SET NAME = ($1),DESCRIPTION = ($2) WHERE ID = ($3)",
    [_data.name, _data.description, _data.id], function(err, result) {
      if (err) {
        return console.error('Error in query', err);
      }
      console.log(result.rowCount);
      return result.rowCount;
    });
  }catch(error){
    throw Error("error");
  }
}

ChoresService.insertChore = async (_data)=> {
  try{
    console.log(_data.name);
    await client.query("INSERT INTO CHORES (NAME, DESCRIPTION) VALUES (($1),($2))",
    [_data.name, _data.description], function(err, result) {
      if (err) {
        return console.error('Error in query', err);
      }
      return result.rowCount;
    });
  }catch(error){
    throw Error("error");
  }
}

ChoresService.deleteChore = async (_data)=> {
  try{
    await client.query("DELETE FROM CHORES WHERE ID = ($1) AND NAME = ($2) AND DESCRIPTION = ($3)",
    [_data.id, _data.name, _data.description], function(err, result) {
      if (err) {
        return console.error('Error in query', err);
      }
      return result.rowCount;
    });
  }catch(error){
    throw Error("error");
  }
}

ChoresService.selectChore = async (_data)=>{
  try{
    let {rows} = await client.query('SELECT * FROM CHORES');
    console.log(rows);
    return extracData(rows);
  }catch(error){
    throw Error("error");
  }
}

function extracData(_data){
  return JSON.parse(JSON.stringify(_data))[0];
}

module.exports = ChoresService;
  
 