import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ activeCount, hideCompleted, toggleCompletedFilter }) => (
  <header className="tasker-header">
    <span>
      Todo List (
      {activeCount}
      )
    </span>
    <div className="float-right">
      <input
        className="toggle-filter"
        type="checkbox"
        checked={hideCompleted}
        onChange={() => toggleCompletedFilter()}
      />
      <label>Hide Completed Tasks</label>
    </div>
  </header>
);

Header.propTypes = {
  activeCount: PropTypes.number.isRequired,
  hideCompleted: PropTypes.bool.isRequired,
  toggleCompletedFilter: PropTypes.func.isRequired,
};

export default Header;
