import SearchContainer from "./SearchContainer";
import { connect } from "react-redux";





function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}





export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
