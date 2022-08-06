import React, { Fragment } from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <div
          id="carousel-example-2"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-2" data-slide-to="1"></li>
            <li data-target="#carousel-example-2" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide" />
                <div className="mask rgba-black-light"></div>
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide" />
                <div className="mask rgba-black-strong"></div>
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Secondary text</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="view">
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide" />
                <div className="mask rgba-black-slight"></div>
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carousel-example-2"
            role="button"
            data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example-2"
            role="button"
            data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="container text-center my-5">
          <h1 className="mt-3">Hello world!</h1>
          <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corporis deleniti ullam explicabo delectus debitis laboriosam, qui eius optio
              dolorum voluptate cum et tenetur dolorem id pariatur atque a est numquam,
              dolores, libero aperiam odio! Ipsum minima odit beatae quaerat nesciunt quisquam
              aliquam officiis perspiciatis consequatur velit, temporibus vel, quasi odio
              tenetur facere, cupiditate nam voluptatibus nulla laborum cumque impedit dolore
              assumenda? Maxime quaerat repellendus vero? Nemo distinctio velit at eos tempora
              porro, labore rem. Vero reprehenderit accusamus minus illo vitae. Ipsam, minus
              tempora. Ullam pariatur, ut, quasi maxime rerum libero modi sapiente adipisci
                        porro temporibus velit sunt omnis facere eveniet?</p>
        </div>
        <div className="container-fluid my-5 py-5 z-depth-1" style={{ backgroundColor: "#ededeb" }}>
          <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="view overlay z-depth-1-half">
                  <img src="https://mdbootstrap.com/img/Photos/Others/img%20(16).jpg" className="img-fluid" alt="" />
                  <a href="/#">
                    <div className="mask rgba-white-light"></div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="font-weight-bold">Material Design Blocks</h3>
                <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente
                  molestiae
        numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam, doloremque laborum.</p>
                <a className="btn btn-brown btn-md ml-0" href="/#" role="button">Travel<i className="fa fa-plane ml-2"></i></a>
              </div>
            </div>
          </section>
        </div>
        <div className=" my-5 py-5 ">
          <section className="px-md-5 mx-md-5 dark-grey-text text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-3 col-6 mb-4">
                    <i className="fas fa-gem fa-3x blue-text"></i>
                  </div>
                  <div className="col-md-3 col-6 mb-4">
                    <i className="fas fa-chart-area fa-3x teal-text"></i>
                  </div>
                  <div className="col-md-3 col-6 mb-4">
                    <i className="fas fa-cogs fa-3x indigo-text"></i>
                  </div>
                  <div className="col-md-3 col-6 mb-4">
                    <i className="fas fa-cloud-upload-alt fa-3x deep-purple-text"></i>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima cum sapiente alias iste expedita saepe explicabo illum ab, reiciendis aliquid nulla temporibus mollitia quae beatae harum sequi quidem ad.</p>
              </div>
            </div>
          </section>
        </div>
      </Fragment >
    )
  }
}



