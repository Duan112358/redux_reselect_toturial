import './style'

export default class Sitemap extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object
    }

    onNavigate(pathname) {
        this.context.router.push({
            pathname
        })
    }

    render() {

        return (
            <div className='Sitemap'>
                <h2 className="Sitemap__Title">This is {this.props.location.pathname.slice(1) || 'home'} page</h2>
                <p className="Sitemap__Desc" onClick={this.onNavigate.bind(this, 'sagas')}>Click to load <b>Saga</b> page </p>
                <p className="Sitemap__Desc" onClick={this.onNavigate.bind(this, 'about')}>Click to load <b>About</b> page </p>
            </div>
        )
    }
}
