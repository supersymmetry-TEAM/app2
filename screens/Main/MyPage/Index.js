import MyPageContainer from "./MyPageContainer";
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





export default connect(null, mapDispatchToProps) (MyPageContainer);
