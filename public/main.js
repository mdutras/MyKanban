function add(){
    let element = document.getElementById('content')
    let first = element.children[0];
    let novo = React.createElement('p', null, "plus one")
    let board = React.createElement('div', null, ...first.children, novo);
    ReactDOM.render(board, element);
}