import React from 'react'
import StockRow from './StockRow.jsx'

const StocksList = (props) => {
  return (
    <div className='card column is-one-third' id='stocks_list'>
      <div className='card-header'>
        <div className='card-header-title'>
          Stocks
        </div>
      </div>
      <div className='card-content'>
        <table className='table is-bordered' border="1" align="Center">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>
                Price
              </th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.stocks).map((stock_name, index) =>
              {
                let current_stock = props.stocks[stock_name];
                return (
                  <StockRow
                    key={index} stock_name={stock_name}
                    stock_data={current_stock}
                  />
                )
              }
            )}
          </tbody>
        </table>
       </div>
    </div>
  );
}

export default StocksList;
