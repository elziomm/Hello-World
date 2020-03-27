const Post = require('../models/Post');

module.exports = {
    //para excluir um post
    async destroy(req, res){
        console.log("entrou");

        const { post_id } = req.body;

        console.log(post_id);
        
        const post = await Post.findOne({ _id: post_id });

        const delete_post = await Post.collection.deleteOne(post, () => {
            console.log("deletado");
        });

        return res.json(delete_post);
    },

    //para atualizar algum post
    async update(req, res){
        const { post_id } = req.body;
        const { nome } = req.body;
        const { titulo } = req.body;
        const { descricao } = req.body;

            const post = await Post.findOne({ _id: post_id });
    
            const up_post = await Post.collection.updateOne(post, {
                $set: {
                    autor: nome,
                    titulo: titulo,
                    descricao: descricao
                }
            });            
            return res.json(up_post);
    },

    //buscando todos os post
    async index(req, res){
        const post = await Post.find({});

        return res.json(post);
    },

    //para adicionar um novo post
    async store(req, res){
        const { autor } = req.body;
        const { titulo } = req.body;
        const { descricao } = req.body;

        const post = await Post.create({
            autor: autor,
            titulo: titulo,
            descricao: descricao  
        });

        return res.json(post);

    }
};