  // Function to open the "Guide" link in a new window in the middle of the screen
  function openGuideInNewWindow() {
    const url = 'https://cleandrabay.ie/libs/beara/';
    const windowWidth = 800; // Width of the new window
    const windowHeight = 600; // Height of the new window
    const windowFeatures = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${windowWidth},height=${windowHeight}`;

    // Calculate the center position of the screen
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowLeft = (screenWidth - windowWidth) / 2;
    const windowTop = (screenHeight - windowHeight) / 2;

    // Open the new window at the center position
    window.open(url, '_blank', `${windowFeatures},left=${windowLeft},top=${windowTop}`);
  }

  // Function to open the "Guide" link in a new window in the middle of the screen
  function openImageGuideInNewWindow() {
    const url = 'https://cleandrabay.ie/libs/gallery/index.html?type=sum';
    const windowWidth = 800; // Width of the new window
    const windowHeight = 600; // Height of the new window
    const windowFeatures = `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=${windowWidth},height=${windowHeight}`;

    // Calculate the center position of the screen
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const windowLeft = (screenWidth - windowWidth) / 2;
    const windowTop = (screenHeight - windowHeight) / 2;

    // Open the new window at the center position
    window.open(url, '_blank', `${windowFeatures},left=${windowLeft},top=${windowTop}`);
    
  }  

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunctionCbl() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}