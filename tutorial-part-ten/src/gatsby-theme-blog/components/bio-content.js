import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  // <Fragment>
  //   This is where <Styled.a href="http://example.com/"></Styled.a>
  //   {` `}
  //   goes.
  //   <br />
  //   Or whatever, you make the rules.
  // </Fragment>
  <Fragment>
    This is my updated bio.
    <br />
    It's shadowing the content from the theme.
  </Fragment>
)
