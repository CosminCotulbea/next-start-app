import React, { Fragment, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Link from 'next/link';
import { setCookie, getCookie } from '/src/libs/cookies';

const Cookies = ({ cookies }) => {


  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    !getCookie('accept-cookies') && setShowCookiePopup(true);
  }, []);

  const _acceptCookie = _ => {
    setCookie('accept-cookies', true, '30');
    setShowCookiePopup(false);
  }

  return (
    <Fragment>
      {showCookiePopup && <Card className="card-cookie">
        <Card.Body>
          <Card.Title className="mb-4"><i className="fas fa-cookie-bite mr-2"></i>Cookies header</Card.Title>

          <div className="set-card">
            <p>Cookies description</p>
            <Button className="buttonAccent" onClick={_acceptCookie}>
              Accept
            </Button>
          </div>
          <div className="cookies-buttons">
            <Link href="/terms">Termeni și condiții</Link>
            <span className="ml-2 mr-2">- și -</span>
            <Link href="/privacy">Politica de utilizare Cookies</Link>
          </div>
        </Card.Body>
      </Card>}
    </Fragment>
  );
};

export default Cookies;
