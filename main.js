alert(window.location.href || "no message");
const value = 5;

// Define a callback function to send the value back
if (window.scriptCallback) {
  window.scriptCallback(value);
}
