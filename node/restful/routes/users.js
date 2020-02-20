let NeDB = require('nedb'); // Pacote para salvar informações no banco
let db = new NeDB({ // Cria a instancia do banco
    filename: 'users.db', // Nome do arquivo que vai ser criado para salvar os dados
    autoload: true // Se o arquivo não existir cria ele
});

module.exports = (app) => {

    let route = app.route('/users');

    route.get((req, res) =>{

        // Busca todos os dados do bd de forma ordenada crescente, se quissese decrescente é só passar -1
        db.find({}).sort({name:1}) .exec((err, users)=>{

            if (err) {
                app.utils.error.send(err, req, res);
            }else{

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users //ECMA6 => Quando a chave é igual ao dados passado não precisa passar os 2, passa somente a chave
                });      
            }
        })
    });
    
    route.post((req, res) => {

        // Insere o registro no banco de dados
        db.insert(req.body, (err, user)=>{

            if(err){
                app.utils.error.send(err, req, res);
            }else{

                res.status(200).json(user)
            }
            
        });
    });

};