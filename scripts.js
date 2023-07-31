const STATUS_MAP = {
    shelf: {
        color: '',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'grey',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
};

// Helper function to find elements by their ID
function findById(id) {
    return document.getElementById(id);
}

// Helper function to find elements by their class name
function findByClass(className) {
    return document.getElementsByClassName(className);
}

// Update the status and buttons for a given book element
function updateBookStatus(bookElement) {
    const statusElement = bookElement.querySelector('.status');
    const reserveButton = bookElement.querySelector('.reserve');
    const checkoutButton = bookElement.querySelector('.checkout');
    const checkinButton = bookElement.querySelector('.checkin');

    const status = STATUS_MAP[statusElement.textContent.trim()];
    statusElement.style.color = status.color;
    reserveButton.disabled = !status.canReserve;
    checkoutButton.disabled = !status.canCheckout;
    checkinButton.disabled = !status.canCheckIn;
    reserveButton.style.color = 'black'; // Ensure the button color is black
    checkoutButton.style.color = 'black'; // Ensure the button color is black
    checkinButton.style.color = 'black'; // Ensure the button color is black
}

// Find all book elements and update their status and buttons
const bookElements = findByClass('book');
for (const bookElement of bookElements) {
    updateBookStatus(bookElement);'