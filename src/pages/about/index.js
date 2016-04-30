import { Link } from 'react-router'
import styles from './style'

export default class About extends React.Component {

  render() {
    return (
      <div className='About'>
          <div className='About__Desc'>
              Demo powered by pepper
          </div>
          <div className='About__Desc'>
              FEI Team @ Wepiao
          </div>
          <ul>
            <li>
                <Link to="/" className='About__Link'>Back Home</Link>
            </li>
          </ul>
      </div>
    )
  }

}
