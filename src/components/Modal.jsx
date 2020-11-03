import React from "react";
import "./modal.css";
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';

export default class Modal extends React.Component {
   onClose = e => {
      this.props.handleRandom()
     this.props.onClose && this.props.onClose(e);
   };
  render() {
     if (!this.props.show) {
      return null;
    }
    return (
      <>
        <div className="modal">
         <h2>Get a Random Cat Fact Enter Number Below:</h2>
         <div className="content">{this.props.children}</div>
         <div className="actions">
           <Button 
              variant="outlined" 
              color="Primary" 
              onClick={this.onClose}>{this.props.buttonValue}
           </Button>
         </div> 
       </div>
      </>
    );
  }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};