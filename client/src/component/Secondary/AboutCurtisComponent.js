import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { agentService } from "../../services/AgentService";

export class AboutCurtis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: this.props.agent,
    };
  }

  async componentDidMount() {
    const ID = this.props.Id;
    const agentObject = { agentID: ID };
    const agent = await agentService.one(agentObject);
    this.setState({ agent });
    console.log(this.props.agent);
    console.log(ID);
  }

  render() {
    function toggleBio() {
      var x = document.getElementById("bioBlock");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    return (
      <Container fluid>
        {this.state.agent &&
          this.state.agent.map((ag) => (
            <Row key={ag.toString()}>
              <Row style={{ backgroundColor: "whitesmoke", paddingTop: "1%" }}>
                <h1>WHO IS CURTIS RAY?</h1>
              </Row>
              <Row
                style={{
                  backgroundImage: `-webkit-linear-gradient(45deg, ${ag.primaryColor} 40%, white 40%)`,
                }}
              >
                <Col xs={5}>
                  <Image
                    src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/SDRPHomeBackground.png"
                    fluid
                    style={{ marginBottom: "-3px", zIndex: "1" }}
                  />
                </Col>
                <Col xs={5}>
                  <Container
                    style={{
                      borderRadius: "15px",
                      minHeight: "300px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <ul style={{ textAlign: "left", fontSize: "125%" }}>
                      <li>FORBES Compound Interest Expert</li>
                      <li>Two-Time Best Selling Author</li>
                      <li>
                        Compound Interest: The Retirement You Deserve Video
                        Instructor
                      </li>
                      <li>Creator & Inventor of the MPI® Strategy </li>
                      <li>Married, Five Kids</li>
                      <li>Lives in Gilbert, AZ</li>
                    </ul>
                    <br />
                    <Button
                      variant="link"
                      style={{ color: "black" }}
                      onClick={() => {
                        toggleBio();
                      }}
                    >
                      <strong style={{ color: "black" }}>READ BIO</strong>
                    </Button>
                    <p
                      id="bioBlock"
                      style={{
                        color: "black",
                        display: this.state.bioDisplay,
                      }}
                    >
                      Behold, this is Curtis' bio
                    </p>
                    {/* <Image src={ag.familyPic} rounded fluid style={{paddingBottom: "10px", maxHeight: "600px", width: "90%"}} /> */}
                  </Container>
                </Col>
              </Row>
              <Row style={{ backgroundColor: ag.secondaryColor }}>
                <Col>
                  <h1>Curtis Ray's Best Sellers</h1>
                </Col>
                <Col>
                  <h1>Curtis Ray's Documentary</h1>
                </Col>
              </Row>
              <Row style={{ backgroundColor: ag.primaryColor }}>
                <Col>
                  <Container
                    style={{ backgroundColor: "white", paddingBottom: "2%" }}
                  >
                    <Row style={{ marginBottom: "2%", marginTop: "1%" }}>
                      <Col style={{ margin: "auto" }}>
                        <strong style={{ width: "5vw", margin: "auto" }}>
                          As Seen On
                        </strong>
                      </Col>
                      <Col style={{ margin: "auto" }}>
                        <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/Forbes-logo black.png"
                          alt="Forbes Black Logo"
                          style={{ width: "5vw", margin: "auto" }}
                        />
                      </Col>
                      <Col style={{ margin: "auto" }}>
                        <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/YahooFinanceLogo-black.png"
                          alt="Yahoo Finance Black Logo"
                          style={{ width: "5vw", margin: "auto" }}
                        />
                      </Col>
                      <Col style={{ margin: "auto" }}>
                        <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/entrepreneurblack.png"
                          alt="Entrepreneur Black Logo"
                          style={{ width: "5vw", margin: "auto" }}
                        />
                      </Col>
                      <Col style={{ margin: "auto" }}>
                        <Image
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/icons/stockhouse-black.png"
                          alt="Stockhouse Black Logo"
                          style={{ width: "5vw", margin: "auto" }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={1}></Col>
                      <Col>
                        <Image
                          fluid
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/EveryoneEndsUpPoor.jpg"
                        />
                      </Col>
                      <Col>
                        <Image
                          fluid
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/BestSellingAuthor.png"
                        />
                      </Col>
                      <Col>
                        <Image
                          fluid
                          src="https://jwvonytjrpiueyuwsjpa.supabase.in/storage/v1/object/public/images/LostScienceofCompoundInterest.jpg"
                        />
                      </Col>
                      <Col sm={1}></Col>
                    </Row>
                    <Row style={{ marginBottom: "2%", marginTop: "1%" }}>
                      <Col>
                        <Button
                          style={{
                            backgroundColor: ag.primaryColor,
                            color: "white",
                            width: "95%",
                            margin: "auto",
                          }}
                        >
                          <h3>
                            <strong>Buy Now</strong>
                          </h3>
                          <small>EVERYONE ENDS UP POOR!</small>
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          style={{
                            backgroundColor: ag.primaryColor,
                            color: "white",
                            width: "95%",
                            margin: "auto",
                          }}
                        >
                          <h3>
                            <strong>Buy Now</strong>
                          </h3>
                          <small>THE LOST SCIENCE OF COMPOUND INTEREST</small>
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col style={{margin: "auto"}}>
                  <Container>
                    <iframe
                      width="100%"
                      height="500vw"
                      src="https://www.youtube.com/embed/tQWmF0OJCaw"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </Container>
                </Col>
              </Row>
            </Row>
          ))}
      </Container>
    );
  }
}
