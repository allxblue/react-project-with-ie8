/**
 *  Home container
 *  此為 首頁 容器
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classNames';


export default class Index extends Component {
	constructor(props) {
		super(props)
  }

  componentDidMount() {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      });

  }

  render() {
    let containerClass = classNames(
      "home", "main-container", "af-layout", "af-index", {'is-ajax': 0 }
    );

  	return (
  		<div className={ containerClass } >
  			Home~
  		</div>
  	)
	}
}


function mapStateToProps(state) {
  return state
} 

export default connect(
  mapStateToProps
)(Index);