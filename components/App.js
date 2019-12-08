var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      <div className={'app form-control'}>       
        <ContactForm contact={contactForm} />
        <Contacst items={contacts} />
      </div>
    )
  }
}); 