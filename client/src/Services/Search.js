import React from 'react';
import $ from 'jquery';
import ListRow from '../Components/ListRow';

class Search extends React.Component {  

  constructor(props) {
    super(props)    

    var listRowsValue = [ {id: 1, description: "teste '1"}, {id: 2, description: "teste 2"}, {id: 3, description: "3 teste"}, {id: 4, description: "4444"}, {id: 5, description: "te5te"},
                          {id: 6, description: "teste '61"}, {id: 7, description: "777"}, {id: 8, description: "38 teste"}, {id: 9, description: "999"}, {id: 10, description: "10101010"}]

    this.state = {defaultRows: listRowsValue}
  }

  performSearch(searchTerm, type) {   
    
    var listRows = [];    

    var searchFilter = this.state.defaultRows.filter(rows => rows.description.includes(searchTerm));

    searchFilter.forEach((item) => {
      const row = <ListRow id={item.id} description={item.description}/>
      listRows.push(row)
    })

    return listRows;
  }  

  discoverySearch(type) {   
    var listRows = [];

    this.state.defaultRows.forEach((item) => {
      const row = <ListRow id={item.id} description={item.description}/>
      listRows.push(row)
    })

    return listRows;
  }  
}

export default Search;