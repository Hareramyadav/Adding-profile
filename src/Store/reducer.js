
const initialState={
    persons:[]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case 'PERSON_ADDEDED':
                const newPerson = {
                    id: Math.random(), // not really unique but good enough here!
                    name: action.personData.name,
                    age: action.personData.age
                }
                return{
                    persons:state.persons.concat(newPerson)
                }
        case 'PERSON_DELETED':
            const updatedPersons= state.persons.filter(person => person.id !== action.personId);
            return{
                persons: updatedPersons
            }
    }
    return state;
}


export default reducer;