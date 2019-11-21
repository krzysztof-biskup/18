var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 'app form-group'},
                React.createElement(Counter, {counter: Counter}),
            )
        );
    }
});