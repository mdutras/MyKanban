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
            title :'Sem Título',
            content:'',
            expandedDisplay:'none',
            columnIndex:props.column,
            rowIndex:props.row,
            expandedStyle : {
                left: 0.2 * window.innerWidth,
                top: 0.1 * window.innerHeight,
                width: 0.6 * window.innerWidth,
                height: 0.8 * window.innerHeight
            }
        }
        console.log(window.innerHeight, window.innerWidth)
        this.expand = this.expand.bind(this);
        this.adapt = this.adapt.bind(this);
        window.addEventListener('resize', this.adapt);
    }

    expand(){
        if(this.state.expandedDisplay == 'block'){
            this.storeChange();
        }
        this.setState(prevState =>({
            expandedDisplay:(prevState.expandedDisplay == 'none'? 'block':'none')
        }));
    }

    adapt(){
        this.setState(() =>({
            expandedStyle: {
                left: 0.2 * window.innerWidth,
                top: 0.1 * window.innerHeight,
                width: 0.6 * window.innerWidth,
                height: 0.8 * window.innerHeight,
            }
        }));
    }

    storeChange(){
        let e = document
        .getElementsByClassName("columns")[this.state.columnIndex]
        .getElementsByClassName("Rows")[0]
        .getElementsByClassName("Row")[this.state.rowIndex]
        .getElementsByClassName("expand")[0];
        let t = e.getElementsByClassName("title")[0].value;
        if(!t){
            t = "Título";
        }
        let d = e.getElementsByClassName("description")[0].value;
        this.setState(()=>({
            title:t,
            content:d
        }));
    }

    render(){
        let title = (this.state.title?this.state.title:"Sem Título");
        let fullExpandedStyle = {
            ...this.state.expandedStyle,
            display: this.state.expandedDisplay
        }

        let fullOverlayStyle = {
            display: this.state.expandedDisplay
        }
        return(
            <div className="Row" onDoubleClick={this.expand}>
                <p>{title}</p>
                <div className="overlayDisplay" onClick={this.expand} style={fullOverlayStyle}></div>
                <div className="expand" style={fullExpandedStyle}>
                    <label htmlFor='title' className='expandLabel'><b>Título</b></label>
                    <input type='text' name='title' className='title' placeholder="Insira um título"></input>
                    <label htmlFor='description' className='expandLabel'><b>Descrição</b></label>
                    <textarea name='description' className="description" placeholder='Insira uma descrição' rows="" cols=""></textarea>
                </div>
            </div>
        )
    }
}

class Column extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qtd:1,
            columnIndex: props.column
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
            rows.push(<Row key={i} row={i} column={this.state.columnIndex} index={i}/>);
        }
        return(
        <>
            <input type="text" className="columnTitle" placeholder="Título"></input>
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
                height: window.innerHeight - 30
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
                    <Column column = {0}/>
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