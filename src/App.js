import './App.scss';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import Settings from './components/Settings/Settings';

const App = (props) => {
    console.log(props.state.sidebar)
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <div className='container'>
                        <Routes>
                            <Route path="/profile/*" element={
                                <Profile
                                profilePage={props.state.profilePage}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText}
                                />
                            }/>
                            <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage}/>}/>
                            <Route path="/news/*" element={<News/>}/>
                            <Route path="/music/*" element={<Music/>}/>
                            <Route path="/settings/*" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
    );
}


export default App;
