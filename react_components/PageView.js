'use strict';

var React = require('react');
var mui = require('material-ui');


var PageView = React.createClass({
  render: function() {
    var disabled = false;
    if (this.props.selected) {
      disabled = true;
    }

    return <mui.FlatButton disabled={disabled} onClick={this.props.onClick} label={this.props.children} />;
  }
});

module.exports = PageView;
