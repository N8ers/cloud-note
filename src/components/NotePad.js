import React from "react";
import "./NotePad.css";

class NotePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        "I'm baby pork belly enamel pin glossier tote bag. Farm-to-table skateboard cray sustainable quinoa austin viral hashtag. Lo-fi knausgaard austin, intelligentsia sriracha skateboard ramps schlitz wayfarers wolf dreamcatcher single-origin coffee. DIY butcher helvetica,seitan schlitz chambray woke fixie cardigan freegan. Try-hard post-ironic listicle palo santo narwhal, intelligentsia lyft pok pok af",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div className="NotePad">
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>
      </div>
    );
  }
}

export default NotePad;
