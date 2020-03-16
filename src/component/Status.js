import React from 'react';

const Status = (props) => {
    var comment;
    switch (props.status) {
        case "BEFORE":
            comment = "魚屋にたどり着けるでしょうか？"
            break;
        case "YES":
            comment = "魚屋にたどり着けました！"
            break;
        case "NO":
            comment = "魚屋にたどり着けませんでした！"
            break;
        default:
            comment = "魚屋にたどり着けるでしょうか？"
    }
    return (
        <div className="status">
            {comment}
        </div>
    )
};

export default Status;