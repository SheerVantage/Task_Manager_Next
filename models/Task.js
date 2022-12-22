import Model from "../lib/Model";
import * as db from "../lib/dal"

class Task extends Model{
    table = 'tasks'
    fields = '*'
    
    constructor(){
        super()
    }

    async GetRecords(conditions = ''){
        let rows =  await db.select('tasks', "*")
        return rows
    }
    async GetRecord(conditions = ''){
        let rows =  await db.select('tasks', "*", conditions)
        return rows[0]
    }
    async Save(data){
        // return data
        let result = '', values = ''
        let fields = Object.keys(data)
        // return fields
        if(data.ID){
            fields = fields.map(field => `${field} = '${data[field]}'`)
            fields = fields.join(', ')
            let conditions = `ID = ${data.ID}`
            result = await db.update(this.table, fields, conditions)
        }
        else{
            fields = fields.reduce( ( str, field ) => str += (str.length == 0 ? '' : ', ') +  `${ field }`, '' )
            values = Object.values(data).reduce( ( str, value ) => str += (str.length == 0 ? '' : ', ') + `'${value}'`, '' )
            result = await db.insert(this.table, fields, values )
            console.log(result)
        }
        return result
    }

}

module.exports = new Task()