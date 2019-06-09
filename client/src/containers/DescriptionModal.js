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
          <h2>{this.props.subject}</h2>
          <h4>{this.props.status}</h4>
          <p>{this.props.description}</p>
        </Modal>
      </div>
    );
  }
}

export default DescriptionModal;