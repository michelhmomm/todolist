import React from 'react'
import Search from './../Services/Search';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import ChangeFilterTypeButton from './ChangeFilterTypeButton';
import ListRow from './ListRow';
import { addNewItem } from './../Actions';
import { bindActionCreators } from 'redux';

class List extends React.Component {

    constructor(props) {
        super(props)       

        const { addNewItem, defaultValues } = props;
        
        const search = new Search();  
        // var rows = search.discoverySearch(newValue); 
        // this.state = {rows: rows}
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

    // addNewItem(event) {
    //     const newItemDescription = event.target.value

    //     if (newItemDescription === '' || event.which !== 13)
    //         return;  
        
    //     // const { newValue } = this.props;
    //     const search = new Search();        
    //     var rows = search.performSearch();
    //     const row = <ListRow id={this.state.rows[this.state.rows.length-1].props.id + 1} description={newItemDescription}/>
    //     rows.push(row);

    //     this.setState({rows: rows})
    //     event.target.value = ""
    // }

    addNewItemEv(event) {
        const newItemDescription = event.target.value

        if (newItemDescription === '' || event.which !== 13)
            return;  
        
        addNewItem(newItemDescription);
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
                }}  onKeyDown={this.addNewItemEv.bind(this)} placeholder="Add new item"/>
                {/* }} onKeyDown={this.addNewItem.bind(this)} placeholder="Add new item"/> */}

                <div className="search-container" style={{display: 'flex'}}>
                    <ChangeFilterTypeButton/>
                </div>

                {/* <div style={{padding: "10px"}}>   
                    <div className="container">
                        <div className="row">
                            {this.state.rows && this.state.rows.map((item, key) =>
                                <div className="col-sm" key={key}>{item}</div>
                            )}
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = store => ({
    newValue: store.changeFilterType.newValue,
    defaultValues: store.addNewItem.defaultValues
});

const mapDispatchToProps = dispatch =>
     bindActionCreators({ addNewItem }, dispatch);


// export default List
export default connect(mapStateToProps, mapDispatchToProps)(List);