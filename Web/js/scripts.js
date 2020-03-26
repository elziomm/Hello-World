axios.get('http://localhost:3333/post')
    .then(response => criaLista(response.data))
    .catch(error => console.log(error))

const criaLista = ( post ) => {
    const divAutor = document.getElementById('post')
    post.map(autor => {
        const autor_um = document.createElement('div')
        autor_um.innerHTML = "\n" +
            "        <div class=\"col mb-4 animacao\">\n" +
            "          <div class=\"card h-100\">\n" +
            "\n" +
            "            <div class=\"card-header\" id=\"nome_autor\">\n" +
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
            "              <a class=\"btn float-right\" data-toggle=\"modal\" data-target=\"#exampleModal\" type=\"button\"><img src=\"img/pencil.png\" width=\"40px\"></a>\n" +
            "              <a class=\"btn float-right\" href=\"#\" role=\"button\"><img src=\"img/eraser.png\" width=\"40px\"></a>\n" +
            "            </div>\n" +
            "\n" +
            "          </div>\n" +
            "        </div>"
        divAutor.appendChild(autor_um)
    })
}