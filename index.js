document.getElementById("loginButton").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    
    if (email === "garavaliyevrasul@gmail.com" && password === "admin123") {
    
      document.getElementById("loginFields").style.display = "none";
   
      document.getElementById("carbonFootprintForm").style.display = "block";
    } else {
      alert("The email and password you entered are incorrect. Please check again.");
    }
  });

  document.getElementById("calculateButton").addEventListener("click", function() {
   let distanceTraveled = parseFloat(document.getElementById("distanceTraveled").value);
    let energyConsumption = parseFloat(document.getElementById("energyConsumption").value);
    let wasteProduced = parseFloat(document.getElementById("wasteProduced").value);

    let distanceCO2 = distanceTraveled * 0.2; 
    let energyCO2 = energyConsumption * 1.5; 
    let wasteCO2 = wasteProduced * 50; 

    let totalCO2 = distanceCO2 + energyCO2 + wasteCO2;
    document.getElementById("carbonFootprint").textContent = "Carbon footprint: " + totalCO2.toFixed() + " kg CO2";
  });