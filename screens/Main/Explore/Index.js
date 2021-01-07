import ExploreContainer from "./ExploreContainer";
import { connect } from "react-redux";
import {logOut} from "../../../redux/usersSlice";



function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    id: state.usersReducer.id,
    info : state.usersReducer.info,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
  };
}





export default connect(mapStateToProps, mapDispatchToProps) (ExploreContainer);
