import React from "react"
import { Link } from 'gatsby'

export default () => (
  <div>
    <Link to="/contact/">Contact</Link>
    <div style={{ color: `purple`, fontSize: `72px` }}>Hello world! Prettey Symbol</div>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
// export default () => React.createElement("div", null, "Hello world!")
