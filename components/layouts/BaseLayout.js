import Header from '../shared/Header'
import { ToastContainer } from 'react-toastify';
import { AnimateSharedLayout } from "framer-motion";

const BaseLayout = (props) => {
  const {className, children, user, loading, navClass='with-bg'} = props;

  return (
    <AnimateSharedLayout>
      <div
        className="layout-container"
      >
        <Header
          className={navClass}
          user={user}
          loading={loading}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
        <ToastContainer />
      </div>
    </AnimateSharedLayout>
  )
}


export default BaseLayout
