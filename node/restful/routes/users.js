let NeDB = require('nedb'); // Pacote para salvar informações no banco
let db = new NeDB({ // Cria a instancia do banco
    filename: 'users.db', // Nome do arquivo que vai ser criado para salvar os dados
    autoload: true // Se o arquivo não existir cria ele
});

module.exports = (app) => {

    app.get('/users', (req, res) =>{

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                name: 'Nome',
                email: 'email@email.com.br',
                id: 1
            }]
        });
    });
    
    app.post('/users', (req, res) => {

        // Insere o registro no banco de dados
        db.insert(req.body, (err, user)=>{

            if(err){
                console.log(`error: ${err}`)
                res.status(400).json({
                    error: err
                })
            }else{

                res.status(200).json(user)
            }
            
        });
    });

};