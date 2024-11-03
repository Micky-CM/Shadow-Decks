import PropTypes from 'prop-types'

const Layout = ({ children })=> {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-liliac-dark to-liliac-soft pt-44 pb-20">
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout