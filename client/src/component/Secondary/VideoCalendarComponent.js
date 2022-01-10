import React, { Component } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { InlineWidget } from "react-calendly";

export class VideoCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      agent: this.props.agent,
    };
  }


  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
            <div style={{marginTop: "5%"}}>
              <Button
                className="videoCalendarButton"
                onClick={() => this.setState({modal: true})}
              >
                SCHEDULE A 1 ON 1
              </Button>
 
              <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
                <ModalBody>
                  <InlineWidget url={this.state.agent.calendly} />
                </ModalBody>
                  <Button
                    style={{backgroundColor: this.state.agent.secondaryColor}}
                    onClick={() => this.setState({modal: false})}

                  >
                    Close
                  </Button>
              </Modal>
 
            </div>
    );
  }
}