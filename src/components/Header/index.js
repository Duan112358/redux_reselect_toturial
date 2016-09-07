/*
 *  Header Component
 *  
 *  let menus = [{text: '', link: ''}]
 *  let onClick = (e) => {}
 *  <Header menus={menus} onClick={onClick.bind(this)} className='header'/>
 */

import classnames from 'classnames'
import { Link } from 'react-router'

import './style'

export default class Header extends React.Component {

    // props constrants
    static propTypes = {
        className: React.PropTypes.string,
        menus:React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string,
            link: React.PropTypes.string
        })),
        onClick: React.PropTypes.func
    }

    constructor() {
        super();
    }

    // default state definition
    state = {
        activeIndex: 0
    }

    onMenuClick(index, e) {
        this.props.onClick && this.props.onClick(index, e);
        this.setState({
            activeIndex: index
        });
    }

    render() {
        let pathname = this.props.pathname
        // combine classname with active
        let menuClass = (text) => {
            return classnames('nav-item', { 'active': ~pathname.indexOf(text.toLowerCase()) })
        }

        let menus = this.props.menus;

        return <header>
            <ul className={classnames('nav', this.props.className)}>
            {
                menus.map((menu, index) => {
                    return <li key={index} className={menuClass(menu.text)}>
                        <Link to={menu.link} onClick={this.onMenuClick.bind(this, index)}>
                            { menu.text }
                        </Link>
                    </li>
                })
            }
            </ul>
        </header>
    }
}
