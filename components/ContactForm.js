var ContactForm = React.createClass ({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
      <>
        <form className={'contactForm'}>
          <input type={'text'} placeholder={'imie'} value={this.props.contact.firstName} className={'form-control'}/>
          <input type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName} className={'form-control'}/>
          <input type={'email'} placeholder={'Email'} value={this.props.contact.email} className={'form-control'}/>
        </form>
        <button className='btn btn-primary' type='submit'>Dodaj kontakt</button>
      </>
      )
    },
});


