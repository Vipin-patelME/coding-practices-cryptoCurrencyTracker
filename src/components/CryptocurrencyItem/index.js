// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCurrency
  return (
    <li className="list_items">
      <div className="logo-card">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="item_para">{currencyName}</p>
      </div>
      <div className="logo-card">
        <p className="item_para">{usdValue}</p>
        <p className="item_para">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
