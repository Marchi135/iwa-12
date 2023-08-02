const STATUS_MAP = {
    shelf: {
        color: 'green',
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

document.addEventListener("DOMContentLoaded", function () {
    const books = document.querySelectorAll("[id^='book']");
  
    books.forEach((book, index) => {
      const status = book.querySelector(".status");
      const reserveBtn = book.querySelector(".reserve");
      const checkoutBtn = book.querySelector(".checkout");
      const checkinBtn = book.querySelector(".checkin");
  
      const statusText = status.innerText.toLowerCase();
      const statusConfig = STATUS_MAP[statusText];
  
      if (statusConfig) {
        status.style.color = statusConfig.color; // Set the status text color
  
        reserveBtn.disabled = !statusConfig.canReserve;
        checkoutBtn.disabled = !statusConfig.canCheckout;
        checkinBtn.disabled = !statusConfig.canCheckIn;
  
        // Convert buttons to grayscale
        reserveBtn.style.color = "black";
        checkoutBtn.style.color = "black";
        checkinBtn.style.color = "black";
      } else {
        // Handle cases when the status is not found in STATUS_MAP
        console.error("Status not found in STATUS_MAP:", statusText);
      }
    });
  });