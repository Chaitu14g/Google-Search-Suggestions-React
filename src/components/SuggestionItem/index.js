import './index.css'

const SuggestionItem = props => {
  const {eachItem, onNewText} = props
  const {suggestion} = eachItem
  const newText = () => {
    onNewText(suggestion)
  }
  return (
    <li className="lists">
      <p className="para">{suggestion}</p>
      <img
        className="clickIcon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={newText}
      />
    </li>
  )
}

export default SuggestionItem
