import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 550,
    marginBottom:'40px',
    background: 'linear-gradient(45deg, #ecf1f5  5%, #a6bed4 90%)',
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },

}));

export default function SearchField(props) {
  const { onChange, onSubmit } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase
        onKeyPress={event => {
          if (event.key === "Enter") {
            event.preventDefault();
            onSubmit(event.target.value);
          }
        }}
        onChange={e => onChange(e.target.value)}
        className={classes.input}
        placeholder="Search by username"
      />
      <IconButton
        // onClick={() => console.log("ok")}
        className={classes.iconButton}
        aria-label="Search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

SearchField.propTypes = {
  onChange : PropTypes.func.isRequired,
  onSubmit : PropTypes.func.isRequired
};

