import React from 'react'
import PropTypes from 'prop-types'

const MergedContextProvider = ({ contextProviders, children }) => (
  contextProviders.reduceRight(
    (mergedElements, provider) => React.createElement(provider, undefined, mergedElements),
    children,
  )
)

MergedContextProvider.propTypes = {
  contextProviders: PropTypes.arrayOf(PropTypes.node).isRequired,
  children: PropTypes.node.isRequired,
}

export default MergedContextProvider
