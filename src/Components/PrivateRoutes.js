import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes =(props)=>{
    const{lstat,setlstat}=props;

    let auth ={'token':false}
    if(lstat.email=="geclyn@unclefluffy.com"){
        auth.token=true;
    }

    return(
        auth.token ? <Outlet/>:<Navigate to="/login"/>
    )

}
export default PrivateRoutes