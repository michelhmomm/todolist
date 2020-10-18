import React from 'react'
import Search from './../Services/Search';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import ChangeFilterTypeButton from './ChangeFilterTypeButton';

class List extends React.Component {

    constructor(props) {
        super(props)       

        const { newValue } = props;
        
        const search = new Search();  
        var rows = search.discoverySearch(newValue); 
        this.state = {rows: rows}
    }    

    searchChangeHandler(event) {
        const searchTerm = event.target.value

        if (searchTerm === '')
            return;  
        
        const { newValue } = this.props;
        const search = new Search();        
        var rows = search.performSearch(searchTerm, newValue);
        this.setState({rows: rows})
    }

    render() {
        return (
            <div>
                <input style={{
                    fontSize: 24,
                    display: 'flex',
                    width: "80%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16
                }} placeholder="Add new item"/>

                <div className="search-container" style={{display: 'flex'}}>
                    <input style={{
                        fontSize: 24,
                        display: 'block',
                        width: "40%",
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 16
                    }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
            
                    <ChangeFilterTypeButton/>
                </div>

                <div style={{padding: "10px"}}>   
                    <div className="container">
                        <div className="row">
                            {this.state.rows && this.state.rows.map((item, key) =>
                                <div className="col-sm" key={key}>{item}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    newValue: store.changeFilterType.newValue
});

// const mapDispatchToProps = dispatch =>
//      bindActionCreators({ clickButton }, dispatch);


// export default List
export default connect(mapStateToProps, null)(List);