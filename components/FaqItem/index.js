// Write your code here.
import './index.css'

const FaqItem = props => {
  const {details, isActive, addButtonClick} = props
  const {id, questionText, answerText} = details
  const imgUrl = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const itemDisplay = isActive ? '' : 'item-dis'
  const altValue = isActive ? 'minus' : 'plus'
  const buttonClick = () => {
    addButtonClick(id)
  }
  return (
    <li className="itemCon">
      <div className="box">
        <h1>{questionText}</h1>
        <button className="button" onClick={buttonClick}>
          <img src={imgUrl} alt={altValue} />
        </button>
      </div>
      <div className={itemDisplay}>
        <hr />
        <p>{answerText}</p>
      </div>
    </li>
  )
}
export default FaqItem
