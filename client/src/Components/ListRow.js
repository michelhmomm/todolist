import React from 'react'
import { connect } from 'react-redux';

class ListRow extends React.Component {
  render() {
    return (
        <div key={this.props.id}>
          <p>{this.props.description}</p>          
        </div>)
  }

}

const mapStateToProps = store => ({
  newValue: store.changeFilterType.newValue
});

export default connect(mapStateToProps, null)(ListRow);