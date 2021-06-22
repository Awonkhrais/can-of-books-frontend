import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';




class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],

        }
    }
    async componentDidMount() {

        try {
            const email = this.props.auth0.user.email;

            const server = process.env.REACT_APP_SERVER_URL;
            const bookrequest = await axios.get(`${server}/books?email=${email}`);
            this.setState({
                books: bookrequest.data,
            })
        }
        catch (error) {
            console.log(error);
        }
    }


    render() {
        let bookData = this.state.books;
        console.log(bookData)
        return (
            <div>
                {this.state.books.length > 0 &&
                    bookData.map((book) => {
                        return (
                            <div>
                                <p>Book name : {book.name}</p>
                                <p>Description : {book.description}</p>
                                <p>Status : {book.status}</p>
                                <img className='imagebook' src={book.image_url} alt={book.name}/>

                            </div>)
                    })

                }</div>
        )
    }
}

export default withAuth0(BestBooks);
