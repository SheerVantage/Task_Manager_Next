

export default async function handler(req, res) {
    // res.json(req.query)
    const { e:entity, a:action, id } = req.query
    // console.log(req.query)
    let conditions, Instance = entity ? await import(`../../models/${entity}.js`) : ''
    if(req.method == 'POST'){
        // res.json(req.body.Name)
        // console.log(req.body.Name)
    }
    else if(req.method == 'GET'){
        if(action == 'GetRecord' && id){
            // res.json({Name:'this is a test - ' + id})
            conditions = 'ID = ' +id
        }
    }

    let result = await Instance[action](conditions || req.body)

    res.status(200).json( result )

}
