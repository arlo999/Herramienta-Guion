
import React, { Component } from "react";
import { render } from "react-dom";

import Simpletextarea from './Herramienta'
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Tyoography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Simpletextarea2 from './Herramienta/input';
import Container from '@material-ui/core/Container';
import Dialogo from './Herramienta/dialogo';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
  }


  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <ToolBar>
                <Tyoography variant='title' color='inherit'>

                  Herramienta Guion
                </Tyoography>
              </ToolBar>
            </AppBar>
          </Row>
          <Paper elevation={4}>

            <Container fixed>
              <Tyoography component="div" style={{ padding: "1em", backgroundColor: '#cfe8fc', height: '10vh' }} >


                <Row center="xs" >

                  <Col xs={2} >
                    <div>
                      <span>
                        Pensamiento:
            </span>
                    </div>
                  </Col>

                  <Col xs={2} >

                    <Simpletextarea
                      handleChange={this.handleChange}
                    />
                  </Col>
                </Row>
              </Tyoography>

            </Container>

            <Container >
              <Tyoography component="div" style={{ padding: "3em", backgroundColor: '#09C5C4', height: '10vh' }} >
                <Row between="xs">
                  
                  <Col xs={2} >

                    <Simpletextarea
                      handleChange={this.handleChange}
                    />
                  </Col>

                  <Col xs={2} >
                  <Simpletextarea2
                      handleChange={this.handleChange}
                    />
                    
                  </Col>

                  <Col xs={2} >
      
                  <Simpletextarea
                      handleChange={this.handleChange}
                    />
                  </Col>
                </Row>

              </Tyoography>

            </Container>

          </Paper>
          <Paper  elevation={5}>
          <Container fixed>
              <Tyoography component="div" style={{ padding: "1em", backgroundColor: '#B28CB1', height: '30vh' }} >


                <Row start >

                  <Col xs={2} >
                    <div>
                      <span>
                        Dialogo:
            </span>
                    </div>
                  </Col>

                  <Col xs={2} >

                    <Dialogo
                      handleChange={this.handleChange}
                    />
                  </Col>
                </Row>

              </Tyoography>

            </Container>
          </Paper>
        </Grid>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
