import React from 'react';
import PropTypes from 'prop-types';
const TablePeople = ({ people, setSortBy, deletePeople}) => {
  return (
    <div>
      <div className="people_table">
        <table className="ui inverted table">
          <thead>
            <tr>
              <td onClick={() => setSortBy('id')}>Id</td>
              <td onClick={() => setSortBy('name')}>Name</td>
              <td onClick={() => setSortBy('email')}>Email</td>
              <td onClick={() => setSortBy('username')}>user_name</td>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td> {person.name}</td>
                <td> {person.email}</td>
                <td >{person.username}</td>
                <td onClick={()=>deletePeople(person.id)}>
                <i className="trash alternate icon" />
                </td>
                <td>
                  <i class="edit icon"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TablePeople.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSortBy: PropTypes.func.isRequired,
  deletePeople: PropTypes.func.isRequired,
};

export default TablePeople;
