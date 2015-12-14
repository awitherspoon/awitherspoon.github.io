import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import styles from 'styles/base'

export const Navbar = React.createClass({
  mixins: [PureRenderMixin],

  _setSelected: function(e) {
    const selected = e.target.innerText === 'Andrew Bethel' ? 'Home' : e.target.innerText
    this.props.setSelected(e.target.innerText)
  },

  render: function() {
    const selectedStyle = {
      borderBottom: '2px solid black'
    }
    const homeSelected = (this.props.selected === "Home" ? selectedStyle : null)
    const aboutSelected = (this.props.selected === "About" ? selectedStyle : null)

    return (
      <nav className="navbar navbar-color" role="navigation">
        <div className="container">
          <a className="navbar-brand" href="#/" onClick={this._setSelected}>Andrew Bethel</a>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#/" style={homeSelected} onClick={this._setSelected}>Home</a>
              </li>
              <li>
                <a href="#/about" style={aboutSelected} onClick={this._setSelected}>About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

function mapStateToProps(state) {
  return {
    selected: state.get('selected')
  }
}

export const NavbarContainer = connect(mapStateToProps, actionCreators)(Navbar)