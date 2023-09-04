import React, { createContext, useState } from 'react';

const SupportNotificationContext = createContext();

const SupportNotificationProvider = ({children}) => {
    const [notification, setNotification] = useState('');

    const updateSelectedNotification = (message) => {
        setNotification(message);
    }
    const contextValue =  {
        notification,
        updateSelectedNotification,
    }
    return(
        <SupportNotificationContext.Provider value = {contextValue}>
            {children}
        </SupportNotificationContext.Provider>
    )
}

export {SupportNotificationContext, SupportNotificationProvider};