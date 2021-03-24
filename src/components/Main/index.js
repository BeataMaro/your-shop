import React from "react";
import Modal from "../Modal";

class Main extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleState = (e) => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleState}>Open Modal</button>
        {this.state.isModalOpen && (
          <Modal
            id='modal'
            isOpen={this.state.isModalOpen}
            onClose={this.toggleState}
          >
            <div className='box-body'>I am the content of the modal</div>
          </Modal>
        )}
      </>
    );
  }
}

export default Main;
