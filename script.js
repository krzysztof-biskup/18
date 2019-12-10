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
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var Movie = React.createClass({
    render: function() {
        React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.img})
    }
})


var Element = React.createClass({
    render: function(){
        return ( React.createElement('div', {},
            React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, )
            )
        )
    }
}),

var app = React.createElement(Element)
ReactDOM.render(app, document.getElementById('app'));