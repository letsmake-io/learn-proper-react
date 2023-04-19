import Topbar from './Topbar'

const Layout = ({children}) => {
  return (
    <section>
        <Topbar />
        {children}
    </section>
  )
}

export default Layout