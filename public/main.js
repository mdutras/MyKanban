function Objs({qtd}){
    let els = Array();
    for(let i = 0; i < qtd; i++){
        els.push(<p key={i}>Plus {i}</p>);
    }
    return(
        <>
        {els}
        </>
    )
}

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title :'Título',
            content:'',
            expandedDisplay:'none',
            key:props.index
        }
        console.log(window.innerHeight, window.innerWidth)
        this.expand = this.expand.bind(this);
    }

    expand(){
        this.setState(prevState =>({
            expandedDisplay:(prevState.expandedDisplay == 'none'? 'block':'none')
        }));
    }

    render(){
        let expandedStyle = {
            left: (window.innerWidth/2) - 320,
            top: (window.innerHeight/2) - 200,
            display: this.state.expandedDisplay
        }

        let overlayStyle = {
            display:this.state.expandedDisplay, 
            height:window.innerHeight, 
            width:window.innerWidth
        }
        return(
            <div className="Row" onDoubleClick={this.expand}>
                <p>{this.state.title}</p>
                <div className="overlayDisplay" onClick={this.expand} style={overlayStyle}></div>
                    <div className="expand" style={expandedStyle}>
                        <input type='text'className='title'></input>
                        <input type='text' className="description"></input>
                </div>
            </div>
        )
    }
}

class Column extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qtd : 1
        };
        this.add = this.add.bind(this);
    }

    

    add(){
        this.setState(prevState => ({
            qtd: prevState.qtd + 1
        }));
    }

    render(){
        let rows = [];
        for(let i = 0; i < this.state.qtd; i++){
            rows.push(<Row key={i} index={i}/>);
        }
        return(
        <>
            <input type="text" placeholder="Título"></input>
            <div className="Rows">
                {rows}
            </div>
            <button className="addButton" onClick={this.add}>+</button>
        </>
        )
    }
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicks:2, 
            hide: true,
            contentStyle:{
                height: window.innerHeight - 30,
                
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
                <div className='columns'>
                    <Column/>
                </div>
                
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
