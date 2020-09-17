import React, { Component } from 'react'
import ModalForm from './ModalForm';

export default class PriceDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            priceperlead: 0,
            qualifiedpermonth: 0,
            pricepermonth: 0,
            finalprice: 0,
            active: false,
            modal: false
        }

        this.openForm = this.openForm.bind(this);
    }

    componentDidMount(){
        this.setState({
            title: this.props.title,
            priceperlead: this.props.priceperlead,
            qualifiedpermonth: this.props.qualifiedpermonth,
            pricepermonth: this.props.pricepermonth,
            finalprice: this.props.finalprice,
            active: this.props.active
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            title: nextProps.title,
            priceperlead: nextProps.priceperlead,
            qualifiedpermonth: nextProps.qualifiedpermonth,
            pricepermonth: nextProps.pricepermonth,
            finalprice: nextProps.finalprice,
            active: nextProps.active
        })
    }

    openForm = () => {
        this.setState({modal: true});
    }

    render() {
        const {title, priceperlead, qualifiedpermonth, pricepermonth,
            finalprice, active, modal} = this.state;
        return (
            <div className = 'col s3'>
                <div className = 'box-container'>
                    <div className = {active?'box grey lighten-3': 'box gret lighten-4'}>
                        <div className = 'box-title bold teal lighten-3'>
                            {title}
                        </div>
                        <div className = 'box-body'>
                            <h1>${priceperlead}</h1>
                            <p>Per Qualified Lead</p>
                            <div className = 'container'><hr /></div>
                            <p>Qualified Leads Per Month</p>
                            <h5>{qualifiedpermonth}</h5>
                            <div className = 'container'><hr /></div>
                            <p>Platform Fee Per Month</p>
                            <h5>${pricepermonth}</h5>
                        </div>
                        <div className = 'box-end teal lighten-3'>
                            <span className = 'bold' style = {{fontSize: '20px'}}>${finalprice}</span>
                        </div>
                    </div>
                    <div className = {active?'box-post red darken-2': 'box-post red'} onClick = {this.props.openForm}>
                            Start Your Trial
                    </div>
                </div>
            </div>
        )
    }
}
