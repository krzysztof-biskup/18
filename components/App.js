var contactForm = {
  firstName: '',
  lastName: '',
  email: ''
};

var App = React.createClass({
  render: function() {
    return (
      /*React.createElement('div', {className: 'app form-group'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {}),
      )*/
      <div className={'app form-group'}>,   
      </div>,
       React.createElement(ContactForm, {contact: contactForm})
    );
  }
});