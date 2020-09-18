import React, { Component } from 'react';
import Modal from 'react-modal';


export default class ModalForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            plan: '',
            numberofleads: 0,
            name: '',
            email: '',
            phone: '',
            totalleads: '',
            crmused: '',
            numberofagents: 0,
            biggestleads: [],
            howdidyouknow: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        this.setState({
            open: this.props.open,
            plan: this.props.plan,
            numberofleads: this.props.numberofleads
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            open: nextProps.open, 
            plan: nextProps.plan,
            numberofleads: nextProps.numberofleads
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeCheck = e => {
        let name = e.target.name
        let arr = this.state.biggestleads;
        if(arr.includes(e.target.name) === true){
            arr.shift(e.target.name);
        }else{
            arr.push(e.target.name);
        }
        this.setState({[name]: arr});
    }

    submit = () => {
        const {plan, numberofleads, name, email, phone, totalleads, 
            crmused, numberofagents, biggestleads, howdidyouknow} = this.state;
        alert(`${plan}, ${numberofleads}, ${name}, ${email}, ${phone}, ${totalleads}, 
            ${crmused}, ${numberofagents}, ${biggestleads}, ${howdidyouknow}`);
        this.props.closeForm();
    }

    render() {
        const {open, plan, numberofleads, name, email, phone, totalleads, 
                crmused, numberofagents, biggestleads, howdidyouknow} = this.state;
        console.log(biggestleads, howdidyouknow);
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
                    <div className="input-field col s12">
                        <input name="name" type="text" class="validate" value = {name} onChange = {this.handleChange} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className = 'input-field col s6'>
                        <input name="email" type="email" class="validate" value = {email} onChange = {this.handleChange} />
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <div className = 'input-field col s6'>
                        <input name="phone" type="text" max = {10} class="validate" value = {phone} onChange = {this.handleChange} />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="numberofleads" type="text" class="validate" value = {numberofleads} disabled />
                        <label htmlFor="numberofleads">Number of leads you generate in a month</label>
                    </div>
                    <div class="input-field col s6">
                        <select name = "totalleads" onChange = {this.handleChange}>
                            <option selected disabled value = {totalleads}></option>
                            <option value="20">20</option>
                            <option value="40">40</option>
                            <option value="80">80</option>
                        </select>
                        <label>Total Leads in your CRM's</label>
                    </div>
                    <div class="input-field col s6">
                        <select name = "crmused">
                            <option selected disabled value = {crmused}></option>
                            <option value="option 1">Option 1</option>
                            <option value="option 2">Option 2</option>
                            <option value="option 3">Option 3</option>
                        </select>
                        <label>Which CRM do you use</label>
                    </div>
                    <div class="input-field col s6">
                        <select name = "numberofagents">
                            <option selected disabled value = {numberofagents}></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <label>No. of Agents</label>
                    </div>
                    <p>What are your biggest lead resources</p>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "zillow"/>
                        <span style = {{margin: '10px'}}>Zillow</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "realtors"/>
                        <span style = {{margin: '10px'}}>Realtors</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "ylopo"/>
                        <span style = {{margin: '10px'}}>Ylopo</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "others"/>
                        <span style = {{margin: '10px'}}>Others</span>
                    </label>
                    
                    <p>How did you hear about us</p>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "google"/>
                        <span style = {{margin: '10px'}}>Google</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "facebook"/>
                        <span style = {{margin: '10px'}}>Facebook</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "email"/>
                        <span style = {{margin: '10px'}}>Email</span>
                    </label>
                    <label>
                        <input type="checkbox" onChange = {this.handleChangeCheck} name = "others"/>
                        <span style = {{margin: '10px'}}>Others</span>
                    </label>

                    <br /><br /><br />
                    <a class="waves-effect waves-light btn-large" onClick = {this.submit}>Submit</a>
                </div>
            </Modal>
        )
    }
}
