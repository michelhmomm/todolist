import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './../Actions';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class ChangeFilterTypeButton extends React.Component {

  render() {
    const { clickButton } = this.props;    
    var value;

    return (
        <div style={{padding: "10px"}}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Filtro:</FormLabel>
            <RadioGroup row aria-label="filter" name="filter" defaultValue="1" onChange={(value) => clickButton(value)} value={value}>
              <FormControlLabel value="1" control={<Radio defaultChecked="true" />} label="Todas" />
              <FormControlLabel value="2" control={<Radio />} label="Concluidas" />
              <FormControlLabel value="3" control={<Radio />} label="Em andamento" />
            </RadioGroup>
          </FormControl>
        </div>)
  }
}

const mapStateToProps = store => ({
    newValue: store.changeFilterType.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChangeFilterTypeButton);

