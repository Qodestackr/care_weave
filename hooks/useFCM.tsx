'use client';

import { useState, useEffect } from "react";

import useFcmToken from "./useFcmToken";
import { firebaseMessaging, firebaseCloudMessaging } from "@/firebase";
import { MessagePayload, onMessage } from "firebase/messaging";
import { toast } from 'react-toastify';

const useFCM = () => {
    const fcmToken = useFcmToken()
    const [messages, setMessages] = useState<MessagePayload[]>([])
    useEffect(() => {
        if ('serviceWorker' in Navigator) {
            const fcmmessaging = firebaseMessaging()
            const unsubscribe = onMessage(fcmmessaging, (payload) => {
                toast?.dark(payload?.notification?.title)
                setMessages(messages => [...messages, payload])
            })
            return () => unsubscribe()
        }
    }, [fcmToken])

    return [fcmToken, messages]
}

export default useFCM;