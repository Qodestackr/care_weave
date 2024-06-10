import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import { app } from '@/firebase';

const useFcmToken = () => {
    const [token, setToken] = useState('');
    const [notificationPermissionStatus, setNotificationPermissionStatus] =
        useState('');

    useEffect(() => {
        const retrieveToken = async () => {
            try {
                if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                    const messaging = getMessaging(app);

                    // Retrieve the notification permission status
                    const permission = await Notification.requestPermission();
                    setNotificationPermissionStatus(permission);

                    // Check if permission is granted before retrieving the token
                    if (permission === 'granted') {
                        const currentToken = await getToken(messaging, {
                            vapidKey:
                                'BLYaJoPIVfqONuyMyeECMv-ie-gj-yrcc68lo6NuQsY5kOw_xn6kq1W4ZCf8YopKIQFU2hVSoN32T0rlSZz5-WY',
                        });
                        if (currentToken) {
                            setToken(currentToken);
                        } else {
                            console.log(
                                'No registration token available. Request permission to generate one.'
                            );
                        }
                    }
                }
            } catch (error) {
                console.log('An error occurred while retrieving token:', error);
            }
        };

        retrieveToken();
    }, []);

    return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;