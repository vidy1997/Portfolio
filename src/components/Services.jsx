const Services=()=>{

    return(
        <div className=" main-container py-6 ">
            <div>
                <h1 className=" text-4xl underline text-center ">Services</h1>
            </div>
            <div className="flex justify-center px-32 py-12 space-x-10">
                <div className="w-full  bg-slate-100 shadow-lg px-3 py-12 space-y-4 rounded-xl text-center  hover:bg-gray-200 ">
                    <i className=" text-5xl fa-brands fa-dev"></i>
                    <h1 className="text-4xl">Web Development</h1>
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum sit quis eos? Deserunt asperiores dolorem impedit aspernatur, accusamus blanditiis?</p>
                    <br/>
                    <div className=" bg-orange-500 w-28 rounded-full  text-white  h-12 items-center" style={{margin:"auto"}}>
                    <button className="px-3 py-2 text-white rounded-full"> Check Out.</button>
                    </div>
                </div>
                <div className="w-full  bg-slate-100 shadow-lg px-3 py-12 space-y-4 rcounded-xl text-center  hover:bg-gray-200">
                    <i className=" text-5xl fa-brands fa-dev"></i>
                    <h1  className="text-4xl">DevOps</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, accusamus.</p>
                    <br/>
                    <div className=" bg-orange-500 w-28 rounded-full text-white h-12 items-center " style={{margin:"auto"}}>
                    <button className="px-3 py-2 text-white rounded-full"> Check Out.</button>
                    </div>
                </div>
                <div className="w-full  bg-slate-100 shadow-lg px-3 py-12 space-y-4 rounded-xl text-center  hover:bg-gray-200">
                    <i className=" text-5xl fa-solid fa-database"></i>
                    <h1  className="text-4xl">Data Analysis</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa magnam nemo veritatis perferendis sit ea repellat, quisquam at ab.</p>
                    <br/>
                    <div className=" bg-orange-500 w-28 rounded-full text-white h-12 items-center" style={{margin:"auto"}}>
                    <button className="px-3 py-2 text-white rounded-full"> Check Out.</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;