var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
        id: 3,
        title: 'Kurier',
        desc: 'Nie wiem o czym jest ten film',
        img: 'https://ssl-gfx.filmweb.pl/po/01/92/810192/7874217.3.jpg',
    }
];

var moviesElements = movies.map(function(movie){
    return React.createElement(Movie, {movie: movie})    
})

var Movie = React.createClass({
    render: function() {
        React.createElement('li', {key: this.props.movie.id},
            React.createElement('h2', {}, this.props.movie.title),
            React.createElement('p', {}, this.props.movie.desc),
            React.createElement('img', {src: this.props.movie.img})
        )
    }
})


var Element = React.createClass({
    render: function(){
        return ( 
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements )
            )
        )
    }
}),

var app = React.createElement(Element);
ReactDOM.render(app, document.getElementById('app'));