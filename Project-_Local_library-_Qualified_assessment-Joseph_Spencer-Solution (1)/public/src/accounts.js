function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
   accounts.sort((first, second) => first.name.last > second.name.last ? 1 : -1);
  return accounts;
  
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
 for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    total += 1;
     }
      }
 }
 return total;
}


function getBooksPossessedByAccount(account, books, authors) {
 let borrowMatch = [];
 books.forEach((book) => {
     const borrowsArray = book.borrows.filter((b) => {
       if(b.returned === false && b.id === account.id) { 
         return b;
       }
     });
       if (borrowsArray.length === 0) { 
         return;
       }
     const author = authors.find(author => author.id === book.authorId);
     book.author = author;
     book['borrows'] = borrowsArray
     borrowMatch.push(book)
 })
  return borrowMatch;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
