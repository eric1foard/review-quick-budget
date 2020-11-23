import React, { Component } from "react";


class ProjectionsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO (CB 10/11): Is it OK to have value here in state, as well as in Budget component in state?  It works well this way so that
      // ... we can use onBlur to clean the values, and so that not every single keystroke triggers re-renders (only exiting form)
      value: this.props.value
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }


    // When a user clicks out of the Value form they were editing, this cleans their value to look "financial"
  // ... by removing 0's to the left, and rounding to 2 decimal places. Then, it triggers handleChange, passing values to Budget
  handleOnBlur() {
    let cleanValue = this.state.value;
    if (cleanValue === "") cleanValue = 0;
    cleanValue = Number(this.state.value).toFixed(2);

    this.setState({ value: cleanValue });
    this.props.handleChange(this.props.id, cleanValue)
  }

  // Passes the value up to DashboardProjections
  handleChange(evt) {    
    this.setState({value: evt.target.value});
  }

  render() {

    return(

        <div className="form-group row">

            {/* Type's title, in upper case */}
            <div className="col-sm-9">
              <label htmlFor={this.props.title} className="col-form-label label-title">
                {this.props.title}
              </label>
              {/* Underneath the title, a description */}
              <div className="label-description">
                {this.props.description}
              </div>
            </div>

            {/* On the right side, the input for users to put $ amounts */}
            <div className="col-sm-3">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text" id="inputGroup-sizing-sm">$</div>
                </div>
                
                
                {/* Value goes here. (TODO (CB 10/5) - should Value be abstracted to a separate component for clarity?) */}
                <input
                  type="number" 
                  name={this.props.title}
                  id={this.props.title}
                  onChange={this.handleChange}
                  className="form-control"
                  value={this.state.value}
                  onBlur={this.handleOnBlur}
                />

              </div>
            </div>
          </div>
          


      // <div className="form-group row">
      //   <label htmlFor="colFormLabel" className="col-sm-8 col-form-label">
      //     {this.props.title}
      //   </label>
      //   <div className="col-sm-4">
      //     $
      //     <input 
      //       type="number"
      //       name={this.props.name}
      //       onChange={this.handleChange}
      //       className="form-control" 
      //       id={this.props.name}
      //       value={this.state.value}
      //       onBlur={this.handleOnBlur}
      //     />
      //   </div>
      // </div>


          
    )
  }
}

export default ProjectionsInput;