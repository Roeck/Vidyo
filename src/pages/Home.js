import FollowersColumn from '../components/FollowersColumn';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <FollowersColumn />
            <div className="feed"></div>
            <div className="suggested-box"></div>
        </div>
    )
}

export default Home
