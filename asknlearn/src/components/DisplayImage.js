import React, { Component } from "react";

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
    
    document.getElementById("test").innerHTML= event.target.files[0];
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} />
            <h1>Select Image</h1>
            <input type="file" id="myImage" name="myImage" onChange={this.onImageChange} />
          </div>
          <div>
              gg
              <p id="test"></p>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;