import React, { Component } from 'react';

import Person from '../Components/Person/Person';
import AddPerson from '../Components/AddPerson/AddPerson';
import {connect} from 'react-redux';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.pers.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStatetoProps = state =>{
    return{
        pers: state.persons
    }
}

const mapDispatchtoProps = dispatch =>{
    return{
        onPersonAddedHandler: (name, age)=> dispatch({type:'PERSON_ADDEDED', personData:{name:name, age:age}}),
        onPersonDeleteHandler: (id)=>dispatch({type:'PERSON_DELETED', personId:id})
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps) (Persons);