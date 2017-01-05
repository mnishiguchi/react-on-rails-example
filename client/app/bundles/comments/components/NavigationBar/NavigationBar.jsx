import React, { PropTypes as T } from 'react'
import classNames           from 'classnames'
import _                    from 'lodash'

import * as paths    from '../../constants/paths'

const NavigationBar = (props) => {
  const { commentsCount, pathname } = props

  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">Hello</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className={classNames({ active: (pathname === paths.ROUTER_PATH) })}>
              <a href={paths.ROUTER_PATH}>React Router</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavigationBar.propTypes = {
  pathname: T.string.isRequired,
}

export default NavigationBar
