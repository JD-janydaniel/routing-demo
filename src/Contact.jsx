function Contact() {
  return (
    <div className="container">
      <div className="row">
        <h1>Contact Us</h1>
        <div className="col-lg-12">
          <label htmlFor="">UserName</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-6">
          <label htmlFor="">Email</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-6">
          <label htmlFor="">Phone</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-12">
          <label htmlFor="">UserName</label>
          <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
        </div>
        <div className="col-lg-12 mt-2">
            <input type="button"  className="btn btn-primary"value={"Submit"}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
