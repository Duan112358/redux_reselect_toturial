import Header from 'wepiao/Header'
import styles from './style'

const MENUS = {
    menus: [{
        text: 'Home',
        link: '/'
    }, {
        text: 'Saga',
        link: '/sagas',
    },{
        text: 'About',
        link: '/about'
    }],
    current: 'Home'
}

export default class Home extends React.Component {

    render() {

        return (
            <div className='Home'>
                <Header menus={MENUS.menus} pathname={this.props.location.pathname.slice(1) || 'home'}/>
                { this.props.children }
            </div>
        )
    }
}
