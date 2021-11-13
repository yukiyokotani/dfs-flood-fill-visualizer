import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import { Eval } from '../condition/conditionSlice';
import { Status } from './tableSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    isInProcess: {
      backgroundColor: theme.palette.action.disabledBackground,
    },
    isProcessed: {
      backgroundColor: theme.palette.action.hover,
    },
    isReffered: {
      backgroundColor: theme.palette.action.selected,
    },
    isBasis: {
      backgroundColor: theme.palette.action.selected,
    },
    tableTd: {
      border: `1px solid ${theme.palette.divider}`,
      textAlign: 'center',
      overflow: 'auto',
      fontSize: '2rem',
      width: '3rem',
      height: '3rem',
      cursor: 'default',
      '-webkit-touch-callout': 'none' /* iOS Safari */,
      '-webkit-user-select': 'none' /* Safari */,
      '-khtml-user-select': 'none' /* Konqueror HTML */,
      '-moz-user-select': 'none' /* Old versions of Firefox */,
      '-ms-user-select': 'none' /* Internet Explorer/Edge */,
      'user-select': 'none' /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */,
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
        minWidth: '2rem',
      },
    },
    chipItem: {
      marginBottom: theme.spacing(0.5),
    },
    chipSummary: {
      margin: theme.spacing(0.5),
    },
  })
);

const Square: React.FC<
  Status & {
    switchType: () => void;
    resetCondition: () => void;
    resetProcess: () => void;
    evaluation: Eval;
  }
> = ({
  type,
  isInProcess,
  isProcessed,
  switchType,
  resetCondition,
  resetProcess,
  evaluation,
}) => {
  const classes = useStyles();
  const className = useMemo(() => {
    if (isInProcess) {
      return classes.isInProcess;
    }
    if (isProcessed) {
      return classes.isProcessed;
    }
    return '';
  }, [classes.isInProcess, classes.isProcessed, isInProcess, isProcessed]);

  const handleClick = useCallback(() => {
    switchType();
    if (evaluation !== 'BEFORE') {
      resetCondition();
      resetProcess();
    }
  }, [evaluation, resetCondition, resetProcess, switchType]);

  return (
    <td
      className={`${className} ${classes.tableTd}`}
      role="gridcell"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      {type === 1 ? '🧊' : null}
      {type === 2 ? '🐟' : null}
      {type === 3 ? '🏠' : null}
    </td>
  );
};

export default Square;
