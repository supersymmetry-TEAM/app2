import FoodContainer from "./FoodContainer";
import { connect } from "react-redux";
import {setrecoData_} from "../../../redux/recoSlice";


function mapStateToProps(state) {
  return {
    token: state.usersReducer.token,
    recodata: state.recoReducer.recodata,
  };
}



function mapDispatchToProps(dispatch) {
  return {
    setrecoData_ : ()=>dispatch(setrecoData_()),
  };
}





export default connect(mapStateToProps, mapDispatchToProps)(FoodContainer);
