import React, { Component } from 'react'
import CitizenService from '../../services/CitizenService'

class ListCitizens extends Component {
    constructor(props) {
        super(props)

        this.state = {
                citizens: []
        }
        this.editCitizen = this.editCitizen.bind(this);
        this.viewCitizen = this.viewCitizen.bind(this);
        this.deleteCitizen = this.deleteCitizen.bind(this);
        this.viewContact = this.viewContact.bind(this);
    }

    deleteCitizen(id){
        CitizenService.deleteCitizen(id).then( res => {
            this.setState({citizens: this.state.citizens.filter(citizen => citizen.nic.nicId !== id)});
        });
    }
    viewContact(id){
        CitizenService.getContactInfo(id).then(res=>{
            this.props.history.push('/view-contact/'+id)
        });
    }
    viewCitizen(id){
        this.props.history.push('/view-citizen/'+id);
    }
    editCitizen(id){
        this.props.history.push('/add-citizen/'+id);
    }

    componentDidMount(){
        CitizenService.getCitizens().then((res) => {
            this.setState({ citizens: res.data});
        });
    }

    render() {
        return (
            <div className="container">
                 <h2 className="text-center">Citizen List</h2>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th style={{color:"#fff"}}> NIC</th>
                                    <th style={{color:"#fff"}}> Citizen First Name</th>
                                    <th style={{color:"#fff"}}> Citizen Last Name</th>
                                    <th style={{color:"#fff"}}> Citizen Email Id</th>
                                    <th style={{color:"#fff"}}> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.citizens.map(
                                        citizen => 
                                        <tr key = {citizen.nic.nicId}>
                                            <td style={{color:"#fff"}}>{citizen.nic.nicId}</td>
                                             <td style={{color:"#fff"}}> { citizen.firstName} </td>   
                                             <td style={{color:"#fff"}}> {citizen.lastName}</td>
                                             <td style={{color:"#fff"}}> {citizen.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editCitizen(citizen.nic.nicId)} className="btn btn-info" >Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCitizen(citizen.nic.nicId)} className="btn btn-danger" >Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCitizen(citizen.nic.nicId)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewContact(citizen.nic.nicId)} className="btn btn-success">Contact </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCitizens;