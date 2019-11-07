var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        descdescription: 'film o czarodzieju'
    },
    {
        id: 2,
        title: 'Król Lew',
        description: 'Film o królu sawanny'
    },
    {
        id: 3,
        title: 'Kurier',
        description: 'Nie wiem o czym jest ten film',
        img: 'https://ssl-gfx.filmweb.pl/po/01/92/810192/7874217.3.jpg',
    }
];
var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.description),
        React.createElement('img', {src: movie.img})
    );
});

var element = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
