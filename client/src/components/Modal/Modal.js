import React from 'react';
function Modal(props) {

    return (
        <div className={ props.open ? 'openModal modal' : 'modal' }>
        { props.open ? (  
            <section>
                <header>
                    {props.header}
                    <button className="close" onClick={props.close}> &times; </button>
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <button className="close" onClick={props.close}> 닫기 </button>
                </footer>
            </section>
        ) : null }
    </div>

    )
    
}
export default Modal;
