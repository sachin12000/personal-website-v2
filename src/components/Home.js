const Home = () => {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-6xl text-slate-50 sm:font-light">Hi, I am Sachin</h1>
            <h2 className="text-3xl sm:text-5xl text-stone-200 font-light sm:font-extralight">Software Engineer</h2>
            <h2 className="text-3xl sm:text-5xl text-stone-200 font-light sm:font-extralight">
                <span>BSC. </span><br className="lg:hidden"/>
                <span>Software Engineering </span><br className="lg:hidden"/>
                <span>& </span><br className="lg:hidden"/>
                <span>Mangement</span></h2>
            <h2 className="text-3xl sm:text-5xl text-stone-200 font-light sm:font-extralight">McMaster University</h2>
        </div>
    );
}

export default Home;