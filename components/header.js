import Link from 'next/link';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <Link href="/">
          <a className="logo">DEV Abdullh Rtima</a>
        </Link>
      </div>
      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ☰
      </button>
      <style jsx>{`
        .sidebar-trigger{
          color : white; 
        }
        .header-wrapper { 
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: fixed;
          top: 0;
          left: 0;
          margin: auto;
          width: 100%;
          background-color: #777;
          z-index: 1;       
        }
        .logo {
          padding: 10px 20px;
        }
        .logo a {
          font-weight: 900;
          color: white;
          text-decoration: none;
        }
        .logo a:hover {
          font-weight: 900;
        }
        .logo a:active {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Header;
