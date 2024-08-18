// src/data/accountData.js

const accountData = [
    {
        id: 1,
        title: 'Profile Information',
        content: 'Update your personal details including name, email, and contact information. Ensure your profile is up-to-date to receive important notifications.',
        details: [
            { key: 'Name', value: 'John Doe' },
            { key: 'Email', value: 'john.doe@example.com' },
            { key: 'Phone', value: '+1234567890' }
        ],
    },
    {
        id: 2,
        title: 'Security Settings',
        content: 'Manage your password and configure additional security options like two-factor authentication. Ensure your account is secure to prevent unauthorized access.',
        details: [
            { key: 'Password', value: '••••••••' },
            { key: 'Two-Factor Authentication', value: 'Enabled' }
        ],
    },
    {
        id: 3,
        title: 'Billing Information',
        content: 'View your billing history, manage payment methods, and update your billing address. Keep your payment information current to avoid service interruptions.',
        details: [
            { key: 'Last Payment Date', value: 'August 15, 2024' },
            { key: 'Payment Method', value: 'Visa ending in 1234' },
            { key: 'Billing Address', value: '123 Main St, Anytown, USA' }
        ],
    },
];

export default accountData;
