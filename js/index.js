// Main React render hook.
$(function() {
  ReactDOM.render(
    <div>
      <Isolation width="3" height="3" strategy={ StrategyManager.minimax }></Isolation>
    </div>,
    document.getElementById('root')
  );
});