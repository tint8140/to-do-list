import * as React from "react";
import 'semantic-ui-css/semantic.css';
import { Header, Container, Button, Grid, Segment, Form, Select, List} from 'semantic-ui-react';
import Task from '../components/Task';
const HomePage = () => {
  
  return (
    <React.Fragment>
      <Container> 
        <Grid>
          <Grid.Column width='4'>
          <button icon='bars'></button>
          </Grid.Column>

          <Grid.Column width='8'>
          <header textalign='center' as='h1'> To do List </header>
          </Grid.Column>
          <Grid.Column width='4' textalign='right'>
          <button icon= 'plus'color='green' ></button>
          </Grid.Column>
        </Grid>
        
      <Segment>
      <Header as='h2'>To do List</Header>
    <Form>
      <Form.Field
      control='input'
      label='Task Name'
      placeholder= 'Enter task name...'
      />
      <Form.Field
      control={Select}
      label='Task Color'
      placeholder= 'Choose task color...'
      options ={[
        { text: 'Red', value:'red'},
        { text: 'Yellow', value:'yellow'},
        { text: 'Green', value:'green'},
      ]}
  />
      {/* <Button color='red'>Cancel</Button>
      <Button color='green'>Add Task</Button> */}
      <Button.Group fluid>
        <Button color='red'> CANCEL </Button>
        <Button.Or/>
        <Button color='green'> Add Task </Button>
      </Button.Group>

    </Form>
   </Segment>
        <List>
            <Task name='Task 1' color='yellow'></Task>
            <Task name='Task 2' color='orange'></Task>
            <Task name='Task 3' color='green' />
        </List>
    </Container>
  </React.Fragment>
    );
};
export default HomePage;
