class IsolationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strategy: props.strategy || StrategyManager.minimax,
      width: props.width || 3,
      height: props.height || 3,
      treeDepth: props.treeDepth || 25
    };

    this.onType = this.onType.bind(this);
    this.onWidth = this.onWidth.bind(this);
    this.onHeight = this.onHeight.bind(this);
    this.onTreeDepth = this.onTreeDepth.bind(this);
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

  onWidth(e) {
    this.setState({ width: e.currentTarget.value });
  }

  onHeight(e) {
    this.setState({ height: e.currentTarget.value });
  }

  onTreeDepth(e) {
    this.setState({ treeDepth: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <Isolation width={ this.state.width } height={ this.state.height } treeDepth={ this.state.treeDepth } strategy={ this.state.strategy }></Isolation>

        <div class="gamePlayOptions">
          <div>
            <span>Game Play</span>
            <input type="radio" name="type" value="minimax" checked={this.state.strategy === StrategyManager.minimax} onChange={ this.onType }/> <span>Minimax</span>
            <input type="radio" name="type" value="random" checked={this.state.strategy === StrategyManager.random} onChange={ this.onType }/> <span>Random</span>
            <input type="radio" name="type" value="none" checked={!this.state.strategy || this.state.strategy === StrategyManager.none} onChange={ this.onType }/> <span>2 Players</span>
          </div>
          <div>
            <span>Grid Size</span>
            <input type="number" id="width" name="width" value={this.state.width} onChange={ this.onWidth }/>
            <input type="number" id="height" name="height" value={this.state.height} onChange={ this.onHeight }/>
          </div>
          <div>
            <span>Tree Depth</span>
            <input type="number" id="treeDepth" name="treeDepth" value={this.state.treeDepth} onChange={ this.onTreeDepth }/>
          </div>
        </div>
      </div>
    );
  }
}