import React, { Component } from 'react';
import './WeeklySongListItem.css';
import PropTypes from 'prop-types';

class WeeklySongListItem extends Component {
    render() {
        const { order, title, singer, view } = this.props;
        return (
            <div className="WeeklySongListItem">
                <div className="order">{order}</div>
                <div className="info">
                    <p className="title">{title}</p>
                    <p className="singer">{singer}</p>
                </div>
                <div className="view-count">{view}</div>
            </div>
        );
    }
}

WeeklySongListItem.defaultProps = {
    view: 0
}

WeeklySongListItem.propTypes = {
    order: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    view: PropTypes.number
}
export default WeeklySongListItem;