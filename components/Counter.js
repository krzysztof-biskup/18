var Counter = React.createClass ({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    shouldComponentUpdate: function(){
        
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillUnmount: function() {
        console.log('odmontowany')
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment},'Increment'),
            React.createElement('button', {onClick: this.decrement}, 'Decrement'),
        );
    }
});

