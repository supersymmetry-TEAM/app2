import ExploreContainer from "./ExploreContainer";
import { connect } from "react-redux";
import {logOut} from "../../../redux/usersSlice";



function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    id: state.usersReducer.id,
    recodata: state.recoReducer.recodata,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
  };
}





export default connect(mapStateToProps, mapDispatchToProps) (ExploreContainer);
