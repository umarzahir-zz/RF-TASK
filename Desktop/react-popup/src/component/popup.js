import React from 'react'

export default function Popup(prop) {
      return (prop.trigger) ? (
            <div className="popup">
            <div className="inner-popup">
                  <button type="button" onClick={() =>prop.onClose(false)} className="close-button">&times;</button>
                  {prop.children}
                  </div>  
            </div>
      ) : null}
