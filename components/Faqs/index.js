// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {idList: []}
  addButtonClick = id => {
    const {idList} = this.state
    if (idList.includes(id)) {
      const filterList = idList.filter(i => !(i.id === id))
      this.setState({idList: filterList})
    } else {
      this.setState(pre => ({
        idList: [...pre.idList, id],
      }))
    }
  }
  render() {
    const {faqsList} = this.props
    const {idList} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(item => (
              <FaqItem
                key={item.id}
                details={item}
                isActive={idList.includes(item.id)}
                addButtonClick={this.addButtonClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
