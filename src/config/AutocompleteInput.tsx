// import React, { useRef, useEffect } from "react";

// type AutocompleteInputProps = {
//   onChange: (value: string) => void;
//   value: string;
// };

// function AutocompleteInput({ onChange, value, ...inputProps }: AutocompleteInputProps) {
//   const autocompleteInputRef = useRef(null);
//   let autocomplete; // Declare autocomplete object outside useEffect

//   useEffect(() => {
//     if (!window.google || !window.google.maps.places) {
//       console.error("Google Maps JavaScript API is not loaded or not initialized properly.");
//       return;
//     }

//     // Assign the Autocomplete instance to the autocomplete object
//     autocomplete = new window.google.maps.places.Autocomplete(autocompleteInputRef.current);

//     autocomplete.addListener("place_changed", function () {
//       const place = autocomplete.getPlace();
//       if (onChange) {
//         // Send back just the address string
//         onChange(place.formatted_address || "");
//       }
//     });

//     // Cleanup function
//     return () => {
//       if (autocomplete) {
//         window.google.maps.event.clearInstanceListeners(autocomplete);
//       }
//     };
//   }, [onChange]); // Add onChange to dependency array if it can change over time

//   return (
//     <input
//       ref={autocompleteInputRef}
//       value={value}
//       placeholder="Enter your address"
//       {...inputProps}
//     />
//   );
// }

// export default AutocompleteInput;
