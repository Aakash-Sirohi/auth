import React, {useEffect, useState} from "react";
import Typography from 'react-typography';
import ReactDOM from 'react-dom';
import './IntroModal.css'
import typography from '../../styles/typography';


export default function Modal(props) {
        if (!props.show) {
          return null;
        }
      
        return (
          <div className="modal"  onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header" typography ={typography}>
                <h3>{props.title}</h3>
                <button className="modal-close" onClick={props.onClose}>
                  &times;
                </button>
              </div>
              <div className="modal-body">{props.children}</div>
            </div>
          </div>
        );
      }
