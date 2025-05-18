import {Navigate} from "react-router";
import {userStoreClient} from "../stores/userStore.ts";

const PrivateRouter = ({children}: never) => {
    const userStore = userStoreClient((state) => state);
    const isAuthenticated = userStore != null;
    return isAuthenticated ? children : <Navigate to="/login"/>
}
export default PrivateRouter;
