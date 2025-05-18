
import {userStoreClient} from "../stores/userStore.ts";
import {Navigate} from "react-router";

const PublicRouter = ({children}: never) => {
    const userStore = userStoreClient((state) => state);
    const isAuthenticated = userStore != null;
    return !isAuthenticated ? children : <Navigate to="/"/>
}
export default PublicRouter;
