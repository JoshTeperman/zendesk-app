import React from "react";
import Modal from "react-responsive-modal";


class DescriptionModal extends React.Component {

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="view-button" onClick={this.onOpenModal}>View</button>
        <Modal 
          
          open={ open } 
          onClose={ this.onCloseModal } 
          center
          closeIconSize={12}
          ariaLabelledby={'ticket description'}
        >
          <div className="modal">
            <h2 className="modal-header">{this.props.subject}</h2>
            <h4 className="modal-status">{this.props.status}</h4>
            <p className="modal-description">{this.props.description}</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default DescriptionModal;