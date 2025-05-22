import { useParams, Link } from 'react-router-dom';
import NavigateBackButton from './NavigateBackButton';
import celestialData from '../data/celestialData';
import './ContentPage.css';

const ContentPage = () => {
  const { category, id } = useParams();
  
  // If no ID provided, show category overview
  if (!id) {
    const categoryItems = celestialData.filter(item => item.category === category);
    
    return (
      <div className="content-page">
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <NavigateBackButton />
        <div className="object-list">
          {categoryItems.map(item => (
            <Link 
              key={item.id} 
              to={`/${category}/${item.id}`} 
              className="object-card"
            >
              <h3>{item.title}</h3>
              <p>{item.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  // Find the specific celestial object
  const celestialObject = celestialData.find(
    item => item.category === category && item.id === id
  );
  
  if (!celestialObject) {
    return (
      <div className="content-page">
        <h2>Object Not Found</h2>
        <NavigateBackButton />
        <p>The requested celestial object does not exist in our database.</p>
      </div>
    );
  }
  
  return (
    <div className="content-page">
      <h2>{celestialObject.title}</h2>
      <NavigateBackButton />
      <img 
        src={celestialObject.imageUrl} 
        alt={celestialObject.title} 
        className="object-image"
      />
      <div className="object-content">
        <p>{celestialObject.description}</p>
        <h3>Facts:</h3>
        <ul>
          {celestialObject.facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContentPage;