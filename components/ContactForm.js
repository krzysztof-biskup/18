var ContactForm = React.createClass ({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
       /*React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
          className: 'form-control'
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
          className: 'form-control'
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
          className: 'form-control'
        }),
        React.createElement('button', {type: 'submit', className: 'btn btn-primary'}, "Dodaj kontakt")
      ) */

      <form className={'contactForm'}>
        <input className={'form-control'} type={'text'} placeholder={'Imie'} value={this.props.contact.firstName}></input>
        <input className={'form-control'} type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
        <input className={'form-control'} type={'text'} placeholder={'Email'} value={this.props.contact.email}></input>
      </form>,
      <button type={'submit'} className={'btn btn-primary'}>Dodaj kontakt</button>
    )
  },
})