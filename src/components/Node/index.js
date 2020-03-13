import React, { Component } from 'react';
import i18next from 'i18next';

import { getEmployeesByManager } from '../../services/organization';
import { error } from '../../services/notifications';

import styles from './styles.module.scss';

class Node extends Component {
  state = { employees: [], noEmployees: false }

  fetchEmployees = () => {
    getEmployeesByManager(this.props.id).then(response => {
      this.setState({ employees: response.data, noEmployees: !response.data.length });
      if (!response.data.length)
        error(i18next.t('Node:noEmployees'));
    });
  }

  render() {
    return (
      <div className="width-100 column center">
        <div className={`${styles.employee} column center middle`}>
          <span className={styles.name}>{this.props.first} {this.props.last}</span>
          {(!this.state.employees.length && !this.state.noEmployees) && <button onClick={this.fetchEmployees} className={styles.more}>+</button>}
        </div>
        <div className={`${styles.container} row space-around`}>{this.state.employees.map(employee => <Node key={employee.id} {...employee} />)}</div>
      </div>);
  }
}

export default Node;
