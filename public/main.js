function eraseAll(){
    sessionStorage.clear();
}

function add(){
    let actual = Number(sessionStorage.getItem('clicks'));
    sessionStorage.setItem('clicks', actual + 1);
    console.log(sessionStorage.getItem('clicks'));
}

function addOne(){
    console.log(this)
}

function Content({qtd}){
        let cont = []
        for(let i = 0; i < qtd; i++){
            cont.push(<p key={i}>Plus one</p>)
        }
        return(
            <>
            {cont}
            </>
        )
        
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {qtd:props.qtd};
        addOne.bind(this.state);
    }

    render(){
        return(
        <>
            <Content qtd = {this.state.qtd}/>
        </>
        )
    }
}
sessionStorage.setItem('clicks', 2);
let clicks = sessionStorage.getItem("clicks");
console.log(clicks);
addOne.bind
ReactDOM.render(
    <Board qtd={clicks}/>,
    document.getElementById('content')
)