module.exports = function(RED) {
  var ejs = require("ejs");

  function EjsNode(n) {
    RED.nodes.createNode(this, n);
    this.name = n.name;
    this.ejs = n.ejs;
    this.on("input", function(msg) {
      if (msg != null) {
        try {
          msg.payload = ejs.render(this.ejs, msg)
          this.send(msg);
        } catch (err) {
          this.error(err.message);
        }
      }
    });
  }

  RED.nodes.registerType("ejs", EjsNode);
  RED.library.register("ejs");
}
