import * as React from 'react'
import {
    Form,
} from 'react-bootstrap';

export default class AvatarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Custom select Small</Form.Label>
                <Form.Control as="select" size="sm" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Custom select Large</Form.Label>
                <Form.Control as="select" size="lg" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
    }
}