// ************************************************************************
// Summary.js - Component displaying the user's overall monthly total. 
// ************************************************************************

// Dependencies
import React, { Component } from 'react';

class Summary extends Component {
  render() {
    // Caculates the overall monthly total
    let monthlyTotal = this.props.totalIncome - this.props.totalExpenses
    return(
      <div className="card w-75">
        <div className="card-header card-header-summary">
          Overall Monthly Total: 
        </div>
        <div className="card-body card-body-summary">
          <h3>${monthlyTotal.toFixed(2)}</h3> 
        </div>
      </div>
    )
  }
}

export default Summary;
