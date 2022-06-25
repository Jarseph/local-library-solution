function getTotalBooksCount(books) {
  return books.length;
}
  

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // We use reduce to accumulate the amount of borrowed books. 
  // booksCount = the tracker to count the number of books borrowed
  // book = current book object
  const booksBorrowedNum = books.reduce((booksCount, book) => {
    // We check the length of the borrows array because we don't want to do anything if the array is empty. 
    if(book.borrows.length !== 0 && book.borrows[0].returned === false) {
      // If the returned book is false we add 1 book to the count.
      return booksCount + 1;
    }
    // If there's no borrows array OR if the book has been returned we don't do anything and just return the current booksCount. 
    return booksCount;
  },0)
  
  return booksBorrowedNum;
}

function getMostCommonGenres(books) {
  // The default value of this reduce is an array because we need to return array of objects. 
  const mostCommonGenres = books.reduce((commonGenres, book) => {
    // We need to see if the genre already exisits in array
    const currentObj = commonGenres.find(c => c.name === book.genre)
    // if we found an object that exists with the genre, we increase the count. 
    if(currentObj) { 
      currentObj['count']++
    } else {
      // if no object found, we create a new one and PUSH into array. 
      const obj = {name: book.genre, count: 1}                           
      commonGenres.push(obj)
    }
    return commonGenres;
  }, [])
  
  // We sort the array by the count
  const sortedCommonGenres = mostCommonGenres.sort((a, b) => {
    return a.count < b.count ? 1 : -1
  })
  
  // If the array has more than 5 object we need to remove the elements at the end. 
  if(sortedCommonGenres.length > 5) {
    return sortedCommonGenres.slice(0, 5)
  }
  
  return sortedCommonGenres;
 }

function getMostPopularBooks(books) {
   // The default value of this reduce is an array because we need to return array of objects. 
  console.log(books);
  const mostPopularBooks = books.reduce((popularBooks, book) => {
   console.log(book.borrows) 
   const bookBorrowsCount = book.borrows.length
    const obj = {name: book.title, count: bookBorrowsCount}               
    popularBooks.push(obj)
    return popularBooks;
  }, [])
  
  // We sort the array by the count
  const sortedPopularBooks = mostPopularBooks.sort((a, b) => {
    return a.count < b.count ? 1 : -1
  })
  
  // console.log(sortedPopularBooks)
  // If the array has more than 5 object we need to remove the elements at the end. 
  if(sortedPopularBooks.length > 5) {
    return sortedPopularBooks.slice(0, 5)
  }
  
  return sortedPopularBooks;
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
