import { range } from './utils';

function Grid({ numRows, numCols }) {

  const rowNum = range(numRows).map((rowIndex) => (
    <div keys={rowIndex} className="row">
      {range(numCols).map((colIndex) =>(
        <div key={colIndex} className="cell"></div>
      ))}
    </div>
  ));

  return (
    <div className="grid">{rowNum}
    </div>
  );
}

export default Grid;
