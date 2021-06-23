import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
    render() {
        return (
            <>
                <Modal  show={this.props.show} onHide={this.props.handelClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={(e)=>this.props.createNewBook(e)}>
                            <Form.Group >
                                <Form.Label>Book Name:</Form.Label>
                                <Form.Control type="text" placeholder="Title of the book" name='name' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Description: </Form.Label>
                                <Form.Control type="text" placeholder="Description of the book" name='description' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Status: </Form.Label>
                                <Form.Control type="text" placeholder="Status" name='status' />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Book Image: </Form.Label>
                                <Form.Control type="url" placeholder="Insert the link of book image" name='image' />
                            </Form.Group>


                            <Button variant="primary" type="submit" onClick={this.props.handelClose}>
                                Add Book!
                            </Button>

                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default BookFormModal;

