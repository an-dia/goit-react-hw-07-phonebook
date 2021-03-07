import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <li className={s.listItem}>
        <p className={s.text}>
          {name} : {number}
        </p>
        <button className={s.button} type="button" onClick={onDeleteContact}>
          Delete
        </button>
      </li>    
    </>
  );
};

export default ContactItem;
