import './App.css';
import UserList from './UserList.jsx';

function App() {
  const users = [
    {
      id: 1,
      name: "Erin Garrard",
      email: "egarrard91@gmail.com",
      avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFyKoj5y4I5ww/profile-displayphoto-shrink_400_400/0/1641663078110?e=1750896000&v=beta&t=NTuO50WN8OMaxk-uv_OqUrAeJLzsY3eOWlO_z34NOE4"
    }, 
    {
      id: 2,
      name: "Vicki Garrard",
      email: "vmgarrard@gmail.com",
      avatarUrl: "https://i.natgeofe.com/k/9acd2bad-fb0e-43a8-935d-ec0aefc60c2f/monarch-butterfly-grass_square.jpg"
    }
  ];

  return (
    <div className="app-container">
      <div className='App'>
        <h1>User Profiles</h1>
        <UserList users={users}/>
      </div>
    </div>
  );
}

export default App;