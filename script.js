var app = React.createElement(App);
ReactDOM.render(app, document.getElementById('app'));


<<<<<<< Updated upstream
=======
var filmsList = [
    {
        id: 1,
        title: 'Testowy film 1',
        description: 'Testowy opis 1',
        img: 'https://cdn.pixabay.com/photo/2019/09/11/22/29/leaf-4470075__480.jpg'
    },
    {
        id: 2,
        title: 'Testowy film 2',
        description: 'Testowy film 2',
        img: 'https://cdn.pixabay.com/photo/2019/09/11/22/29/leaf-4470075__480.jpg'
    },
    {
        id: 3,
        title: 'Testowy film 3',
        description: 'Testowy film 3',
        img: 'https://cdn.pixabay.com/photo/2019/09/11/22/29/leaf-4470075__480.jpg'
    }
];

//console.log(moviesList);

var Movie = React.createClass ({
    render: function() {
        return React.createElement ('li', {}, 
            React.createElement('h2', {}, this.props.title),
            React.createElement('p', {}, this.props.description),
            React.createElement('img', {src: this.props.img})
        )
    }
});

var MoviesList = React.createClass ({
    render: function() {
        var MoviesListElements = filmsList.map(function(film){ 
            return React.createElement(Movie, {key:film.id, title:film.title, description:film.description, img:film.img})    
        })
    
        return React.createElement('ul', {}, MoviesListElements)
    }
});

//console.log(MoviesList);
var element = React.createElement(MoviesList, {item: filmsList})
//console.log(element);
ReactDOM.render(element, document.getElementById('app'));

>>>>>>> Stashed changes
