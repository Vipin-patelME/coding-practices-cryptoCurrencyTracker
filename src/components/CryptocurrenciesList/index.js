// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.currencyData()
  }

  currencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyData = await response.json()
    const currencyDataList = currencyData.map(data => ({
      currencyLogo: data.currency_logo,
      currencyName: data.currency_name,
      euroValue: data.euro_value,
      id: data.id,
      usdValue: data.usd_value,
    }))
    this.setState({currencyData: currencyDataList, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="list-item-cont">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <h1 className="main-head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
              alt="cryptocurrency"
              className="bg-image"
            />
            <ul className="list-cont-items">
              <div className="card-nav">
                <p className="card-para">Coin Type</p>
                <div className="sub-card">
                  <p className="card-para">USD</p>
                  <p className="card-para">EURO</p>
                </div>
              </div>
              {currencyData.map(eachCurrency => (
                <CryptocurrencyItem
                  eachCurrency={eachCurrency}
                  key={eachCurrency.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
