import React from "react";

import { List, Grid, Label, Button } from "semantic-ui-react";

const Task = ({ name, color, editTask, deleteTask, index }) => {
  function editCurrentTask() {
    // document.getElementById("edit").contentEditable = true;

    editTask();
  }
  function deleteCurrentTask() {
    deleteTask();
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              icon="trash"
              onClick={deleteCurrentTask}
              color="red"
            ></Button>
            <Button
              id="edit"
              icon="pencil"
              onClick={editCurrentTask}
              color="orange"
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
