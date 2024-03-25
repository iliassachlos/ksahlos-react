import {Link} from "react-router-dom";
import {useState} from "react";
import {useAuth} from "../utilities/authUtility";
import ListBar from "../components/admin/listBar/listBar";
import NewPhotoBlock from "../components/admin/newPhotoBlock/newPhotoBlock";
import EditPhotosBlock from "../components/admin/editPhotosBlock/editPhotoBlock";

function AdminPanelPage() {
    const [isNewPhotoBlockVisible, setIsNewPhotoBlockVisible] = useState(false);
    const [isEditPhotosBlockVisible, setIsEditPhotosBlockVisible] = useState(false);

    const user = useAuth();

    function newPhotoBlockHandler() {
        setIsNewPhotoBlockVisible(true);
        setIsEditPhotosBlockVisible(false);
    }

    function editPhotoBlockHandler() {
        setIsNewPhotoBlockVisible(false);
        setIsEditPhotosBlockVisible(true);
    }

    return (
        <div className="flex h-screen" style={{paddingBottom: '50px'}}>
            {!user && (
                <div className="flex flex-col w-full justify-center items-center">
                    <h1>
                        <span className="font-bold">Warning!</span> You do not have the privileges to enter this page.
                    </h1>
                    <h1>
                        Please{" "}
                        <Link to="/login" className="underline text-cyan-700 hover:text-cyan-900">
                            Login
                        </Link>
                    </h1>
                </div>
            )}
            {user && (
                <>
                    <ListBar onNewPhotoBlockHandler={newPhotoBlockHandler}
                             onEditPhotoBlockHandler={editPhotoBlockHandler}/>
                    <div
                        className="flex flex-1 justify-center items-center border-2 border-gray-200 rounded mx-3 shadow-md p-8">
                        {isNewPhotoBlockVisible && <NewPhotoBlock/>}
                        {isEditPhotosBlockVisible && <EditPhotosBlock/>}
                    </div>
                </>
            )
            }
        </div>
    )
}

export default AdminPanelPage