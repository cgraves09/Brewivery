import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'

class AgeModal extends Component {
	constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
        this.tooYoung = this.tooYoung.bind(this);

		this.state = {
			show: true,
            description: 'We just need to check 1 thing before continuing. Are you over the age of 21? Don\'t lie the CIA is watching you!',
            showBtn: true
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
    tooYoung() {
        this.setState({ description: 'Sorry, maybe go ask your dad for a sip of his beer?', showBtn: false });
    }

	render() {
		return (
			<>
				<Modal 
				size="lg"
      			aria-labelledby="contained-modal-title-vcenter"
      			centered  
				style={{
					background: 'black', 
					border: 'solid 2px #ffff'
				}} 
				show={this.state.show} 
				onHide={this.handleClose} 
				backdrop="static" 
				keyboard={false}>
					<Modal.Header style={{background: 'black'}}>
						<Modal.Title style={{textAlign: 'right'}}><h1>Welcome to Brewivery</h1></Modal.Title>
					</Modal.Header>
					<Modal.Body style={{background: 'black'}}>{this.state.description}</Modal.Body>
					<Modal.Footer style={{background: 'black'}}>
						{this.state.showBtn ? <Button style={{background: '#cf944d'}} variant="secondary" onClick={this.handleClose}>
							Ive got kids older than you!
                        </Button> : ''}
						{this.state.showBtn ? <Button variant="primary" onClick={this.tooYoung}> I just found my first armpit hair...
						</Button> : ''}
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default AgeModal ;