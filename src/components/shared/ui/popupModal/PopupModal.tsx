
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './PopupModal.scss';
import Button from '../button/Button';

interface ModalProps {
    isOpen: boolean;
    onClose? : () => void;
    title?: string;
    children: React.ReactNode;
    className?: string;
    showHeader? : boolean,
    zIndex?: number;
}

const PopupModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    showHeader=true,
    title,
    children,
    className = '',
    zIndex,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
               if(onClose) onClose();
                
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape);
            firstFocusableRef.current?.focus();
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            // onClose();
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <>
            <div
                className="modal-backdrop"
                onClick={handleBackdropClick}
                aria-modal="true"
                role="dialog"
                style={typeof zIndex === "number" ? { zIndex } : undefined}
            >
                <div
                    ref={modalRef}
                    className={`modal ${className} modalOutBox`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {
                        showHeader && (
                            <div className="modal-header modalHeader">
                        {title && <h2 className="modal-title">{title}</h2>}
                        <button
                            // ref={firstFocusableRef}
                            className="closeModal"
                            onClick={onClose}
                            aria-label="Close modal"
                        >
                           <i className="fa-regular fa-xmark"></i>
                        </button>
                    </div>
                        )
                    }
                    
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    , document.body);
};

export default PopupModal;
