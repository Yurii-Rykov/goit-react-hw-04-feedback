import React from "react";
import PropTypes from 'prop-types'

const Sections = ({title, children}) => {
    return (
        <section>
          <h2>{title}</h2>  
          {children}
        </section>
    )
}

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default Sections;