import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Cookie = () => {
    const [isShown, setIsShown] = useState(false);

    const showModal = () => {
        setIsShown(true);
    };

    const closeModal = () => {
        setIsShown(false);
    };

    const dynammicModalClass = () => (isShown ? { display: 'block' } : '');

    useEffect(() => {
        if (!sessionStorage.popupModal) {
            const timer = setTimeout(() => {
                setIsShown(true);
                sessionStorage.popupModal = 1;
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    // return isShown ? <h3>Modal content</h3> : null;
    return isShown ? (
        <div className="modal" style={dynammicModalClass()} id="channelModal">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            style={{
                                color: '#fff',
                                fontSize: 25,
                                paddingLeft: "20px"
                            }}
                            className="modal-title text-light">
                            Cookies</h5>

                        <button
                            onClick={closeModal}
                            style={{ color: '#fff' }}
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="row">


                            <div className="col-6">
                                <p
                                    style={{
                                        color: '#fff',
                                        fontSize: 20,
                                        justifyContent: "center",
                                        wordSpacing: 1.5,
                                        paddingLeft: "20px",
                                        paddingRight: "20px"
                                    }}
                                    className="lead text-light">
                                    We use our own and third-party cookies for analytical purposes and to show you advertising and personalised content based on a profile prepared from your browsing habits. You can accept all the cookies or manage your preferences in the settings panel. For more information, consult the<Link href=""> <p style={{ textDecoration: "underline" }}>Cookies Policy.</p></Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="accept-button" onClick={closeModal}>
                            I understand
                        </button>
                        <button onClick={closeModal} type="button" className="reject-button">
                            No Thanks
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Cookie;