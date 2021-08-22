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
        path: '/books/{bookId}',
        handler: getBooksbyIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookbyIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookbyIdHandler,
    },
];


module.exports = routes;