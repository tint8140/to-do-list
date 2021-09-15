import React from 'react';
import {
   Button, Grid , Label, List} from 'semantic-ui-react';

const Task = ({name, color}) => {
console.log(name,color);
return(
    <React.Fragment>
    
     <List.Item>
       <Grid columns='2'>
         <Grid.Column>
          <Label color={color} size='big'>
           {name}
          </Label>
         </Grid.Column>

         <Grid.Column textalign='right'>
           <Button icon='trash' color='red'>
           </Button>
           <Button icon='pencil' color='orange'>
           </Button>
          
         </Grid.Column>
       </Grid>
     </List.Item>
    
   </React.Fragment>
);
   };

   export default Task;
