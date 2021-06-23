import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class UpdateBookForm extends Component {
    render() {
        return (
            <>
                <Modal  show={this.props.showUpdateBook} onHide={this.props.handelCloseUpdate} >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Book Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={(e)=>this.props.updateBook(e)}>
                            <Form.Group >
                                <Form.Label>Book Name:</Form.Label>
                                <Form.Control type="text" placeholder="Title of the book" name='name' onChange={(e)=>{this.props.updateName(e)}} value={this.props.bookName} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Description: </Form.Label>
                                <Form.Control type="text" placeholder="Description of the book" name='description' onChange={(e)=>{this.props.updateDescripton(e)}} value={this.props.description}/>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Status: </Form.Label>
                                <Form.Control type="text" placeholder="Status" name='status' onChange={(e)=>{this.props.updateStatues(e)}} value={this.props.status} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Book Image: </Form.Label>
                                <Form.Control type="url" placeholder="Insert the link of book image" name='image' onChange={(e)=>{this.props.updateimage_Url(e)}} value={this.props.imageUrl}/>
                            </Form.Group>


                            <Button variant="info" type="submit" onClick={this.props.handelClose}>
                                Update the book!
                            </Button>

                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UpdateBookForm
