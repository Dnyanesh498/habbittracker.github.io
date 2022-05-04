import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { CheckCircle, Cancel, CallMade } from '@material-ui/icons';
import { DONE, NONE, NOT_DONE } from '../constants/habitStatus';
import { updateStatus } from '../actions/habitActions';
import { useDispatch } from 'react-redux';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    
    
  },
  statusBox: {
    height: '20px',
    width: '20px',
    margin: '20px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
});

const HabitDetails = ({ element, day, title }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [status, setStatus] = useState(element.status);

  const onClickStatusChange = () => {
    if (element.status === DONE) {
      setStatus(NOT_DONE);
    } else if (element.status === NOT_DONE) {
      setStatus(NONE);
    } else {
      setStatus(DONE);
    }
    dispatch(updateStatus(element.status, day, title));
  };
  return (
    <div>
      <Typography>Day {day}</Typography>
      <div className={classes.statusBox} onClick={() => onClickStatusChange()}>
        {status === DONE ? <CheckCircle /> : null}
        {status === NOT_DONE ? <Cancel /> : null}
        {status === NONE ? <CallMade /> : null}
      </div>
    </div>
  );
};

export default HabitDetails;
