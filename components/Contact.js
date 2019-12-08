var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
  render: function() {
    return (
     /* React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://img.icons8.com/carbon-copy/100/000000/contact-card.png'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      */
      <div className={'contactItem'} >
        <img className={'contactImage'} src={'https://img.icons8.com/carbon-copy/100/000000/contact-card.png'}/>
        <p className={'contactLabel'}>
          Imię: {this.props.item.firstName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
           {this.props.item.email}
        </a>
      </div>
      )
  },
});


