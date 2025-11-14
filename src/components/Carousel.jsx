const Carousel = () => {
    return (
        <div className="md:w-3/5 mx-auto my-4">
            <div className="carousel rounded-lg">
                <div id="slide1" className="carousel-item relative w-full flex flex-col md:justify-center bg-base-200 glass h-60 md:h-100">
                    <p className="md:p-10 p-4 text-center md:text-2xl md:mb-0 mb-10">StudyMate is a MERN Stack web platform designed to help students connect and collaborate for better learning outcomes.It enables users to find study partners based on subjects, learning preferences, or nearby locations, making education more interactive, engaging, and goal-oriented.</p>
                    <div className="absolute left-5 right-5 top-4/5 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex flex-col md:justify-center bg-base-200 glass">
                    <p className="md:p-10 p-4 text-center md:text-2xl md:mb-0 mb-10">
                        Built with the MERN Stack (MongoDB, Express, React, Node.js), this project focuses on practical full-stack development through CRUD operations, Firebase authentication, and a responsive, user-friendly interface that enhances real-world learning collaboration
                    </p>
                    <div className="absolute left-5 right-5 top-4/5 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex flex-col md:justify-center bg-base-200 glass">
                    <p className="md:p-10 p-4 text-center md:text-2xl md:mb-0 mb-10">
                        Schedule regular sessions with your StudyMate so you both keep each other
                        accountable — no more “I’ll start tomorrow”.
                    </p>
                    <div className="absolute left-5 right-5 top-4/5 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel