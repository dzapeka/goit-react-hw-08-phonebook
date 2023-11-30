import { useDispatch } from 'react-redux';
import styles from './ContectListItem.module.css';
import { deleteContactThunk } from 'redux/contacts/contacts.operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={styles.contactListItem}>
      {name}: {number}
      <button
        className={styles.deleteContactBtn}
        onClick={handleDeleteContact}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
