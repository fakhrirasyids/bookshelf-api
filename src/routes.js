const { 
    addBooksbyHandler, 
    getBooksbyHandler, 
    getBooksbyIdHandler, 
    editBookbyIdHandler, 
    deleteBookbyIdHandler 
} = require("./handler");


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksbyHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooksbyHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksbyIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookbyIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookbyIdHandler,
    },
];


module.exports = routes;