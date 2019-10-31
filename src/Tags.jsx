import React from "react";
import PropTypes from "prop-types";
import { DeleteIcon } from "./Icon.js";
const propTypes = {
  textLabel: PropTypes.string,
  borderTagsColor: PropTypes.string,
  backgroundTags: PropTypes.string,
  shadowTags: PropTypes.bool,
  colorTextLabel: PropTypes.colorTextLabel,
  onChange: PropTypes.func,
  iconComponent: PropTypes.element,
  colorIcon: PropTypes.string,
  hideShadowTags: PropTypes.bool,
  hideIcon: PropTypes.bool,
  deleteTag: PropTypes.func
};

const defaultProps = {
  textLabel: "Sanfiro Tags",
  borderTagsColor: "#dfe4f2",
  backgroundTags: "#fcfdff",
  colorTextLabel: "5c6f82",
  hideIcon: false
};

class TagsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTags: true };
    this.onDeleteTags = this.onDeleteTags.bind(this);
  }
  onDeleteTags = () => {
    if (this.props.deleteTag) this.props.deleteTag();
    else this.setState({ showTags: false });
  };

  render() {
    return this.state.showTags ? (
      <div
        style={{
          margin: "5px",
          minWidth: "155px",
          boxShadow: this.props.hideShadowTags
            ? null
            : "11px 9px 9px -2px rgba(224,224,224,1)",
          border: "1px solid ",
          borderColor: this.props.borderTagsColor,
          background: this.props.backgroundTags,
          borderRadius: "25px",
          padding: "5px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <label
          style={{
            color: this.props.colorTextLabel,
            fontFamily: "inherit",
            minWidth: "110px",
            padding: "6px",
            textAlign: "center",
            fontWeight: "600"
          }}
        >
          {this.props.textLabel}
        </label>
        {!this.props.hideIcon && (
          <span onClick={this.onDeleteTags}>
            {this.props.iconComponent ? (
              this.props.iconComponent
            ) : (
              <DeleteIcon />
            )}
          </span>
        )}
      </div>
    ) : null;
  }
}

TagsComponent.propTypes = propTypes;
TagsComponent.defaultProps = defaultProps;

export default TagsComponent;
