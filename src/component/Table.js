import React, { useState, useEffect } from 'react';
import Square from './Square';

const Table = (props) => {
    let initinalState = Array(10).fill(0).map(() =>
        Array(10).fill({
            value: 0,
            isInProcess: false,
            isProcessed: false,
        }));
    initinalState[props.home.x][props.home.y] = {
        value: 2,
        isInProcess: false,
        isProcessed: false,
    }
    initinalState[props.shop.x][props.shop.y] = {
        value: 3,
        isInProcess: false,
        isProcessed: false,
    }
    const [table, setTable] = useState(initinalState);

    // table[i][j]のvalueを更新
    const changeValue = (i, j) => {
        const newTable = [...table];
        newTable[i][j] = {
            value: (newTable[i][j].value + 1) % 4,
            isInProcess: newTable[i][j].isInProcess,
            isProcessed: newTable[i][j].isProcessed,
        }
        setTable(newTable);
    };

    // table[i][j]のisInProcessだけ入力のbool値に更新
    const setInProcess = (i, j, bool) => {
        const newTable = [...table];
        newTable[i][j] = {
            value: newTable[i][j].value,
            isInProcess: bool,
            isProcessed: newTable[i][j].isProcessed,
        }
        if (i === shop.x && j === shop.y && bool) {
            if (bool) {
                props.setStatus("YES");
            } else {
                props.setStatus("NO");
            }
        }
    };

    // table[i][j]のisProcessedだけ入力のbool値に更新
    const setProcessed = (i, j, bool) => {
        const newTable = [...table];
        newTable[i][j] = {
            value: newTable[i][j].value,
            isInProcess: newTable[i][j].isInProcess,
            isProcessed: bool,
        }
        setTable(newTable);
    };

    const resetTable = () => {
        setTable(initinalState);
        props.setStatus("BEFORE");
    }

    let home = { x: props.home.x, y: props.home.y };
    let shop = { x: props.shop.x, y: props.shop.y };
    let prevIndex = { x: 9, y: 9 };
    // isInProcessのマスを0.1sec毎に走査する関数
    // const scanTable = () => {
    //     const intervalTime = 200;
    //     const rec = (x, y) => {
    //         if (x < 0 || 10 <= x || y < 0 || 10 <= y || table[x][y].value === 1) return;
    //         if (table[x][y].isProcessed) return;
    //         setInProcess(prevIndex.x, prevIndex.y, false);
    //         setInProcess(x, y, true);
    //         prevIndex = { x: x, y: y };
    //         setProcessed(x, y, true);
    //         setTimeout(() => rec(x + 1, y), intervalTime)
    //         setTimeout(() => rec(x - 1, y), intervalTime)
    //         setTimeout(() => rec(x, y + 1), intervalTime)
    //         setTimeout(() => rec(x, y - 1), intervalTime)
    //     };
    //     rec(home.x, home.y);
    // };

    const scanTable = () => {
        rec(home.x, home.y).then(function () { table[shop.x][shop.y].isProcessed ? props.setStatus("YES") : props.setStatus("NO"); });
    };

    const rec = (x, y) => {
        const intervalTime = 200;
        if (x < 0 || 10 <= x || y < 0 || 10 <= y || table[x][y].value === 1) return;
        if (table[x][y].isProcessed) return;
        return new Promise((resolve, reject) => {
            setInProcess(prevIndex.x, prevIndex.y, false);
            setInProcess(x, y, true);
            prevIndex = { x: x, y: y };
            setTimeout(() => { setProcessed(x, y, true); resolve() }, intervalTime)
        }).then(function () { return rec(x + 1, y) }
        ).then(function () { return rec(x - 1, y) }
        ).then(function () { return rec(x, y + 1) }
        ).then(function () { return rec(x, y - 1) })
    };

    // const scanTable = () => {
    //     const f = async () => {
    //         let promise = new Promise((resolve, reject) => {
    //             setTimeout(() => resolve("done!"), 1000)
    //         });
    //         let result = await promise; // promise が解決するまで待ちます (*)
    //         alert("done"); // "done!"
    //     }
    //     f();
    // }
    // var arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    // const scanTable = () => {
    //     recursiveFunc(arr).then(function () { console.log("done"); });
    // };

    // function recursiveFunc(arr) {
    //     if (arr.length <= 0) return;
    //     return new Promise((resolve, reject) => {
    //         var tmpArr = arr.splice(0, 3);
    //         var entryTimestamp = Date.now();
    //         setTimeout(function () { logger(tmpArr, entryTimestamp); resolve() }, 1000);
    //     }).then(function () { return recursiveFunc(arr) });
    // }

    // function logger(arr, timestamp) {
    //     console.log(JSON.stringify(arr) + timestamp);
    // }

    // マスを描画する関数
    const renderSquare = (square, i, j) => {
        return (
            <Square
                key={i * 10 + j}
                value={square.value}
                isInProcess={square.isInProcess}
                isProcessed={square.isProcessed}
                onClick={() => changeValue(i, j)}
            />
        )
    };

    // tableのi行目を描画する関数
    const renderRow = (i) => {
        return (
            <tr key={i}>
                {table[i].map((square, j) => renderSquare(square, i, j))}
            </tr>
        )
    }

    return (
        <div>
            <table className="dp-table">
                <tbody>
                    {table.map((row, i) => renderRow(i))}
                </tbody>
            </table>
            <button className="start-button" onClick={() => scanTable()}>START</button>
            <button className="reset-button" onClick={() => resetTable()}>RESET</button>
        </div>
    );
}

export default Table;