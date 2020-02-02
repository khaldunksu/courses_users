import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import TableCourses from './TableCourses';
import courses from '../../api/courses';
import NewCourses from './NewCourses';
import { Route, NavLink, HashRouter } from 'react-router-dom';


const CoursesPage = () => {
  useEffect(() => {
     setCours(courses);
     
  }, []);

  const [cours, setCours] = useState([]);

  const addCourses=(title, completed,duration)=> {
    setCours(prevCourse => ([...prevCourse, {
      title, completed, duration,
      id:
        Math.max(...prevCourse.map(person => person.id)) + 1,
    }]));
  }
  

  const setSortBy = (selectParams) => {
    switch (selectParams) {
      case 'title':
      case 'completed':
        case 'duration':
        setCours([...cours]
          .sort((a, b) => a[selectParams].localeCompare(b[selectParams])));
        break;
      case 'id':
        setCours([...cours]
          .sort((a, b) => a[selectParams] - b[selectParams]));
        break;
      default: setCours([...cours]);
    }

    searchParams.set('sortBy', selectParams);
    history.push({ search: searchParams.toString() });
  };

  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  const query = searchParams.get('query') || '';
  const handleInputQuery = (event) => {
    searchParams.set('query', event.target.value.toLowerCase());
    history.push({
      search: searchParams.toString(),
    });
  };

  const deleteCourse =(id)=>{
    setCours([...cours].filter(item=> item.id!==id))
  }

  const searchCourses = () => (
    cours.filter(i => (i.title || '').toLowerCase().includes(query)));

  const visibleCourse = query ? searchCourses() : [...cours];

  return (
    <div>
      <div className="ui left icon input">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputQuery}
        />
        <i className="users icon" />
      </div>
      <HashRouter>
      <p className="ui secondary  menu" >
        <NavLink className="item" to="/courses/new_cours" exact >Add</NavLink>
      </p>
      <Route
                path="/courses/new_cours"
                render={() => (
                  <NewCourses
                   addPerson={addCourses}
                  />
                )}
              />
    </HashRouter>
      <TableCourses setSortBy={setSortBy} courses={visibleCourse} deleteCourse={deleteCourse} />
    </div>
  );
};

export default CoursesPage;