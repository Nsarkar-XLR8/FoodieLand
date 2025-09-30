import {Link} from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className="bg-gradient-to-br from-gray-50 to-slate-200 font-sans">
            <main className="flex flex-col items-center justify-center min-h-screen py-16 px-4">

                <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Welcome To The App
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                    Search for delicious food and enjoy it with your family & friends.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300">
                    <Link to="/menu">Explore Cuisines →</Link>
                    </button>
                </div>

                <div className="flex-shrink-0 mt-8 md:mt-0 p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
                    <img
                    className="w-60 h-60 rounded-xl object-cover"
                    src="/welcome.jpg"
                    alt="A delicious plate of food"
                    />
                </div>
                </div>

                <div className="mt-16 max-w-4xl w-full bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Order For The Food
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                    You can find delicious & elegant food here.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300">
                   <Link to="/menu" > View Menu →</Link>
                    </button>
                </div>

                <div className="flex-shrink-0 mt-8 md:mt-0 p-2 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl shadow-lg">
                    <img
                    className="w-60 h-60 rounded-xl object-cover"
                    src="/order.jpg"
                    alt="A person ordering food"
                    />
                </div>
                </div>

            </main>
            </div>
        </>
        );
}

export default Home;