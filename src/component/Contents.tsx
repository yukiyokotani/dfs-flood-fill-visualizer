import { Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import Speed from '../features/condition/Speed';
import Evaluation from '../features/condition/Evaluation';
import Table from '../features/table/Table';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: '16px',
      overflow: 'auto',
    },
    mainContents: {
      marginTop: 0,
      marginBottom: 0,
    },
  })
);
const Contents: React.FC = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    enqueueSnackbar('マス目をクリックして迷路を完成させてください。', {
      variant: 'info',
    });
  }, [enqueueSnackbar]);

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3} className={classes.mainContents}>
        <Grid item xl={12} xs={12}>
          <Speed />
        </Grid>
        <Grid item xl={12} xs={12}>
          <Evaluation />
        </Grid>
        <Grid item xl={12} xs={12}>
          <Table />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contents;
