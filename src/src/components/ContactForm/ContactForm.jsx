import { Component } from 'react';


import css from '../ContactForm/ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
};


handleChange = event => {
    const {name, value} = event.currentTarget
    this.setState({[name]: value});
};

handleSubmit = event => {
    event.preventDefault();
    this.props.onChange(this.state);
    this.formReset();
};

formReset = () => {
    this.setState({name: '', number: ''})
};

  render() {
    const {name, number} = this.state;
    return (
      <section className={css.form}> 
        <form className={css.form__container} onSubmit={this.handleSubmit}>
          <label className={css.form__label}>Name</label>
          <input
            type="text"
            name="name"
            className={css.form__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <label className={css.form__label}>Number</label>
          <input
            type="tel"
            name="number"
            className={css.form__input}
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
            required
          />
          <button 
          className={css.form__btn}
          type="submit"
          >
            Add contact
          </button>
        </form>
      </section>
    );
  }
}

