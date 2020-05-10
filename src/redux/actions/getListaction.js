import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

function getList(payload) {
  return {
    type: "GET_LIST_ITEMS",
    payload: this.props.store.user.id,
  };
}

export default connect(mapStoreToProps)(getList);
