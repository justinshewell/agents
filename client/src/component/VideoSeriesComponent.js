import React, { Component } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { agentService } from "../services/AgentService";
import { videoService } from "../services/VideoService";
import { VideoCalendar } from "./VideoCalendarComponent";
import { FullCalc } from "./FullCalcComponent";

export class VideoSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
      showCalc: true,
      videos: [],
      video: {
        id: "1",
        created_at: "2021-12-17T17:28:05.000Z",
        title: "Welcome to Compound Interest",
        vidlink:
          "https://compoundinterest.com/wp-content/uploads/2021/11/01-Welcome-To-Compound-Interest-1.mp4",
        poster:
          "https://compoundinterest.com/wp-content/uploads/2021/11/Chapter-1_-Welcome-to-Compound-Interest_-The-Retirement-You-Deserve.png",
        number: 1,
        category: "none",
      },
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    const videos = await videoService.all();
    this.setState({ videos });
    console.log(videos);
  }

  switchShowCalc() {
    this.setState({ showCalc: false });
    this.setState({ colHeight: "100vh" });
  }

  setVideo = (vid) => {
    const videoId = vid.target.value;
    console.log(vid.value);
    const video = this.state.videos.find((video) => video.id === videoId);
    this.setState({ video });
    console.log(this.state.video);
  };

  render() {
    return (
      <Container
        fluid
        style={{
          backgroundColor: "rgb(211, 211, 211)",
          paddingLeft: "0px",
          border: "4px solid black",
        }}
      >
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row
              style={{
                position: "relative",
                color: "black",
              }}
              key={ag.toString()}
            >
              <Col
                sm={3}
                style={{
                  maxHeight: "100vh",
                  paddingRight: "0px",
                  backgroundColor: "rgba(211, 211, 211)",
                }}
              >
                <Row
                  style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                    paddingBottom: "2%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Button
                    className="videoButton"
                    style={{
                      width: "65%",
                    }}
                  >
                    Secure Compound Interest
                    <br />
                    Webinar Replay
                  </Button>
                </Row>
                <Row
                  style={{
                    marginTop: "2%",
                    paddingBottom: "2%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <Button
                    className="videoButton"
                    style={{
                      width: "65%",
                    }}
                  >
                    MPI®
                    <br />
                    Documentary
                  </Button>
                </Row>
                {/* <Row></Row> */}
                <Container
                  style={{
                    backgroundColor: "rgba(211, 211, 211)",
                    borderRadius: "5px",
                    padding: "0px",
                  }}
                >
                  <Row
                    style={{
                      borderBottom: "2px solid black",
                      backgroundColor: ag.primaryColor,
                      color: "white",
                      paddingTop: "2%",
                    }}
                  >
                    <h3>
                      <strong>Video Series</strong>
                    </h3>
                  </Row>
                  <Col
                    style={{
                      paddingLeft: "1%",
                      backgroundColor: "white",
                      overflow: "scroll",
                      maxHeight: "75vh",
                    }}
                  >
                    {this.state.videos
                      .filter((vid) => vid.category === "none")
                      .filter((vid) => vid.id < 10)
                      .map((vid) => (
                        <option
                          tabIndex={vid.id}
                          className="selectVideo"
                          value={vid.id}
                          onClick={this.setVideo}
                        >
                          {`${vid.id}  | ${vid.title}`}
                        </option>
                      ))}
                    {this.state.videos
                      .filter((vid) => vid.category === "none")
                      .filter((vid) => vid.id > 9)
                      .map((vid) => (
                        <option
                          tabIndex={vid.id}
                          className="selectVideo"
                          value={vid.id}
                          onClick={this.setVideo}
                        >
                          {vid.id}| {vid.title}
                        </option>
                      ))}
                    <Collapsible
                      trigger={[
                        <BsChevronDown />,
                        <h4 style={{ fontSize: "110%" }}> 8 MPI® Plans</h4>,
                      ]}
                    >
                      {this.state.videos
                        .filter((vid) => vid.category === "plans")
                        .map((vid) => (
                          <option
                            tabIndex={vid.id}
                            className="selectVideo"
                            value={vid.id}
                            onClick={this.setVideo}
                          >
                            {vid.id} | {vid.title}
                          </option>
                        ))}
                    </Collapsible>
                  </Col>
                </Container>
              </Col>
              <Col
                sm={7}
                style={{
                  backgroundColor: "rgb(225, 225, 225",
                  overflow: "scroll",
                  maxHeight: "100vh",
                }}
              >
                <Row>
                  <h1 className="videoseriestitle">COMPOUND INTEREST</h1>
                  <h2 className="videoseriessubtitle">
                    THE RETIREMENT YOU DESERVE
                  </h2>
                </Row>
                <Row style={{ marginBottom: "1%", marginTop: "1%" }}>
                  <Container
                    style={{
                      backgroundColor: ag.primaryColor,
                      width: "75%",
                      borderRadius: "5px",
                      color: "white",
                      fontWeight: "700",
                      paddingBottom: "1%",
                      paddingTop: "1%",
                    }}
                  >
                    <h3>Curtis Ray Presents</h3>
                  </Container>
                </Row>
                <Row style={{ padding: "1%" }}>
                  <div
                    style={{ position: "relative", paddingBottom: "56.25%" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={this.state.video.vidlink}
                      title={this.state.video.title}
                      frameBorder="4"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        border: "4px solid black",
                        backgroundColor: "black",
                        position: "absolute",
                        left: "0px",
                      }}
                    />
                  </div>
                </Row>
                <Row>
                  <h2 className="videofoot">ALWAYS BE COMPOUNDING™</h2>
                </Row>
                {/* <div hidden={this.state.showCalc}> */}
                <div id="theCalculator">
                  <FullCalc agent={ag} />
                </div>
              </Col>
              <Col style={{ backgroundColor: "rgb(100, 100,100" }}>
                <Row
                  style={{
                    paddingTop: "5%",
                    paddingBottom: "5%",
                    backgroundColor: "white",
                    borderRight: "4px solid black",
                  }}
                >
                  <Image fluid src={ag.profileMPIGrey} />
                </Row>
                <Row
                  style={{
                    paddingTop: "2%",
                    paddingBottom: "2%",
                    backgroundColor: "white",
                    borderRight: "4px solid black",
                  }}
                >
                  <Image fluid src={ag.logo} />
                  <p className="emailSize">{ag.email}</p>
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <VideoCalendar agent={ag} />
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <Button
                      className="videoButton"
                      // onClick={() => this.switchShowCalc()}
                      href="#theCalculator"
                    style={{marginBottom: "0px", alignItems: "center", paddingTop: "18px"}}>MPI® Calculator</Button>
                  </div>
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <Button className="videoButton">Share</Button>
                  </div>
                </Row>
                <Row
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    paddingBottom: "5%",
                    borderBottom: "1px solid black",
                  }}
                >
                  <div>
                    <Button className="videoButton">Leave A Review</Button>
                  </div>
                </Row>
              </Col>
            </Row>
          ))}
      </Container>
    );
  }
}