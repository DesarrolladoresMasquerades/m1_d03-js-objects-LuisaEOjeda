
const user = { name: 'Nick', id: 7 };

const book1 = {
    title: 'The Catcher in the Rye',
    author: 'J.D Salinger',
    isbn: '0316769487',
    category: 'Classic Literature'
    };

const book2 = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310786',
    category: 'Classic Literature'
    };

const book3 = {
    title: 'Trainpotting',
    author: 'Irvine Welsh',
    isbn: '0446780786',
    category: 'Contemporary English Literature'
}

user.books = []

user.books.push(book1, book2)

console.log(user)

const library =[]

library.push (user)

library[0].books.push(book3)

console.log(user)

for (const user of library){
    console.log(user.name);
for (const book of user.books){
    console.log(`${book.title} , ${book.author}`);
}
}