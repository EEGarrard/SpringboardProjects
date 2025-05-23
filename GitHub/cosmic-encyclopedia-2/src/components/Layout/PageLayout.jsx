
import NavigateBackButton from './NavigateBackButton';
import './PageLayout.css'
export default function PageLayout({ children }) {
  return (
    <div className="page-container">
      <NavigateBackButton />
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}