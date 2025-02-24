export const RESERVATION_MOCK = [
    {
        id: 1,
        hotelId: 101,
        hotelName: 'Hotel Paraíso',
        checkInDate: '2025-03-10',
        checkOutDate: '2025-03-15',
        guests: [
            {
                fullName: 'Juan Pérez',
                birthDate: '1990-06-15',
                gender: 'Masculino',
                documentType: 'DNI',
                documentNumber: '12345678',
                email: 'juan.perez@example.com',
                phone: '555-1234'
            }
        ],
        emergencyContact: {
            fullName: 'María Pérez',
            phone: '555-5678'
        },
        totalPrice: 500.00,
        status: 'Confirmada'
    },
    {
        id: 2,
        hotelId: 102,
        hotelName: 'Resort Playa Blanca',
        checkInDate: '2025-04-01',
        checkOutDate: '2025-04-07',
        guests: [
            {
                fullName: 'Ana López',
                birthDate: '1985-09-20',
                gender: 'Femenino',
                documentType: 'Pasaporte',
                documentNumber: 'A987654',
                email: 'ana.lopez@example.com',
                phone: '555-7890'
            },
            {
                fullName: 'Carlos Ramírez',
                birthDate: '1987-11-10',
                gender: 'Masculino',
                documentType: 'DNI',
                documentNumber: '87654321',
                email: 'carlos.ramirez@example.com',
                phone: '555-4321'
            }
        ],
        emergencyContact: {
            fullName: 'José Ramírez',
            phone: '555-0000'
        },
        totalPrice: 1200.00,
        status: 'Pendiente'
    }
];