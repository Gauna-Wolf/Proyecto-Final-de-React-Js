import React from 'react';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-secondary me-2" onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button className="btn btn-outline-secondary ms-2" onClick={handleSumar}>+</button>
            </div>
            <div className='d-flex justify-content-center '>
            < button className="btn btn-secondary mt-3" onClick={handleAgregar}>Agregar al carrito</button>
            </div>
            
        </>
    );
}

export default ItemCount;
