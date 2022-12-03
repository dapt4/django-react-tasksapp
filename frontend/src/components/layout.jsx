import {Link} from 'react-router-dom';

function Layout({children}){
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Tasks app</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">New</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-evenly flex-wrap mt-3">
        {children}
      </div>
    </>
  )
}

export default Layout;
