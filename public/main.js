function Objs({qtd}){
    let els = Array();
    for(let i = 0; i < qtd; i++){
        els.push(<p key={i}>Plus one</p>);
    }
    return(
        <>
        {els}
        </>
    )
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {clicks:2};
        this.add = this.add.bind(this);
    }

    add(){
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
          }));
    }

    render(){
        return(
        <>
            <div id='content'>
                <Objs qtd={this.state.clicks}/>
            </div>
            <div id='options' onClick={this.add}>
                <button>Aumentar p's</button>
                <p>Good night!</p>
            </div>
        </>
        )
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);