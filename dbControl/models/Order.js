const mongoose = require('mongoose');
const crypto = require('crypto');

const orderSchema = new mongoose.Schema({
    customerName: { 
        type: String, 
        required: true 
    },
    customerPhone: { 
        type: String, 
        required: true 
    },
    soft1Id: { 
        type: String, 
        required: true 
    },
    items: [{
        code: { 
            type: String, 
            required: true 
        },
        quantity: { 
            type: Number, 
            required: true 
        },
        arrived: { 
            type: Boolean, 
            default: false  // Default value for arrived is false
        }
    }],
    completed: { 
        type: Boolean, 
        default: false  // Default value for completed is false
    },
    called: { 
        type: Boolean, 
        default: false  // Default value for called is false
    },
    date: { 
        type: String, 
        required: true 
    },
    salesman: { 
        type: String 
    },
    comment: { 
        type: String, 
        default: ""  // Default value is an empty string
    }
});

// Create the Order model from the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;