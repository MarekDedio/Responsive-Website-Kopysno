/**
 * Opens the side navigation menu.
 */
function openNav() {
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
        mySidenav.style.width = "350px";
    }
}

/**
 * Closes the side navigation menu.
 */
function closeNav() {
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
        mySidenav.style.width = "0";
    }
    // Note: 'main' element was part of an original comment but doesn't appear in current index.html.
    // If it were present, its margin would be adjusted here.
    // const mainElement = document.getElementById("main");
    // if (mainElement) {
    //     mainElement.style.marginLeft = "0";
    // }
}

/**
 * Toggles the visibility of the search bar.
 * Assumed to be called by a dedicated search toggle button.
 */
function ShowHideSearchBar() {
    const searchBar = document.getElementById("SearchBar");
    if (searchBar) {
        if (searchBar.style.display === "none" || searchBar.style.display === "") {
            searchBar.style.display = "block";
        } else {
            searchBar.style.display = "none";
        }
    }
}

/**
 * Manages responsive adjustments for navigation elements based on window width.
 * This includes showing/hiding primary nav items and a "More" dropdown.
 * Also adjusts padding for list-group items.
 */
function updateResponsiveNavigation() {
    const windowWidth = window.innerWidth;
    const listGroupItems = document.getElementsByClassName("list-group-item");
    // Note: myBtn is fetched within DOMContentLoaded. This function, if called before,
    // might not find it. However, it's primarily for layout based on window width.
    // const mybutton = document.getElementById("myBtn"); 

    // Helper function to set display style of an element
    const setElementDisplay = (elementId, displayStatus) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = displayStatus;
        }
    };

    // Helper function to update padding for list group items
    const updateListGroupPadding = (paddingValue) => {
        for (let i = 0; i < listGroupItems.length; i++) {
            listGroupItems[i].style.paddingRight = paddingValue;
            listGroupItems[i].style.paddingLeft = paddingValue;
        }
    };

    // Logic for items visibility based on screen width
    // Each pair of setElementDisplay calls manages one primary nav item and its corresponding dropdown item.
    if (windowWidth < 1150) {
        setElementDisplay("Kontakt", "none");
        setElementDisplay("a1", "block"); // Show in "More" menu
        setElementDisplay("Wiecej", "block"); // Show "More" menu toggle
        updateListGroupPadding("5%");
    } else { // windowWidth >= 1150
        setElementDisplay("Kontakt", "block");
        setElementDisplay("a1", "none");
        setElementDisplay("Wiecej", "none");
        updateListGroupPadding("25%");
    }

    if (windowWidth < 1130) {
        setElementDisplay("Archiwum", "none");
        setElementDisplay("a2", "block");
        setElementDisplay("a22", "block");
    } else { // windowWidth >= 1130
        setElementDisplay("Archiwum", "block");
        setElementDisplay("a2", "none");
        setElementDisplay("a22", "none");
    }

    if (windowWidth < 965) {
        setElementDisplay("Dawni", "none");
        setElementDisplay("a3", "block");
    } else { // windowWidth >= 965
        setElementDisplay("Dawni", "block");
        setElementDisplay("a3", "none");
    }

    if (windowWidth < 863) {
        setElementDisplay("Informacja", "none");
        setElementDisplay("a4", "block");
        setElementDisplay("a41", "block");
        setElementDisplay("a42", "block");
        setElementDisplay("a43", "block");
        setElementDisplay("a44", "block");
        setElementDisplay("a45", "block");
    } else { // windowWidth >= 863
        setElementDisplay("Informacja", "block");
        setElementDisplay("a4", "none");
        setElementDisplay("a41", "none");
        setElementDisplay("a42", "none");
        setElementDisplay("a43", "none");
        setElementDisplay("a44", "none");
        setElementDisplay("a45", "none");
    }

    if (windowWidth < 776) {
        setElementDisplay("Lokalizacja", "none");
        setElementDisplay("a5", "block");
        setElementDisplay("a51", "block");
    } else { // windowWidth >= 776
        setElementDisplay("Lokalizacja", "block");
        setElementDisplay("a5", "none");
        setElementDisplay("a51", "none");
    }

    if (windowWidth < 557) {
        setElementDisplay("Aktualnosci", "none");
        setElementDisplay("a6", "block");
    } else { // windowWidth >= 557
        setElementDisplay("Aktualnosci", "block");
        setElementDisplay("a6", "none");
    }

    if (windowWidth < 300) { // Extreme case, likely for very small mobile screens
        setElementDisplay("Strona", "none");
        setElementDisplay("a7", "block");
    } else { // windowWidth >= 300
        setElementDisplay("Strona", "block");
        setElementDisplay("a7", "none");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    /**
     * Hides the search bar if it's currently visible.
     * Typically called when clicking outside the search bar area (e.g., on the main banner).
     */
    function hideSearchBarOnClickOutside() {
        const searchBar = document.getElementById("SearchBar");
        if (searchBar && searchBar.style.display === "block") {
            searchBar.style.display = "none";
        }
    }

    /**
     * Adjusts the font size of the main text content area based on window width.
     * Uses vw units for larger screens and a fixed px value for smaller screens.
     */
    function adjustTextFontSize() { // Renamed from TextHeightScale
        const textContentElement = document.getElementById("GettingTextHeight");
        if (!textContentElement) return;

        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 1800) {
            textContentElement.style.fontSize = "16px";
        } else {
            textContentElement.style.fontSize = "0.88vw";
        }
    }

    /**
     * Adjusts the left and right padding of the main text container (#texto)
     * based on the window width.
     */
    function adjustContentPadding() { // Renamed from dost
        const textContainer = document.getElementById("texto");
        // GettingTextHeight element is not directly used here for padding adjustment of 'textContainer'
        // const textContentElement = document.getElementById("GettingTextHeight"); 
        if (!textContainer) return;

        const windowWidth = window.innerWidth;
        if (windowWidth < 1800 && windowWidth > 1150) {
            textContainer.style.paddingRight = "25%";
            textContainer.style.paddingLeft = "25%";
        } else if (windowWidth >= 1800 || windowWidth <= 1150) { // Covers remaining cases
            textContainer.style.paddingRight = "10px";
            textContainer.style.paddingLeft = "10px";
        }
    }

    // Event listener for the main banner to hide search bar and close nav
    const mainBanner = document.querySelector('.banerglowna');
    if (mainBanner) {
        mainBanner.addEventListener('click', function() {
            hideSearchBarOnClickOutside(); 
            if (typeof closeNav === 'function') { // closeNav is globally defined
                closeNav();
            }
        });
    }
    
    const scrollToTopButton = document.getElementById("myBtn");

    // Initialize and set interval for responsive navigation updates
    if (typeof updateResponsiveNavigation === 'function') {
      updateResponsiveNavigation(); 
      setInterval(updateResponsiveNavigation, 25); 
    }

    /**
     * Shows or hides the "scroll to top" button based on scroll position.
     */
    function manageScrollToTopButtonVisibility() { 
        if (!scrollToTopButton) return;
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    /**
     * Scrolls the page to the top.
     */
    function scrollToPageTop() { 
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }
    
    // Attach event listener to the "scroll to top" button
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', scrollToPageTop);
    }

    /**
     * Manages the sticky behavior of the main header based on scroll position.
     * Adds/removes a 'sticky' class and adjusts top padding of the text content.
     */
    function handleStickyHeader() { 
        const bannerImage = document.getElementById("BannerImage");
        const textContentContainer = document.getElementById("texto");
        const headerElement = document.getElementById("myHeader");

        if (!bannerImage || !textContentContainer || !headerElement) return;

        const bannerHeight = bannerImage.offsetHeight;
        
        if (window.pageYOffset > bannerHeight) {
            headerElement.classList.add("sticky");
            textContentContainer.style.paddingTop = "42px"; // Height of the sticky header
        } else {
            headerElement.classList.remove("sticky");
            textContentContainer.style.paddingTop = "0px";
        }
    }

    // Attach scroll listeners for header and button
    window.onscroll = function() {
        handleStickyHeader();
        manageScrollToTopButtonVisibility();
    };
    
    /**
     * Periodically calls functions for layout updates (sticky header, text font size, content padding).
     * This interval ensures layout adjustments are responsive to dynamic changes.
     */
    function runPeriodicLayoutUpdates() { 
        handleStickyHeader();       // Check sticky header state
        adjustTextFontSize();       // Adjust text font size
        adjustContentPadding();     // Adjust content padding
    }
    setInterval(runPeriodicLayoutUpdates, 25); // Runs every 25ms

    // Modal interaction script
    const imageModal = document.getElementById('myModal');
    const modalImageElement = document.getElementById("img01");
    const modalCaptionText = document.getElementById("caption");
    
    if (imageModal && modalImageElement && modalCaptionText) {
        const thumbnailImages = document.querySelectorAll('.thumbnail');
        thumbnailImages.forEach(function(img) { // Use forEach for NodeList
            img.addEventListener('click', function() { // Changed from onclick to addEventListener
                imageModal.style.display = "block";
                modalImageElement.src = this.src;
                modalImageElement.alt = this.alt;
                modalCaptionText.innerHTML = this.alt;
            });
        });
        
        // Close modal when the modal background (or image itself) is clicked
        imageModal.addEventListener('click', function(event) {
            // Close if the click is on the modal background itself, not on the image/caption
            if (event.target === imageModal || event.target === modalImageElement || event.target === modalCaptionText) {
                 modalImageElement.className += " out"; // Add animation class
                 setTimeout(function() {
                    imageModal.style.display = "none";
                    modalImageElement.className = "modal-content"; // Reset class for next open
                  }, 400); // Match animation duration
            }
        });
    }
});
