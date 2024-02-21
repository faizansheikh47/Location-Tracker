 <script>
        function searchPhoneNumber() {
            var phoneNumberInput = document.getElementById("phoneNumberInput");
            var phoneNumber = phoneNumberInput.value.trim();
            if (phoneNumber !== "") {
                // Here you can make an AJAX request to a server-side script to search for the phone number
                // For demonstration purposes, we'll just display a mock result
                var resultElement = document.getElementById("result");
                resultElement.innerHTML = "<p>Phone Number: " + phoneNumber + "</p><p>Name: John Doe</p><p>Location: New York</p>";
            }
        }
   </script>
