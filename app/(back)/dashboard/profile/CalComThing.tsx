import React, { useState, useEffect } from 'react';

const apiKey = "cal_live_36b103132ee0ad9ea54fa574fd15d21d";

export default function CalComThing() {
    // const [bookings, setBookings] = useState([]);
    const [bookings, setBookings] = useState<Array<{ id: number, title: string, description: string, status: string, startTime: string, endTime: string, attendees: Array<{ email: string }> }>>([]);


    useEffect(() => {
        const fetchCalComData = async () => {
            try {
                const response = await fetch(`https://api.cal.com/v1/bookings/?apiKey=${apiKey}`);
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error("Error fetching Cal.com data:", error);
                // Handle error if needed
            }
        };

        fetchCalComData();
    }, []);

    if (!bookings) {
        return <p>Error fetching Cal.com data.</p>;
    }

    // Ensure bookings is an array before using map
    if (!Array.isArray(bookings)) {
        return <p>Error: Unexpected data format from Cal.com.</p>;
    }

    return (
        <div>
            Cal Data Fetcher...
            <div>
                <h1>Bookings</h1>
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id}>
                            <h2>{booking.title}</h2>
                            <p>Description: {booking.description}</p>
                            <p>Status: {booking.status}</p>
                            <p>Start Time: {new Date(booking.startTime).toLocaleString()}</p>
                            <p>End Time: {new Date(booking.endTime).toLocaleString()}</p>
                            <p>Attendees: {booking.attendees.map(attendee => attendee.email).join(', ')}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
