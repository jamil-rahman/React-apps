import React from 'react'
// Nested Components and React Tools

function BookList() {
    return <section> 
        <Book />
    
    </section>;
}

const Book = () => {
    return <article>
        <Image />
        <Title />
        <Author />
        <Rating />

    </article>
}

const Image = () =>{
    return <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" />
}

const Title = () => <h1>I Love You to the Moon and Back</h1>;

const Author = () => {
    return <h4>Amelia Hepworth</h4>;
}

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
