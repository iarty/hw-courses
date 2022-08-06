import React, { Fragment } from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <Fragment>
        <footer className="page-footer font-small cyan darken-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 py-5">
                <div className="mb-5 flex-center">
                  <a className="fb-ic" href="/#">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="tw-ic" href="/#">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="gplus-ic" href="/#">
                    <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="li-ic" href="/#">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="ins-ic" href="/#">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                  </a>
                  <a className="pin-ic" href="/#">
                    <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
          </div>
        </footer>
      </Fragment>
    )
  }
}