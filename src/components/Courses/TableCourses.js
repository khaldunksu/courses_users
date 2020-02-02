import React from 'react';
import PropTypes from 'prop-types';

const TableCourses = ({ courses, setSortBy,deleteCourse }) => {
  return (
    <div>
      <div className="people_table g">
        <table className="ui inverted table">
          <thead>
            <tr>
              <td onClick={() => setSortBy('id')}>Id</td>
              <td onClick={() => setSortBy('title')}>Name</td>
              <td onClick={() => setSortBy('completed')}>Open set</td>
              <td onClick={() => setSortBy('duration')}>Course duration</td>
            </tr>
          </thead>
          <tbody>
            {courses.map((cours) => (
              <tr key={cours.id}>
                <td>{cours.id}</td>
                <td> {cours.title}</td>
                <td >{cours.completed}</td>
                <td >{cours.duration}</td>
                <td onClick={()=>deleteCourse(cours.id)}>
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
  )
};

TableCourses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSortBy: PropTypes.func.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

export default TableCourses;
