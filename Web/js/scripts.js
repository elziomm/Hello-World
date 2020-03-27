let lista;
let aux = 0;
let aux2 = 0;
let _id = "";

function posts() { axios.get('http://localhost:3333/post')
    .then( (response) => criaLista(response.data))
    .catch(error => console.log(error))

    const criaLista = ( post ) => {
        lista = post;
        const divAutor = document.getElementById('post')
        post.map(autor => {
            const autor_um = document.createElement('div')
            autor_um.innerHTML = "\n" +
                "        <div class=\"col mb-4 animacao\">\n" +
                "          <div class=\"card h-100\">\n" +
                "\n" +
                "            <div class=\"card-header\" id=\"nome_autor\">\n" +
                "                 <img src=\"img/avatar.png\" class=\"img-perfil\">\n" +
                "\n" +
                "              <p class=\"font-italic font-weight-bold\">" + `${autor.autor}` + "</p>\n" +
                "            </div>\n" +
                "\n" +
                "            <div class=\"card-body\" id=\"post\">\n" +
                "              <h5 class=\"card-title font-weight-bold\">"+ `${autor.titulo}` +"</h5>\n" +
                "              <p class=\"card-text\">"+ `${autor.descricao}` +"</p>\n" +
                "            </div>\n" +
                "\n" +
                "            <div class=\"card-footer\">\n" +
                "              <a class=\"btn float-right\" data-toggle=\"modal\" data-target=\"#atualizar\" type=\"button\" onclick=\"edit(this)\" value=\"" + aux++ +"\"><img src=\"img/pencil.png\" width=\"40px\"></a>\n" +
                "              <a class=\"btn float-right\" onclick=\"apagar(this)\" value=\"" + aux2++ +"\" role=\"button\"><img src=\"img/eraser.png\" width=\"40px\"></a>\n" +
                "            </div>\n" +
                "\n" +
                "          </div>\n" +
                "        </div>"
            divAutor.appendChild(autor_um)
        })
    }
}
    posts();

    function edit(x){
        _id = document.getElementById("codigo").value = lista[x.getAttribute("value")]._id,
        document.getElementById("autor").value = lista[x.getAttribute("value")].autor;
        document.getElementById("titulo").value = lista[x.getAttribute("value")].titulo;
        document.getElementById("descricao").value = lista[x.getAttribute("value")].descricao;
        
        aux = 0;
    }

    function apagar(y){
        if (confirm('Deseja realmente deletar este registro?')) {
            axios.delete('http://localhost:3333/post', {
                post_id: lista[y.getAttribute("value")]._id
            });
            window.location.reload();
        }
    }

    function atualizar(){
        var nome = document.getElementById("autor").value;
        var titulo = document.getElementById("titulo").value;
        var descricao = document.getElementById("descricao").value;

        axios.put('http://localhost:3333/post', {
            post_id: _id,
            nome: nome,
            titulo: titulo,
            descricao: descricao
        });
        
        window.location.reload();
    }

    function inserir(){

        axios.post('http://localhost:3333/post', {
            autor: document.querySelector("[name='autor']").value,
            titulo: document.querySelector("[name='titulo']").value,
            descricao: document.querySelector("[name='descricao']").value
        });
        alert('Evento inserido com sucesso!');
        window.location.reload();
    }