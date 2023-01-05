const Navbar = () => {
    return ( 
        <nav className="navbar">
             <div className="site-name panel">
             <div className="container">
                <div className="row">
                    <div className="col-1" >
                        <img src="https://i.postimg.cc/BnS3VN0q/20230103-225731.png" alt="" style={{
                        // border: "1px solid white",
                        width:"160px",
                        height:"160px"
                    }}/>
                    </div>
                    <div className="col-9" >
                        <h1 style={{
                        color: "black",
                        fontSize:"100px"
                    }}>LearnShe</h1>
                    </div>
                    <div className="col-1">
                        <img src="https://i.postimg.cc/JnnsJJxq/user.png" alt="" style={{
                            width:"50px",
                            height:"50px",
                            margin:"50px",
                            cursor:"pointer"
                        }} />
                    </div>
                </div>
                <div className="row navs">
                    <div className="col-1">Home</div>
                    <div className="col-1">Services</div>
                    <div className="col-1">Jobs</div>
                    <div className="col-1">Recruiters</div>
                    <div className="col">
                        <form className="d-flex" role="search">
                        <input className="form-control me-3 ms-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
             </div>
            </div>
        </nav>
    );
}
 
export default Navbar;