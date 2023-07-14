import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="main">
          <div className="logo"></div>
          <h1>Describe the value of booking an appointment</h1>
          <h3>
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition
          </h3>
        </div>
      </div>
      <div className="container formList">
        <div className="row first-reverse">
          <div className="col-md-6 col-sm-12">
            <div className="top">
              <h1>Schedule an Appointment</h1>
              <p>
                Here, let visitors know what will happen when they complete your
                form.
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="First name*"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Last name*"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Email*"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    placeholder="Phone Number*"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option>Type of Appointment</option>
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                    <option>Type 4</option>
                  </select>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-info" type="button">
                    Button
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="bottom">
              <ul>
                <li className="Benefit1">
                  <h2>Benefit 1</h2>
                  <p>
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </p>
                </li>
                <li className="Benefit2">
                  <h2>Benefit 2</h2>
                  <p>
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </p>
                </li>
                <li className="Benefit3">
                  <h2>Benefit 3</h2>
                  <p>
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row videoDiv">
          <div className="col-md-12 col-sm-12">
            <h1 className="videoHeading">
              Show visitors what they're signing up for
            </h1>
            <p className="videoPara">
              Include a video or photo from one of your sessions to help people
              understand your service (or just to hype ‘em up).
            </p>
            <div className="embed-responsive embed-responsive-16by9 video">
              <iframe
                className="embed-responsive-item"
                src="https:////www.youtube.com/embed/zB4I68XVPzQ"
                allowFullScreen
                autoPlay
                loop
                muted
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container rating">
        <div className="row">
          <div className="col-md-12 reviewSection">
            DON'T JUST TAKE OUR WORD FOR IT
          </div>
          <div className="col-md-6 left">
            <div className="star1"></div>
            <p className="review">
              Share a real testimonial that hits some of your benefits (but
              isn't too sales-y).
            </p>
            <div className="row reviewData">
              <div className="col-sm-6 reviewImg"></div>
              <div className="col-sm-6">
                <h5>Real Name</h5>
                <p>Location</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 left">
            <div className="star1"></div>
            <p className="review">
              Include someone talking about how easy it was to sign up and
              participate.
            </p>
            <div className="row reviewData">
              <div className="col-sm-6 reviewImg"></div>
              <div className="col-sm-6">
                <h5>Real Name</h5>
                <p>Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container features">
        <div className="row gx-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>FEATURE 1</h4>
                <p className="card-text">
                  Talk about some of the details of your offer with a focus on
                  the value people get back.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_108c04p00000000000001o.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>FEATURE 2</h4>
                <p className="card-text">
                  Is there a pain point that your service resolves? Tell
                  visitors about it here.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card" style={{ width: "25rem" }}>
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_108c04p00000000000001o.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>FEATURE 3</h4>
                <p className="card-text">
                  Alternatively, you could use this section to address some
                  frequently asked questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container aboutSection">
        <div className="row">
          <div className="col-md-6 col-sm-12 aboutImg"></div>
          <div className="col-md-6 col-sm-12 aboutData">
            <h5 style={{ color: "cyan" }}>ABOUT</h5>
            <h2>Some more information about your business</h2>
            <p>
              Share a little about yourself as a business owner, or maybe
              describe what makes your service unique. Give visitors one more
              reason to care about your offer and want to work with you.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-6 logo2" style={{ marginLeft: "200px" }}></div>
          <div className="col-md-4">
            <p style={{ color: "white" }}>
              © 2020 Insert Name Here. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
