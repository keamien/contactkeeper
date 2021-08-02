import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'
import Spinner from '../layout/Spinner'

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, filtered, getContacts, loading } = contactContext

  useEffect(() => {
    getContacts()
    //eslint-disable-next-line
  }, [])
  if (contacts && contacts.length === 0 && !loading) {
    return <h4>Please Add a Contact</h4>
  }

  return (
    <>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames='item'>
                  <ContactItem contact={contact} key={contact.id} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition key={contact.id} timeout={500} classNames='item'>
                  <ContactItem contact={contact} key={contact.id} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Contacts
