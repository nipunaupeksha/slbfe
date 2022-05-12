import React, { Component } from "react";
import CitizenService from "../../services/CitizenService";

class CreateCitizenComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      surName: "",
      gender: "",
      dateOfBirth: "",
      age: "",
      profession: "",
      affiliation: "",
      email: "",
      phone: "",
      mobile: "",
      address: "",
      passportId: "",
      passportFile: "",
      nicId: "",
      nicFile: "",
      birthCertificateId: "",
      birthCertificateFile: "",
      qualificationList: "",
      password: ""
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeSurNameHandler = this.changeSurNameHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeDOBHandler = this.changeDOBHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeProfessionHandler = this.changeProfessionHandler.bind(this);
    this.changeAffiliationHandler = this.changeAffiliationHandler.bind(this);
    this.changePassportIdHandler = this.changePassportIdHandler.bind(this);
    this.changePassportFileHandler = this.changePassportFileHandler.bind(this);
    this.changeNicIdHandler = this.changeNicIdHandler.bind(this);
    this.changeNicFileHandler = this.changeNicFileHandler.bind(this);
    this.changeBirthCertificateIdHandler =
      this.changeBirthCertificateIdHandler.bind(this);
    this.changeBirthCertificateFileHandler =
      this.changeBirthCertificateFileHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeQualificationsHandler =
      this.changeQualificationsHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
  }

  componentDidMount() {
    if ((this.state.id === "_add")) {
      return;
    } else {
      CitizenService.getCitizenById(this.state.id).then((res) => {
        let citizen = res.data;
        console.log(citizen)
        let nic = res.data.nic;
        let passport = res.data.passport;
        let bc = res.data.birthCertificate;
        let q = res.data.qualificationList;
        
        this.setState({
          firstName: citizen.firstName,
          lastName: citizen.lastName,
          surName: citizen.surName,
          gender: citizen.gender,
          dateOfBirth: citizen.dateOfBirth,
          age: citizen.age,
          password: citizen.password,
          profession: citizen.profession,
          affiliation: citizen.affiliation,
          email: citizen.email,
          phone: citizen.phone,
          mobile: citizen.mobile,
          address: citizen.address,
          passportId: passport.passportId,
          passportFile: passport.passportFile,
          nicId: nic.nicId,
          nicFile: nic.nicFile,
          birthCertificateId: bc.birthCertificateId,
          birthCertificateFile: bc.birthCertificateFile,
          qualificationsList: q
        });
      });
    }
  }

  changeFirstNameHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };
  changeLastNameHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };
  changePasswordHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  changeSurNameHandler = (e) => {
    this.setState({ surName: e.target.value });
  };
  changeGenderHandler = (e) => {
    this.setState({ gender: e.target.value });
  };
  changeDOBHandler = (e) => {
    this.setState({ dateOfBirth: e.target.value });
  };
  changeAddressHandler = (e)=>{
    this.setState({ address: e.target.value });
  }
  changeAgeHandler = (e) => {
    this.setState({ age: e.target.value });
  };
  changeProfessionHandler = (e) => {
    this.setState({ profession: e.target.value });
  };
  changeAffiliationHandler = (e) => {
    this.setState({ affiliation: e.target.value });
  };

  changePassportIdHandler = (e) => {
    this.setState({ passportId: e.target.value });
  };
  changePassportFileHandler = (e) => {
    this.setState({ passportFile: e.target.value });
  };

  changeNicIdHandler = (e) => {
    this.setState({ nicId: e.target.value });
  };
  changeNicFileHandler = (e) => {
    this.setState({ nicFile: e.target.value });
  };

  changeBirthCertificateIdHandler = (e) => {
    this.setState({ birthCertificateId: e.target.value });
  };
  changeBirthCertificateFileHandler = (e) => {
    this.setState({ birthCertificateFile: e.target.value });
  };

  changeEmailHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  changePhoneHandler = (e) => {
    this.setState({ phone: e.target.value });
  };
  changeMobileHandler = (e) => {
    this.setState({ mobile: e.target.value });
  };

  changeQualificationsHandler = (e) => {
    this.setState({ qualificationList: e.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  saveOrUpdateCitizen = (e) => {
    e.preventDefault();
    let citizen = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      surName: this.state.surName,
      gender: this.state.gender,
      dateOfBirth: this.state.dateOfBirth,
      age: this.state.age,
      profession: this.state.profession,
      affiliation: this.state.affiliation,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      mobile: this.state.mobile,
      address: this.state.address,
      passport: {
        passportId: this.state.passportId,
        passportFile: this.state.passportFile,
      },
      nic: {
        nicId: this.state.nicId,
        nicFile: this.state.nicFile,
      },
      birthCertificate: {
        birthCertificateId: this.state.birthCertificateId,
        birthCertificateFile: this.state.birthCertificateFile,
      },
      qualificationList: this.state.qualificationList.split(","),
    };
    if (this.state.id === "_add") {
      CitizenService.createCitizen(citizen).then((res) => {
        this.props.history.push("/");
      });
    } else {
      CitizenService.updateCitizen(citizen, this.state.nicId).then((res) => {
        this.props.history.push("/view-citizen/"+this.state.nicId);
      });
    }
  };

  getTitle() {
    if (this.state.id == "_add") {
      return (
        <h3 className="text-center" style={{ color: "#000" }}>
          Add Citizen
        </h3>
      );
    } else {
      return (
        <h3 className="text-center" style={{ color: "#000" }}>
          Update Citizen
        </h3>
      );
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Sur Name:</label>
                    <input
                      type="text"
                      placeholder="Sur Name"
                      name="surName"
                      className="form-control"
                      value={this.state.surName}
                      onChange={this.changeSurNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Gender:</label>
                    <input
                      type="text"
                      placeholder="gender"
                      name="gender"
                      className="form-control"
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Date of Birth:</label>
                    <input
                      type="text"
                      placeholder="Date of Birth"
                      name="dateOfBirth"
                      className="form-control"
                      value={this.state.dateOfBirth}
                      onChange={this.changeDOBHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input
                      type="text"
                      placeholder="age"
                      name="age"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Profession:</label>
                    <input
                      type="text"
                      placeholder="Profession"
                      name="profession"
                      className="form-control"
                      value={this.state.profession}
                      onChange={this.changeProfessionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Gender:</label>
                    <input
                      type="text"
                      placeholder="Affiliation"
                      name="affiliation"
                      className="form-control"
                      value={this.state.affiliation}
                      onChange={this.changeAffiliationHandler}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Phone:</label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.changePhoneHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Mobile:</label>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      name="mobile"
                      className="form-control"
                      value={this.state.mobile}
                      onChange={this.changeMobileHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Address:</label>
                    <input
                      type="tel"
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="">Passport Id:</label>
                    <input
                      type="text"
                      placeholder="Passport Id"
                      name="passporId"
                      className="form-control"
                      value={this.state.passportId}
                      onChange={this.changePassportIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Passport File:</label>
                    <input
                      type="text"
                      placeholder="Passport File"
                      name="passportFile"
                      className="form-control"
                      value={this.state.passportFile}
                      onChange={this.changePassportFileHandler}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="">Nic Id:</label>
                    <input
                      type="text"
                      placeholder="Nic Id"
                      name="nicId"
                      className="form-control"
                      value={this.state.nicId}
                      onChange={this.changeNicIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Nic File:</label>
                    <input
                      type="text"
                      placeholder="Nic File"
                      name="mobile"
                      className="form-control"
                      value={this.state.nicFile}
                      onChange={this.changeNicFileHandler}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="">Birth Certificate Id:</label>
                    <input
                      type="text"
                      placeholder="Birth Certificate Id"
                      name="birthCertificateId"
                      className="form-control"
                      value={this.state.birthCertificateId}
                      onChange={this.changeBirthCertificateIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Birth Certificate File:</label>
                    <input
                      type="text"
                      placeholder="Birth Certificate File"
                      name="birthCertificateFile"
                      className="form-control"
                      value={this.state.birthCertificateFile}
                      onChange={this.changeBirthCertificateFileHandler}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  {this.state.id ==='_add' && 
                  (<div className="form-group">
                    <label htmlFor="">Qualifications (comma separated):</label>
                    <input
                      type="text"
                      placeholder="Qualifications"
                      name="qualifications"
                      className="form-control"
                      value={this.state.qualificationList}
                      onChange={this.changeQualificationsHandler}
                    />
                  </div>)}
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateCitizen}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCitizenComponent;
