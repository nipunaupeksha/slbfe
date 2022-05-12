import React, { Component } from "react";
import CitizenService from "../../services/CitizenService";

class ViewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      citizen: {},
      passport:{}, nic:{}, bc:{}
    };
  }

  componentDidMount() {
    CitizenService.getCitizenById(this.state.id).then((res) => {
      this.setState({ citizen: res.data, passport:res.data.passport, nic:res.data.nic, bc:res.data.birthCertificate });
    });
  }

  goBack(){
      this.props.history.push("/citizens");
  }

  updateCitizen(){
      this.props.history.push("/add-citizen/"+this.state.nic.nicId)
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center" style={{color:"#000"}}> View Citizen Contact Details</h3>
          <div className="card-body">
            <div className="row">
              <label style={{color:"#000"}}> First Name: </label>
              <div style={{color:"#000"}}> {this.state.citizen.firstName}</div>
            </div>
            <div className="row">
              <label style={{color:"#000"}}>Last Name: </label>
              <div style={{color:"#000"}}> {this.state.citizen.lastName}</div>
            </div>
            <div className="row">
              <label style={{color:"#000"}}> Sur Name: </label>
              <div style={{color:"#000"}}> {this.state.citizen.surName}</div>
            </div>
            <div className="row">
              <label style={{color:"#000"}}> Email: </label>
              <div style={{color:"#000"}}> {this.state.citizen.email}</div>
            </div>
            <div className="row">
              <label style={{color:"#000"}}> Phone: </label>
              <div style={{color:"#000"}}> {this.state.citizen.phone}</div>
            </div>
            <div className="row">
              <label style={{color:"#000"}}> Mobile: </label>
              <div style={{color:"#000"}}> {this.state.citizen.mobile}</div>
            </div>
            <div className="row">
              <label style={{color:"#000"}}> Address: </label>
              <div style={{color:"#000"}}> {this.state.citizen.address}</div>
            </div>
            <button
                    className="btn btn-success"
                    onClick={this.goBack.bind(this)}
                  >Back</button>
                  &nbsp;
                  &nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default ViewContact;
