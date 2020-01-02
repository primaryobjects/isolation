class IsolationContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      strategy: props.strategy || StrategyManager.minimax,
    };
    
    this.onType = this.onType.bind(this);
  }
  
  onType(e) {
    let strategy;
    
    switch (e.currentTarget.value) {
      case 'random': strategy = StrategyManager.random; break;
      case 'minimax': strategy = StrategyManager.minimax; break;
      case 'none': strategy = StrategyManager.none; break;
    };
    
    this.setState({ strategy });
    
    console.log(`Strategy set to ${e.currentTarget.value}.`);
  }
  
  render() {
    return (
      <div>
        <Isolation width={ this.props.width } height={ this.props.height } strategy={ this.state.strategy }></Isolation>
          
        <div class="gamePlayOptions">
          <span>Game Play</span>
          <input type="radio" name="type" value="random" checked={this.state.strategy === StrategyManager.random} onChange={ this.onType }/> <span>Random</span>
          <input type="radio" name="type" value="minimax" checked={this.state.strategy === StrategyManager.minimax} onChange={ this.onType }/> <span>Minimax</span>
          <input type="radio" name="type" value="none" checked={!this.state.strategy || this.state.strategy === StrategyManager.none} onChange={ this.onType }/> <span>2 Players</span>
        </div>
      </div>
    );
  }
}
