import React from 'react'

// Nested Components and React Tools

function BookList() {
    return <section className = "booklist"> 
        <Book 
        img={book1.url}
        title = {book1.title}
        author = {book1.author}
        />
         <Book 
        img={book2.url}
        title = {book2.title}
        author = {book2.author}
        /> <Book 
        img={book3.url}
        title = {book3.title}
        author = {book3.author}
        /> <Book 
        img={book4.url}
        title = {book4.title}
        author = {book4.author}
        />
   
    
    </section>;
}

const Book = (props) => {
    const {img,title,author} = props
    return <article className="book">
        <img src={props.img} alt='' />
        <h1>{props.title}</h1>
        <h4>{props.author}</h4>
        <Rating />

    </article>
}


const book1={
    title: `Oh, the Places You'll Go!`,
    author: `Dr. Seuss`,
    url:`https://images-na.ssl-images-amazon.com/images/I/81QRyjf28tS._AC_UL200_SR200,200_.jpg`
};
const book2={
    title: `Javascript: The Good Parts`,
    author: `D Crockford`,
    url:`https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg`
};

const book3={
    title: `JavaScript: The Definitive Guide 6e: Activate`,
    author: `David Flanagan `,
    url:`https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg`
};
const book4={
    title: `Learn JavaScript VISUALLY`,
    author: `Ivelin Demirov `,
    url:`https://images-na.ssl-images-amazon.com/images/I/81T4J9ciI6L._AC_UL200_SR200,200_.jpg`
};
// const Image = () =>{
//     return <img src={url} />
// }

// const Title = () => <h1>{title}</h1>;

// const Author = () => {
//     return <h4>{author}</h4>;
// }

const Rating = () =>{
    return <div>
        <span className="fa fa-star checked" style={{color:'orange'}}></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
    </div>;
}
export default BookList;
