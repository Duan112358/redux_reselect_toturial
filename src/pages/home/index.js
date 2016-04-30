import Header from 'wepiao/Header'
import styles from './style'

export default class Home extends React.Component {

    state = {
        menus: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'About',
            link: '/about'
        }],
        current: 'Home'
    }

    render() {

        return (
            <div className='Home'>
                <Header menus={this.state.menus} />
                <h2 className="Home__Title">This is {this.state.current} page</h2>
                <p className="Home__Desc">Click About to load about page </p>
            </div>
        )
    }
}
