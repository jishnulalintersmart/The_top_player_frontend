var React = require("react");
var Counter = require("react-counter");

React.render(
  <Counter begin={0} end={1000} time={2000} easing="outCube" />,
  document.body
);
