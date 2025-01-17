//404 page
import { Link } from 'react-router-dom';
import Logo from '../../components/blocks/logo';

function NotFoundPage(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Logo/>
      <h1 style={{ fontSize: '6rem', marginBottom: '1rem', fontWeight: 'bold' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Page not found</p>
      <Link
        to="/"
        style={{
          fontSize: '1.25rem',
          color: '#007bff',
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #007bff',
          borderRadius: '5px',
        }}
      >
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
