import React from "react";
import unsplash from "../../apis/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class Unsplash extends React.Component {
  state = { images: [] };

  componentDidMount() {
    this.onSearchSubmit("Career");
  }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Unsplash;
