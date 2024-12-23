
const Home = (props) => {   
    
    console.log("props.loggedIn: ", props.loggedIn);
    return (
        <div className="row justify-content-center my-2">
            {props.user &&
                <div className="col-4 border">
                    <div className="text-center">
                        <h6>You have successfully Logged in</h6>
                    </div>
                </div>
            }

            {!props.user &&
                <div className="col-4 border">
                    <div className="text-center">
                        <h6>You have not Logged in</h6>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home