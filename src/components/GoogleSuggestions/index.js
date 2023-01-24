import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    enteredValue: '',
  }

  searchValue = event => {
    this.setState({enteredValue: event.target.value})
  }

  onNewText = suggestion => {
    this.setState({enteredValue: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {enteredValue} = this.state
    let newList = suggestionsList
    newList = suggestionsList.filter(eachItem => {
      const a = eachItem.suggestion.toLowerCase()
      const b = enteredValue.toLowerCase()
      if (a.includes(b)) {
        return eachItem
      }
      return null
    })
    return (
      <div className="background_container">
        <div className="main_container">
          <img
            className="image"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search_container">
            <div className="search_box_container">
              <img
                className="searchIcon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                className="search_box"
                type="search"
                placeholder="Search Google"
                onChange={this.searchValue}
                value={enteredValue}
              />
            </div>
            <ul className="unList">
              {newList.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  onNewText={this.onNewText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
