import React, { useCallback, useContext, useMemo } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Card, Slider, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import SpeedIcon from '@material-ui/icons/Speed';
import conditionSlice, { ConditionState } from './conditionSlice';
import { RootState } from '../../utils/store';
import { SizeContext } from '../../component/App';

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      marginRight: '16px',
    },
  })
);

const Speed: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const condition = useSelector<RootState, ConditionState>(
    (state) => state.condition
  );
  const { isMobile } = useContext(SizeContext);

  const marks = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, i) => {
          return {
            value: i + 1,
            label: (i + 1).toString(),
          };
        }),
    []
  );

  const handleChange = useCallback(
    (value: number | number[]) => {
      if (typeof value === 'object') return;
      dispatch(conditionSlice.actions.setCapacity(value));
    },
    [dispatch]
  );

  return (
    <Card>
      <Box p={isMobile ? 2 : 3}>
        <Grid container spacing={2}>
          <Grid item xl={1} sm={1} xs={2}>
            <Box className={classes.icon}>
              <SpeedIcon />
            </Box>
          </Grid>
          <Grid item xl={11} sm={11} xs={10}>
            <Typography variant="h5" gutterBottom>
              探索スピード
            </Typography>
            <Box pr={2}>
              <Slider
                defaultValue={10}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={1}
                max={10}
                disabled={condition.eval === 'INPROCESS'}
                onChange={(_, value) => handleChange(value)}
              />
            </Box>
          </Grid>
        </Grid>{' '}
      </Box>
    </Card>
  );
};

export default Speed;
