import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import TablePeople from './TablePeople';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import users from '../../api/users';
import NewPerson from './NewPerson';

const PeoplePage = () => {
  useEffect(() => {
     setPeople(users);  
  }, []);

  const [people, setPeople] = useState([]);
 

  const addPerson=(name, email,username)=> {
    setPeople(prevPeople=> ([...prevPeople, {
      name, email,username,
      id:
        Math.max(...prevPeople.map(person => person.id)) + 1,
    }]));
  }

  const setSortBy = (selectParams) => {
    switch (selectParams) {
      case 'name':
      case 'username':
      case 'email':
        setPeople([...people]
          .sort((a, b) => a[selectParams].localeCompare(b[selectParams])));
        break;
      case 'id':
        setPeople([...people]
          .sort((a, b) => a[selectParams] - b[selectParams]));
        break;
      default: setPeople([...people]);
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
  const deletePeople =(id)=>{
    setPeople([...people].filter(person=> person.id!==id))
  }
    
  
 
  const searchPeople = () => (
    people.filter(person => (person.name || '').toLowerCase().includes(query)));

  const visiblePeople = query ? searchPeople() : [...people];

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
        <NavLink className="item" to="/users/new_user" exact >Add</NavLink>
      </p>
      <Route
                path="/users/new_user"
                render={() => (
                  <NewPerson
                   addPerson={addPerson}
                  />
                )}
              />
    </HashRouter>
      <TablePeople 
      setSortBy={setSortBy}
       people={visiblePeople}
       deletePeople={deletePeople} />
    </div>
  );
};


export default PeoplePage