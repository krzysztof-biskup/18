var ContactForm = React.createClass ({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
  <form className={'contactForm'}>
        <input className={'form-control'} type={'text'} placeholder={'Imie'} value={this.props.contact.firstName}></input>
        <input className={'form-control'} type={'text'} placeholder={'Nazwisko'} value={this.props.contact.lastName}></input>
        <input className={'form-control'} type={'text'} placeholder={'Email'} value={this.props.contact.email}></input>
        <button className={"btn btn-primary"}>Dodaj kontakt</button>
  </form>
    )
  },
})