const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="info">
        <p>
          Note: This is a demo website. by Abdullh Rtima{' '}
          <a href="https://github.com/AbdullhRtima/APM" target="_blank">Visit Github Page </a>.
        </p>
      </div>
      <style jsx>{`
        .footer-wrapper {
          text-align: center;
          margin: 200px 0 10px;
          padding: 5px;
          postion:fix;
          
        }
        .info {
          color: #777;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Footer;
