function findAccountById(accounts, idToMatch) {}

function sortAccountsByLastName(accounts) {
    const sortedAccounts = accounts.sort((first, second) => first.name.last - second.name.last);
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  const booksBorrowed = books.reduce(borrow)
}

function getBooksPossessedByAccount() {}

function findAuthorById() {}

function findBookById() {}

function partitionBooksByBorrowedStatus() {}

function getBorrowersForBook() {}

function getTotalBooksCount() {}

function getTotalAccountsCount() {}

function getBooksBorrowedCount() {}

function getMostCommonGenres() {}

function getMostPopularBooks() {}

function getMostPopularAuthors() {}

const module = { exports: {} };
