import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import hall1 from '../../assets/images/hall1.jpg';
import hall2 from '../../assets/images/hall2.jpg';
import hall3 from '../../assets/images/hall3.jpg';
import hall4 from '../../assets/images/hall4.jpg';
import hall5 from '../../assets/images/hall5.jpg';
import hall6 from '../../assets/images/hall6.jpg';
import './BookingPage.css';

const hallData = [
    { id: 'jennis-hall', image: hall1, title: "Jennis Hall", description: "Jennis Hall offers a grand space ideal for large-scale events such as birthday parties and wedding receptions. Spanning over 3000 sq. ft., this hall can accommodate a significant number of guests comfortably. With elegant decor and versatile seating arrangements, it’s perfect for creating memorable experiences. Our dedicated team will assist you in making every event special.", address: "123 Celebration Street, Coimbatore", location: "Near Central Park", type: ["Birthday Party", "Wedding", "Anniversary"], time: ["10:00 AM - 4:00 PM", "4:00 PM - 10:00 PM"], price: "$2000" },
    { id: 'harrys-hall', image: hall2, title: "Harry's Hall", description: "Harry's Hall is designed to host your grand celebrations with its spacious 4000 sq. ft. area. This hall is perfect for hosting large gatherings like weddings and milestone birthdays. It features stylish interiors and flexible layouts to cater to your event's needs, ensuring a sophisticated and enjoyable experience for all your guests.", address: "456 Event Avenue, Coimbatore", location: "Opposite City Mall", type: ["Wedding", "Corporate Event", "Large Gathering"], time: ["1:00 PM - 7:00 PM", "7:00 PM - 11:00 PM"], price: "$3000" },
    { id: 'grant-hall', image: hall3, title: "Grant Hall", description: "Grant Hall provides an expansive 5000 sq. ft. space that is ideal for large events including elaborate wedding receptions and birthday parties. The hall's sophisticated design and ample room allow for customized setups, from elegant dining arrangements to expansive dance floors. Let us help you create an unforgettable celebration in this majestic venue.", address: "789 Grand Road, Coimbatore", location: "Next to Green Park", type: ["Corporate Event", "Wedding", "Birthday Party"], time: ["9:00 AM - 5:00 PM", "5:00 PM - 11:00 PM"], price: "$4000" },
    { id: 'richie-hall', image: hall4, title: "Richie Hall", description: "Richie Hall is the epitome of grandeur with its 6000 sq. ft. area, making it an excellent choice for hosting high-profile events such as weddings and large corporate functions. Its luxurious ambiance, combined with versatile space options, provides the perfect setting for any major celebration. Our professional staff is here to ensure every detail is handled with care.", address: "101 Rich Street, Coimbatore", location: "Behind the Main Plaza", type: ["Large Gathering", "Corporate Event"], time: ["12:00 PM - 8:00 PM", "8:00 PM - 12:00 AM"], price: "$5000" },
    { id: 'pheonix-hall', image: hall5, title: "Pheonix Hall", description: "Pheonix Hall offers a spacious 3500 sq. ft. area, making it ideal for family-friendly gatherings such as birthday parties and anniversaries. With its inviting atmosphere and flexible layout, this hall can accommodate various event sizes and styles, ensuring a comfortable and memorable experience for you and your guests.", address: "202 Phoenix Lane, Coimbatore", location: "Near Riverfront Park", type: ["Anniversary", "Birthday Party"], time: ["11:00 AM - 6:00 PM", "6:00 PM - 10:00 PM"], price: "$2500" },
    { id: 'emirate-hall', image: hall6, title: "Emirate Hall", description: "Emirate Hall boasts an impressive 7000 sq. ft. space, perfect for hosting grand events like weddings and large-scale celebrations. The hall features luxurious decor and ample space for elaborate setups, including stage arrangements, dining areas, and dance floors. Our dedicated team will work with you to bring your vision to life and ensure a spectacular event.", address: "303 Emirate Boulevard, Coimbatore", location: "Close to Royal Gardens", type: ["Grand Celebration", "Wedding"], time: ["2:00 PM - 10:00 PM", "10:00 PM - 2:00 AM"], price: "$6000" }
];

function BookingPage() {
    const { hallId } = useParams();
    const hall = hallData.find(h => h.id === hallId);
    const navigate = useNavigate(); // Hook for navigation

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (e) => setSelectedDate(e.target.value);
    const handleTypeChange = (e) => setSelectedType(e.target.value);
    const handleTimeChange = (e) => setSelectedTime(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare booking data
        const bookingData = {
            hallId,
            date: selectedDate,
            type: selectedType,
            time: selectedTime
        };

        try {
            await axios.post('http://localhost:8080/bookings', bookingData);
            navigate('/payment');
        } catch (error) {
            console.error('There was an error submitting the booking!', error);
            alert('Error submitting booking. Please try again.');
        }
    };

    if (!hall) {
        return <div>Hall not found</div>;
    }

    return (
        <div className="booking-page-container">
            <h1 className="booking-header">{hall.title}</h1>
            <div className="booking-section">
                <img className="booking-image" src={hall.image} alt={hall.title} />
                <div className="booking-info">
                    <h2 className="booking-title">{hall.title}</h2>
                    <p className="booking-description">{hall.description}</p>
                    <p className="booking-address"><strong>Address:</strong> {hall.address}</p>
                    <p className="booking-location"><strong>Location:</strong> {hall.location}</p>
                    <p className="booking-price"><strong>Price:</strong> {hall.price}</p>
                </div>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <label>
                        <strong>Date:</strong>
                        <input type="date" value={selectedDate} onChange={handleDateChange} required />
                    </label>
                    <label>
                        <strong>Type of Celebration:</strong>
                        <select value={selectedType} onChange={handleTypeChange} required>
                            <option value="">Select a type</option>
                            {hall.type.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        <strong>Time Slot:</strong>
                        <select value={selectedTime} onChange={handleTimeChange} required>
                            <option value="">Select a time</option>
                            {hall.time.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </label>
                    <button type="submit" className="booking-button">Book Now</button>
                </form>
            </div>
        </div>
    );
}

export default BookingPage;
