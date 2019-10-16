import React from 'react';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// }));



export default function TextFields(props) {
  // const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   name: '{props.name}',
  //   age: 'props.age',

  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
const style = {
  
  color: '#bf2aa2'
}
  return (
    <form  >
      <TextField style = {style}
        id="standard-name"
        label="Name"
        
       
        onChange={props.changed} value={props.name}
        margin="normal"
      />

    </form>
  );
}