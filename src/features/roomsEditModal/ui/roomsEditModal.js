import React from 'react';
import cls from "./roomsEditModal.module.sass";

export const RoomsEditModal = ({ title, onClose, actions, children }) => {
    return (
        <div className={cls.modalBackdrop}>
            <div className={cls.modalContent}>
                <div className={cls.modalHeader}>
                    <h2>{title}</h2>
                    <button onClick={onClose} className={cls.closeButton}>X</button>
                </div>
                <div className={cls.modalBody}>
                    {children}
                </div>
                <div className={cls.modalFooter}>
                    {actions.map((action, index) => (
                        <button key={index} onClick={action.onClick} className={cls.actionButton}>
                            {action.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
