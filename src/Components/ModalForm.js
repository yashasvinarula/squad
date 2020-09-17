import React, { Component } from 'react';
import Modal from 'react-modal';


export default class ModalForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            plan: ''
        }
    }

    componentDidMount(){
        this.setState({open: this.props.open, plan: this.props.plan})
    }

    componentWillReceiveProps(nextProps){
        this.setState({open: nextProps.open, plan: nextProps.plan});
    }

    render() {
        const {open, plan} = this.state;
        return (
            <Modal
                isOpen={open}
                onRequestClose={this.props.closeForm}
                contentLabel="Example Modal"
                >
                <span style = {{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'}} onClick = {this.props.closeForm}>X</span>
                <center>
                    <h4 className = 'bold'>Get started with SquadVoice</h4>
                </center>
                <span className = 'bold'>Plan Selected: </span> {plan}
                <div className = 'row'>
                    <div class="input-field col s12">
                        <input id="last_name" type="text" class="validate" />
                        <label for="last_name">Name</label>
                    </div>
                    <div className = 'input-field col s6'>
                        <input id="last_name" type="text" class="validate" />
                        <label for="last_name">Email Address</label>
                    </div>
                    <div className = 'input-field col s6'>
                        <input id="last_name" type="text" class="validate" />
                        <label for="last_name">Phone Number</label>
                    </div>
                    <div class="input-field col s6">
                        <label>Number of leads you generate in an month</label>
                        <select>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="input-field col s6">
                        <label>Total Leads in your CRM's</label>
                        <select>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="input-field col s6">
                        <label>Which CRM do you use</label>
                        <select>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="input-field col s6">
                        <label>No. of Agents</label>
                        <select>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <p>What are your biggest lead resources</p>
                    <label>
                        <input type="checkbox"/>
                        <span style = {{margin: '10px'}}>Zillow</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span style = {{margin: '10px'}}>Realtors</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span style = {{margin: '10px'}}>Ylopo</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        <span style = {{margin: '10px'}}>Others</span>
                    </label>
                    
                    <p>How did you hear about us</p>
                    <label>
                        <input type="checkbox"/>
                        <span style = {{margin: '10px'}}>Google</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span style = {{margin: '10px'}}>Facebook</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span style = {{margin: '10px'}}>Email</span>
                    </label>
                    <label>
                        <input type="checkbox"/>
                        <span style = {{margin: '10px'}}>Others</span>
                    </label>

                    <br /><br /><br />
                    <a class="waves-effect waves-light btn-large" onClick = {this.props.closeForm}>Submit</a>


                </div>
                
            </Modal>
        )
    }
}
