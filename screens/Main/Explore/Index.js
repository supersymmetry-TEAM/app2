import ExploreContainer from "./ExploreContainer";
import { connect } from "react-redux";
import {logOut} from "../../../redux/usersSlice";



function mapStateToProps(state) {
  return {
  };
}


function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
  };
}





export default connect(null, mapDispatchToProps) (ExploreContainer);
