import React, { Component } from 'react'
import PriceDetail from './PriceDetail';

import ModalForm from './ModalForm';


export default class Prices extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            prices: [],
            active: '',
            modal: false
        }
        this.changeActive = this.changeActive.bind(this);
    }

    componentDidMount(){
        this.setState({
            category: this.props.uid,
            prices: this.props.prices,
            active: 'Qualified 40',
            modal: false
        });

        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.uid){
            this.setState({category: nextProps.uid});
        }
        if(nextProps.prices){
            this.setState({prices: nextProps.prices});
        }
    }

    changeActive = (val) => {
        this.setState({active: val});
    }

    openForm = () => {
        this.setState({modal: true});
    }

    closeForm = () => {
        this.setState({modal: false});
    }

    render() {
        var {category, prices, active, modal} = this.state;
        const leads = active.split(' ')[1];
        return (
            <div className = 'row'>
                <ModalForm 
                    openForm = {this.openForm}
                    closeForm = {this.closeForm}
                    open = {modal}
                    plan = {active}
                    numberofleads = {leads}
                />
                {
                    prices.map(data => 
                        <div onClick = {(val) => this.changeActive(data.title)}>
                            <PriceDetail 
                                title = {data.title}
                                qualifiedpermonth = {data.qualifiedpermonth}
                                priceperlead = {data.priceperlead}
                                pricepermonth = {data.pricepermonth}
                                totalprice = {data.totalprice}
                                finalprice = {data.finalprice}
                                active = {active == data.title}
                                openForm = {this.openForm}
                            />
                        </div>
                    )
                }

                <div className = 'col s3' onClick = {this.openForm}>
                    <div className = 'box-container'>
                        <div className = 'box grey lighten-3'>
                            <div className = 'box-title bold teal lighten-3'>
                                {'Enterprise'}
                            </div>
                            <div className = 'box-body'>
                                <h5>Want more than 80 qualified leads each month?</h5>
                            </div>
                        </div>
                        <div className = 'box-post red'>
                            Get In Touch
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

