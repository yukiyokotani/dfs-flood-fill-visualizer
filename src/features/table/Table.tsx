import React, { useCallback, useContext, useMemo } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import Square from './Square';
import tableSlice, { Status, Coordiante } from './tableSlice';
import { RootState } from '../../utils/store';
import conditionSlice, {
  Eval,
  ConditionState,
} from '../condition/conditionSlice';
import { SizeContext } from '../../component/App';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperTitle: {
      marginLeft: theme.spacing(1),
    },
    dpTable: {
      // width: '100%',
      tableLayout: 'fixed',
      borderCollapse: 'collapse',
    },
    buttons: {
      marginTop: theme.spacing(2),
      '& > *': {
        marginLeft: theme.spacing(3),
      },
    },
    trData: {
      height: '3rem',
    },
    emptyChip: {
      paddingLeft: '2.5rem',
      paddingRight: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 'initial',
        paddingRight: 'initial',
      },
    },
    itemChip: {
      animationName: '$fadeIn',
      animationDuration: '.3s',
      animationTimingFunction: 'ease-in-out',
    },
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
  })
);

const DpTable: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isMobile } = useContext(SizeContext);

  // state
  const tableState = useSelector<
    RootState,
    { table: Status[][]; home?: Coordiante; shop?: Coordiante }
  >((state) => state.table);

  const condition = useSelector<RootState, ConditionState>(
    (state) => state.condition
  );

  // method
  const setTable = useCallback(
    (newTable: Status[][]) => {
      dispatch(tableSlice.actions.setTable(newTable));
    },
    [dispatch]
  );

  const setEvaluation = useCallback(
    (evaluation: Eval) => {
      dispatch(conditionSlice.actions.setEval(evaluation));
    },
    [dispatch]
  );

  const switchType = useCallback(
    (i: number, j: number) => {
      dispatch(tableSlice.actions.switchType({ i, j }));
    },
    [dispatch]
  );

  const intervalTime = useMemo(() => {
    return 100 / condition.speed;
  }, [condition.speed]);

  /**
   * @param prevTable 一つ前のイテレーションで更新されたtable
   * @param curr 現在のマスの座標
   * @param prev 一つ前のイテレーションのマスの座標
   */
  const recUpdate = useCallback(
    async (prevTable: Status[][], curr: Coordiante, prev: Coordiante) => {
      if (
        curr.i < 0 ||
        curr.i >= 10 ||
        curr.j < 0 ||
        curr.j >= 10 ||
        prevTable[curr.i][curr.j].type === 1 ||
        prevTable[curr.i][curr.j].isProcessed
      )
        return Promise.resolve(prevTable);

      // 更新用に新しいテーブルを作成
      let newTable: Status[][] = [[]];
      prevTable.forEach((row, i) => {
        newTable[i] = row.slice();
      });

      newTable = await new Promise((resolve) => {
        setTimeout(() => {
          if (prev.i !== -1 && prev.j !== -1) {
            newTable[prev.i][prev.j] = {
              ...newTable[prev.i][prev.j],
              isInProcess: false,
            };
          }
          newTable[curr.i][curr.j] = {
            ...newTable[curr.i][curr.j],
            isProcessed: true,
          };
          setTable(newTable);
          resolve(newTable);
        }, intervalTime);
      });

      newTable = await recUpdate(newTable, { i: curr.i + 1, j: curr.j }, curr);
      newTable = await recUpdate(newTable, { i: curr.i - 1, j: curr.j }, curr);
      newTable = await recUpdate(newTable, { i: curr.i, j: curr.j + 1 }, curr);
      newTable = await recUpdate(newTable, { i: curr.i, j: curr.j - 1 }, curr);

      return Promise.resolve(newTable);
    },
    [intervalTime, setTable]
  );

  const scanTable = useCallback(async () => {
    const currCoord = tableState.home ?? { i: 0, j: 0 };
    const prevCoord = { i: -1, j: -1 };

    const initTable: Status[][] = [[]];
    tableState.table.forEach((row, i) => {
      initTable[i] = row.slice();
    });

    setEvaluation('INPROCESS');

    const resTable = await recUpdate(initTable, currCoord, prevCoord);
    if (
      tableState.shop &&
      resTable[tableState.shop.i][tableState.shop.j].isProcessed
    ) {
      setEvaluation('REACHABLE');
    } else setEvaluation('UNREACHABLE');
  }, [
    recUpdate,
    setEvaluation,
    tableState.home,
    tableState.shop,
    tableState.table,
  ]);

  const resetCondition = useCallback(() => {
    dispatch(conditionSlice.actions.setEval('BEFORE'));
  }, [dispatch]);

  const resetTable = useCallback(() => {
    dispatch(tableSlice.actions.resetTable());
  }, [dispatch]);

  const resetProcess = useCallback(() => {
    dispatch(tableSlice.actions.resetProcess());
  }, [dispatch]);

  /**
   * マスを描画する関数
   * @param status マスのstatus
   * @param i マスのインデックス (x座標)
   * @param j マスのインデックス (y座標)
   */
  const renderSquare = useCallback(
    (status: Status, i: number, j: number) => {
      return (
        <Square
          key={`square-${i * 10 + j}`}
          type={status.type}
          isInProcess={status.isInProcess}
          isProcessed={status.isProcessed}
          switchType={() => switchType(i, j)}
          resetCondition={resetCondition}
          resetProcess={resetProcess}
          evaluation={condition.eval}
        />
      );
    },
    [condition.eval, switchType, resetCondition, resetProcess]
  );

  /**
   * tableのi行目を描画する関数
   * @param i 何行目か
   */
  const renderRow = useCallback(
    (i: number) => {
      return (
        <tr key={i} className={classes.trData}>
          {tableState.table[i].map((status, j) => renderSquare(status, i, j))}
        </tr>
      );
    },
    [classes.trData, renderSquare, tableState]
  );

  return (
    <Paper>
      <Box p={isMobile ? 2 : 3}>
        <Grid container spacing={2}>
          <Grid item xl={1} sm={1} xs={1}>
            <Box>
              <ViewComfyIcon />
            </Box>
          </Grid>
          <Grid item xl={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl={12} xs={12} container justify="center">
                <table className={classes.dpTable}>
                  <tbody>{tableState.table.map((_, i) => renderRow(i))}</tbody>
                </table>
              </Grid>
              <Grid item xl={12} xs={12} container justify="flex-end">
                <Box className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={condition.eval === 'INPROCESS'}
                    onClick={() => {
                      resetCondition();
                      resetTable();
                    }}
                  >
                    RESET
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={condition.eval === 'INPROCESS'}
                    onClick={() => {
                      resetProcess();
                      scanTable();
                    }}
                  >
                    START
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default DpTable;
