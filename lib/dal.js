
const sqlite = require('aa-sqlite');
var connected = false

export async function connect(){
    if(!connected){
        await sqlite.open('tasker.sqlite');
        connected = true    
    }
}

export function initialize(dbName){
    connect()
    sqlite.run("CREATE TABLE tasks (ID INT, Name Text)");
}

export async function select(table, columns, conditions = '1', orders, groups, limits){
    connect()
    let sql = `SELECT ${columns} FROM ${table} WHERE ${conditions}`
    let rows = await sqlite.all(sql)
    return rows;
}

export async function insert(table, columns, values){
    connect()
    let sql = `INSERT into ${table}(${columns}) VALUES(${values})`
    // console.log(sql)
    await sqlite.run(sql)
    // console.log(sqlite.lastID + ' ===')
    let data = await sqlite.all('SELECT last_insert_rowid() AS ID')
    // console.log(data)
    return data[0] // {ID:sqlite.lastID}//
}
export function update(table, columns_values, conditions = '1'){
    connect()
    let sql = `UPDATE ${table} SET ${columns_values} WHERE ${conditions}`
    // console.group(sql)
    sqlite.run(sql)
    return sqlite.lastID
}