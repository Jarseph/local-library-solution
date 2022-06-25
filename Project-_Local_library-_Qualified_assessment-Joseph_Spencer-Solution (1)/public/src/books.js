function findAuthorById(authors, id) {
   let found = authors.find((author) => author.id === id);
 return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce((book1,book2) => {book1[+(book2.borrows[0] && book2.borrows[0].returned)].push(book2); return book1},[[],[]])
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let {borrows} = book;
  borrows.forEach(borrow=> {
    let account = accounts.find(acc => acc.id === borrow.id);
    account['returned'] = borrow.returned;
    result.push(account);
  });
  return result.slice(0,10) 
}
function getTotalBooksCount(books) {
  return books.length
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
