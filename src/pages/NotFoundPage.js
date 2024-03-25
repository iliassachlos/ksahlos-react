import {Link} from "react-router-dom";

function NotFoundPage() {

    return (
        <div className='flex flex-col h-screen justify-center items-center text-xl'>
            <h1>404 Page Not Found! Please Click the button to redirect to home page</h1>
            <Link to="/">
                <button className='bg-black text-white rounded-md p-3'>Redirect to Home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage