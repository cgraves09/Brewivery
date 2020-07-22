import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import logo from '../../images/hops.png';
class AgeModal extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			show: true,
			descriptionHeader: 'We just need to check 1 thing before continuing.',
      		description: `Are you over the age of 21? Don't lie the CIA is watching you!`,
			showBtn: true
		};
	}

	handleClose = () => {
		this.setState({ show: false });
	}

	handleShow = () => {
		this.setState({ show: true });
	}
    tooYoung = () => {
        this.setState({ 
			description: 'Sorry, maybe go ask your dad for a sip of his beer?', 
			showBtn: false,
			descriptionHeader: ''
		});
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
					<Modal.Header style={{background: 'black', textAlign: 'center'}}>
						<Modal.Title style={{textAlign: 'right'}}>
							<h1>Welcome to Brewivery</h1>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{
						background: '#cf944d',
						borderRadius: '50px'}}>
						<h3 style={{	
							color: '#ffff', 
							textAlign: 'center',
							fontWeight: '300'}}
						>
							{this.state.descriptionHeader}
						</h3>
						<img className='App-logo' src={logo} alt=""/> 
						<h4 style={{
							color: '#ffff', 
							textAlign: 'center',
							fontWeight: '300'}}
						>
							{this.state.description}
						</h4>
					</Modal.Body>
					<Modal.Footer style={{background: 'black'}}>
						{this.state.showBtn ? 
						<button className="btn btn-primary btn-lg btn-block"
						 	style={{background: '#cf944d'}} 
							variant="secondary" 
							onClick={this.handleClose}
						>
						Ive got kids older than you!
                        </button> : ''}
						{this.state.showBtn ? 
							<button className="btn btn-primary btn-lg btn-block"
								style={{marginTop: 0}}
								variant="primary" 
								onClick={this.tooYoung}
							> 
							I just found my first armpit hair...
							</button> : ''}
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default AgeModal ;