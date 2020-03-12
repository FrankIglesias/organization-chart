import React, { Component } from 'react';
import { getEmployeesByManager } from '../../services/organization';
import styles from './styles.module.scss';
import { error } from '../../services/notifications';

class Node extends Component {
  state = { employees: [], noEmployees: false }

  fetchEmployees = () => {
    getEmployeesByManager(this.props.id).then(response => {
      this.setState({ employees: response.data, noEmployees: !response.data.length });
      if (!response.data.length)
        error('No hay empleados');
    });
  }

  render() {
    return (
      <div className="width-100 column center">
        <div className={styles.employee + ' column center middle'}>
          <span className={styles.name}>{this.props.first} {this.props.last}</span>
          {(!this.state.employees.length && !this.state.noEmployees) && <button onClick={this.fetchEmployees} className={styles.more}>+</button>}
        </div>
        <div className="row center">{this.state.employees.map(employee => <Node key={employee.id} {...employee} />)}</div>
      </div>);
  }
}

export default Node;
