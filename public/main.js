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
        this.state = {
            clicks:2, 
            hide: true,
            contentStyle:{
                height: window.innerHeight,
                
            },
            menuStyle:{
                display:"block",
                backgroundColor:"red",
                height:"21%",
                margin: "1% 1% 0% 1%"
            }
        };
        this.add = this.add.bind(this);
        this.hide = this.hide.bind(this);

    }

    add(){
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
          }));
    }

    hide(){
        this.setState(prevState => ({
            hide: !prevState.hide
          }));
    }

    render(){
        console.log(this.state.menuStyle);
        const menu = this.state.hide ? (
            <ul id='menu'>
                <li className='menuItem' onClick={this.add}>Aumentar p</li>
                <li className='menuItem' onClick={this.hide}>Hide</li>
                <li className='menuItem' ><a href='\ping'>Good night</a></li>
            </ul>)
            :
            <>
                <button id="show" onClick={this.hide}>Show</button>
            </>
        return(
            <>
            <div id='content' style={this.state.contentStyle}>
                <Objs qtd={this.state.clicks}/>
            </div>
                {menu}
            </>
        )
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
