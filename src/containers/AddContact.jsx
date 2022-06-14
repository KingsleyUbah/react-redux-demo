import React from 'react';
import AddContactForm from '../components/AddContactForm';
import { addContact, onInputChange, toggleContactForm } from '../actions';
import { useSelector, useDispatch } from 'react-redux';



function AddContact(props) {
    // Get state
    const isHidden = useSelector(state => state.ui.isAddContactFormHidden)
    const newContact = useSelector(state => state.contacts.newContact)

    // Get dispatcher
    const dispatch = useDispatch()

    const showAddContactBox = () => {
        dispatch(toggleContactForm())		
	}

	const handleInputChange = (event) => {
		const target = event.target;
    	const value = target.value;
    	const name = target.name;
   		        
        dispatch(onInputChange(name, value))    	
   	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(toggleContactForm())    	
        dispatch(addContact())    			
	}

    const renderForm = () => {
        return(
			<div className="col-sm-8 offset-sm-2">
				<AddContactForm onFormSubmit={handleSubmit} onInputChange={handleInputChange} />
 			</div>
 		)
    }

    return(
        <div>			
            { isHidden === false ? renderForm(): <button onClick={showAddContactBox} className="btn"> Add Contact </button>}
        </div>
    )
}

export default AddContact;
