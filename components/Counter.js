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

    componentDidMount: function(){ 
        console.log('komponent został wyrenderowany')
    },    

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
        
    },

   

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment},'Increment'),
            React.createElement('button', {onClick: this.decrement}, 'Decrement'),
        );
    },

    componentWillUnmount: function() {
        console.log('odmontowany')
    },
    componentWillMount: function(){
        console.log('montowanie komponentu')
    },
});

