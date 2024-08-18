// src/data/billingData.js

const billingData = [
    {
        id: 1,
        title: 'Billing History',
        content: 'Review your recent transactions and download invoices as needed.',
        transactions: [
            { date: 'August 15, 2024', amount: '$120.00', description: 'Monthly Subscription' },
            { date: 'July 15, 2024', amount: '$120.00', description: 'Monthly Subscription' },
            { date: 'June 15, 2024', amount: '$120.00', description: 'Monthly Subscription' },
        ],
    },
    {
        id: 2,
        title: 'Payment Methods',
        content: 'Manage your payment methods. Ensure your payment information is up-to-date to avoid service interruptions.',
        methods: [
            { type: 'Visa', last4: '1234', billingAddress: '123 Main St, Anytown, USA' },
            { type: 'MasterCard', last4: '5678', billingAddress: '123 Main St, Anytown, USA' }
        ],
    },
    {
        id: 3,
        title: 'Subscription Details',
        content: 'View your current subscription plan and its details.',
        plan: {
            name: 'Premium Plan',
            renewalDate: 'August 15, 2024',
            nextBilling: '$120.00',
            status: 'Active',
        },
    },
];

export default billingData;
