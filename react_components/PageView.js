'use strict';

var React = require('react');
var mui = require('material-ui');


var PageView = React.createClass({
  render: function() {
    if (this.props.selected) {
      var cssClass = 'selected';
    }
    
    return <mui.FlatButton className={cssClass} {..this.props} label={this.props.children} />;
  }
});

module.exports = PageView;
