import React from 'react';
import '../Contacts.css';
import AddContact from './AddContact';
import ContactList from '../components/ContactList';
import { useSelector } from 'react-redux'; 
import {fetchContacts} from '../actions';


function Contacts() {
  const contactList = useSelector(state => state.contacts.contactList)     
  const searchText = useSelector(state => state.contacts.searchText)     
  
  const returnContactList = () => {
    return contactList;
  }
    
    return (
        <div>
     		<br />
         	<AddContact/>
         	<br />
          <ContactList contactList= {returnContactList()} />
        </div>
    );  
}

export default Contacts