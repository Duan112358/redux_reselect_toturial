import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './style'
import Picker from './Picker'
import Posts from './Posts'
import connect from 'utils/connect'
import SagaSelector from 'app/selectors/sagas'

@connect(SagaSelector)
export default class Sagas extends React.Component {

    constructor(...args) {
        super(...args)

        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    handleChange(nextReddit) {
        this.props.actions.selectReddit(nextReddit)
    }

    handleRefreshClick(e) {
        e.preventDefault()
        this.props.actions.selectReddit(this.props.selectedReddit)
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props

        return (
            <div className='Sagas'>
                <Picker value={selectedReddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}/>
                <p>
                { !isFetching && lastUpdated && <span> Last updated at { new Date(lastUpdated).toLocaleTimeString()} &nbsp; </span> }
                { !isFetching && <a href="javascript:void(0)" onClick={this.handleRefreshClick}>Refresh</a> }
                </p>
                { isFetching && !posts.length && <h2>Loading...</h2> }
                { !isFetching && !posts.length && <h2>Empty</h2> }
                {
                    !isFetching && posts.length && 
                        <div style={{ opacity: isFetching ? .5 : 1}}>
                            <Posts posts={posts}/>
                        </div>
                }
            </div>
        )
    }
}

// Sagas.propTypes = {
//     selectedReddit: PropTypes.string.isRequired,
//     posts: PropTypes.array.isRequired,
//     isFetching: PropTypes.bool.isRequired,
//     lastUpdated: PropTypes.number,
// }
