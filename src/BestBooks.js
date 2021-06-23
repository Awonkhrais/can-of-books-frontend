import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
// import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import UpdateBookForm from './UpdateBookForm';





class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            show: false,
            // showBooks: false,
            showUpdateBook: false,
            bookName: '',
            description: '',
            status:'',
            imageUrl: '',
            index:0,

        }
    }
    async componentDidMount() {

        try {
            const email = this.props.auth0.user.email;

            const server = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';
            const bookrequest = await axios.get(`${server}/books?email=${email}`);
            this.setState({
                books: bookrequest.data,
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    createNewBook = async (event) => {
        event.preventDefault();

        const bookData = {
            name: event.target.name.value,
            description: event.target.description.value,
            status: event.target.status.value,
            image_url: event.target.image.value,
            email: this.props.auth0.user.email,

        };
        console.log(bookData);
        console.log(bookData.email);
        const server = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';
        const newBook = await axios.post(`${server}/addBooks`, bookData);
        

        this.setState({
            books: newBook.data,

        })



    }

    /////////////////////////////////////////////////

    deleteItem = async (index) => {
        const userEmail = {
            email: this.props.auth0.user.email
        }
        const server = process.env.REACT_APP_SERVER_URL || 'http://localhost:3030';
        const newBook = await axios.delete(`${server}/deleteBook/${index}`, { params: userEmail });

        this.setState({
            books: newBook.data
        })

    }

    //////////////////////////////////////////

    updateBook = async (event) => {
        event.preventDefault();

        const bookData = {
            name: event.target.name.value,
            description: event.target.description.value,
            status: event.target.status.value,
            image_url: event.target.image.value,
            email: this.props.auth0.user.email,

        };

        const server = process.env.REACT_APP_SERVER_URL;
        const newBook = await axios.put(`${server}/updateBook/${this.state.index}`, bookData);
        this.setState({
            books:newBook.data,
            showUpdateBook: false,
        })
    }

    showUpdateForm = (idx) => {

        this.setState({
            // show:true,
            index: idx,
            bookName: this.state.books[idx].name,
            description: this.state.books[idx].description,
            status: this.state.books[idx].status,
            imageUrl: this.state.books[idx].image_url,
            showUpdateBook: true,

           
            
        })
    }



    handelShow = () => {
        this.setState({
            show: true,

        })
    }

    handelClose = () => {

        this.setState({
            show: false,
        })
    }

    /////////////////////////////////

    // handelShowUpdate = () => {
    //     this.setState({
    //         showUpdateBook: true,
    //     })
    // }

    handelCloseUpdate = () => {

        this.setState({
            showUpdateBook: false,
        })
    }

    updateName = (e) =>{

        this.setState({
            bookName : e.target.value

        })
    }
    updateDescripton = (e) =>{

        this.setState({
            description : e.target.value

        })
    }
    updateStatues = (e) =>{

        this.setState({
            status : e.target.value

        })
    }
    imageUrl = (e) =>{

        this.setState({
            imageUrl : e.target.value

        })
    }


    render() {
        let bookData = this.state.books;
        console.log(bookData)
        return (
            <div>
                {/* <button onClick={this.handelShow} >Add New Book</button> */}

                <CardGroup>
                    {this.state.books.length > 0 &&
                        bookData.map((book, index) => {
                            return (
                                <div>

                                    <Card style={{ width: '18rem', height: '40rem' }}>
                                        <Card.Img variant="top" className='imagebook' src={book.image_url} alt={book.name} />
                                        <Card.Body style={{ width: '18rem' }}>
                                            <Card.Title>Book name :<br></br> {book.name}</Card.Title>
                                            <Card.Text>
                                                Description : <br></br>{book.description}
                                            </Card.Text>
                                            <Card.Text>
                                                Status : <br></br>{book.status}
                                            </Card.Text>
                                            <Button variant="danger" onClick={() => this.deleteItem(index)}>Delete Book!</Button>{' '}
                                            <Button variant="success" type="submit" onClick={() => this.showUpdateForm(index)}>Update Book!</Button>
                                        </Card.Body>
                                    </Card>





                                </div>)

                        })

                    }

                    <BookFormModal
                        show={this.state.show}
                        handelClose={this.handelClose}
                        createNewBook={this.createNewBook}
                    />

                    <UpdateBookForm
                        showUpdateBook={this.state.showUpdateBook}
                        handelCloseUpdate={this.handelCloseUpdate}
                        updateBook={this.updateBook}
                        showUpdateForm={this.showUpdateForm}
                        bookName={this.state.bookName}
                        description={this.state.description}
                        status={this.state.status}
                        imageUrl={this.state.imageUrl}
                        updateName={this.updateName}
                        updateDescripton={this.updateDescripton}
                        updateStatues={this.updateStatues}
                        updateimage_Url={this.imageUrl}



                    />



                </CardGroup>
                <Button variant="primary" type="submit" onClick={this.handelShow} style={{ marginTop: 10 }}>Add New Book</Button>


            </div>
        )
    }
}

export default withAuth0(BestBooks);
