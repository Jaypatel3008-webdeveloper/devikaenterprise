
  const productOptions = {
      "MS FLAT": [
        "18 X 4", "20 X 3", "20 X 5", "25 X 3", "25 X 5", "25 X 6", "25 X 8", "25 X 10", "25 X 12",
        "30 X 3", "30 X 5", "30 X 6", "30 X 8", "30 X 10", "30 X 12", "30 X 16", "32 X 6", "32 X 16",
        "40 X 3", "40 X 5", "40 X 6", "40 X 8", "40 X 10", "40 X 12", "40 X 16", "40 X 20", "40 X 25",
        "50 X 5", "50 X 6", "50 X 8", "50 X 10", "50 X 12", "50 X 16", "50 X 20", "50 X 25", "50 X 32", "50 X 40",
        "65 X 6", "65 X 8", "65 X 10", "65 X 12", "65 X 16", "65 X 20", "65 X 25", "65 X 32", "65 X 40",
        "75 X 6", "75 X 8", "75 X 10", "75 X 12", "75 X 16", "75 X 20", "75 X 25", "75 X 32", "75 X 40",
        "100 X 6", "100 X 8", "100 X 10", "100 X 12", "100 X 16", "100 X 20", "100 X 25", "100 X 32", "100 X 40", "100 X 50",
        "125 X 6", "125 X 8", "125 X 10", "125 X 12", "125 X 16", "125 X 20", "125 X 25", "125 X 32", "125 X 40",
        "150 X 6", "150 X 8", "150 X 10", "150 X 12", "150 X 16", "150 X 20", "150 X 25", "150 X 32",
        "175 X 6", "175 X 8", "175 X 10", "175 X 12", "175 X 16",
        "200 X 6", "200 X 8", "200 X 10", "200 X 12", "200 X 16", "200 X 20", "200 X 25", "200 X 32",
        "250 X 6", "250 X 8", "250 X 10", "250 X 12", "250 X 16", "250 X 20", "250 X 32",
        "300 X 8", "300 X 10", "300 X 12", "300 X 16",
        "350 X 10", "350 X 12"
      ],
      "MS ANGLE": ["25 X 25 X 3", "25 X 25 X 5", "30 X 30 X 3", "34 X 34 X 4", "35 X 35 X 5", "37 X 37 X 3", "40 X 40 X 3", "40 X 40 X 5", "40 X 40 X 6", "50 X 50 X 5", "50 X 50 X 6", "65 X 65 X 5", "65 X 65 X 6", "65 X 65 X 8", "65 X 65 X 10", "75 X 75 X 5", "75 X 75 X 6", "75 X 75 X 8", "75 X 75 X 10", "100 X 100 X 6", "100 X 100 X 8", "100 X 100 X 10"],
      "MS CHANNEL": ["3 X 1.5 (28 KG) - LIGHT CHANNEL", "4 X 2 (40 KG) - LIGHT CHANNEL", "4 X 2 (48 KG) - LIGHT CHANNEL", "5 X 2.5 (60 KG) - LIGHT CHANNEL", "5 X 2.5 (77 KG) - LIGHT CHANNEL", "3 X 1.5 (35 KG) - REGULAR CHANNEL", "4 X 2 (55 KG) - REGULAR CHANNEL", "4 X 2 (80 KG) - REGULAR CHANNEL", "5 X 2.5 (105 KG) - REGULAR CHANNEL", "5 X 2.5 (140 KG) - REGULAR CHANNEL"],
      "MS ROUND BAR": ["6 MM", "8 MM", "10 MM", "12 MM", "16 MM", "20 MM", "25 MM", "28 MM", "30 MM", "32 MM", "36 MM", "38 MM", "40 MM", "50 MM"],
      "MS SQUARE BAR": ["6 MM", "8 MM", "10 MM", "12 MM", "16 MM", "20 MM", "25 MM", "28 MM", "30 MM", "32 MM", "36 MM", "38 MM", "40 MM", "50 MM"],
      "MS BEAM": ["4 X 2", "5 X 2.5", "6 X 3", "8 X 4", "10 X 5", "12 X 5"],
      "MS PLATES": ["MS Plates 6mmx1250x6300", "MS Plates 6mmx1500x6300", "MS Plates 6mmx1250x12000", "MS Plates 6mmx1500x12000", "MS Plates 8mmx1250x6300", "MS Plates 8mmx1500x6300", "MS Plates 8mmx1250x12000", "MS Plates 8mmx1500x12000", "MS Plates 10mmx1250x6300", "MS Plates 10mmx1500x12000", "MS Plates 10mmx1250x12000", "MS Plates 12mmx1500x12000", "MS Plates12mmx1500x6300", "MS Plates 12mmx1250x6300", "MS Plates 10mmx1500x6300", "MS CHEQUERED PLATE 1250X6300X4 MM", "MS CHEQUERED PLATE 1250X6300X5MM", "MS CHEQUERED PLATE 1250X6300X6 MM", "3 MM MS PLATE", "4 MM MS PLATE", "5 MM MS PLATE", "6 MM MS PLATE", "8 MM MS PLATE", "10 MM MS PLATE", "12 MM MS PLATE", "14 MM MS PLATE", "16 MM MS PLATE", "18 MM MS PLATE", "20 MM MS PLATE", "24 MM MS PLATE", "25 MM MS PLATE", "28 MM MS PLATE", "32 MM MS PLATE", "36 MM MS PLATE", "40 MM MS PLATE"],
      "HR Sheets": ["MS SHEET 1250X2500 X 1.6 MM",
        "MS SHEET 1250X2500 X 2 MM",
        "MS SHEET 1250X2500 X 2.5 MM",
        "MS SHEET 1250X2500 X 3 MM",
        "MS SHEET 1250X2500 X 3.15 MM"],
      "CR Sheets": ["0.3 MM", "0.5 MM", "0.6 MM", "0.8 MM", "1.0 MM", "1.2 MM", "1.6 MM", "2.0 MM"],
      "Roofing Sheets": ["0.5MMX3.66 M GI ROOFING SHEET", "0.5MMX4.27 M GI ROOFING SHEET", "0.5MMX6.1 M GI ROOFING SHEET", "0.6MM X 5.5 M GI ROOFING SHEET", "0.50 MM ROOFING SHEET", "0.5MM GI RIDGES ROOFING SHEET"],
      "MS Round Pipes": ["ROUND PIPE 65NBX1.6MM", "ROUND PIPE 50NBX1.8MM", "ROUND PIPE 25X1.4MM"],
      "MS Square Pipes": ["SQUARE PIPE 30X30X2.0 MM", "SQUARE PIPE 25X25X1.6 MM", "SQUARE PIPE 25X25X2.0 MM", "SQUARE PIPE 20X20X1.6 MM", "SQUARE PIPE 50X50X2.0MM", "SQUARE PIPE 50X50X1.6 MM", "SQUARE PIPE 38X38X1.6 MM", "SQUARE PIPE 30X30X1.6 MM", "SQUARE PIPE 20X20X1.0 MM", "SQUARE PIPE 80X80X1.6 MM", "SQUARE PIPE 25X25X1.2 MM", "SQUARE PIPE 50X50X1.2 MM", "SQUARE PIPE 40x40x1.6 MM", "SQUARE PIPE 20X20X1.8 MM", "SQUARE PIPE 38X38X2.0 MM", "SQUARE PIPE 25X25X1.8 MM", "SQUARE PIPE 100X100X2.0MM"],
      "MS Rectangular Pipes": ["REC PIPE 80X38X1.6 MM", "REC PIPE 80X80X1.5 MM", "REC PIPE 100X50X2.0 MM", "REC PIPE 80X40X2.0 MM", "REC PIPE 60X40X2.0 MM", "REC PIPE 60X40X1.6 MM", "REC PIPE 60X40X1.4 MM", "REC PIPE 50X25X2.0MM", "REC PIPE 50X25X1.6MM", "REC PIPE 40X20X2.0MM", "REC PIPE 40X20X1.8 MM", "REC PIPE 80X40X1.8 MM"],
      "Guide Rails": ["45 X 45 X 5", "50 X 50 X 5", "70 X 65 X 9", "75 X 62 X 10", "89 X 12 X 16", "90 X 75 X 16", "114 X 89 X 16", "125 X 82 X 16", "127 X 89 X 16", "140 X 108 X 19", "140 X 102 X 28.6", "140 X 127 X 31.75"],
    };

    const productSelect = new Choices('#productSelect', {
      removeItemButton: true,
      searchEnabled: true,
      placeholderValue: 'Select product(s)'
    });

    const sizeDropdownsDiv = document.getElementById('sizeDropdowns');
    const sizeDropdownInstances = {};

    document.getElementById('productSelect').addEventListener('change', function () {
      const selectedProducts = Array.from(this.options).filter(option => option.selected).map(option => option.value);
      updateSizeDropdowns(selectedProducts);
    });

    function updateSizeDropdowns(selectedProducts) {
      sizeDropdownsDiv.innerHTML = '';
      selectedProducts.forEach(product => {
        const label = document.createElement('label');
        label.className = "block mb-1 font-medium";
        label.textContent = `Select size(s) for ${product}`;

        const select = document.createElement('select');
        select.id = `size-${product}`;
        select.setAttribute('multiple', '');
        productOptions[product].forEach(size => {
          const option = document.createElement('option');
          option.value = size;
          option.text = size;
          select.appendChild(option);
        });

        sizeDropdownsDiv.appendChild(label);
        sizeDropdownsDiv.appendChild(select);

        sizeDropdownInstances[product] = new Choices(select, {
          removeItemButton: true,
          searchEnabled: true,
          placeholderValue: 'Select size(s)'
        });
      });
    }

    // Add product choices initially
    Object.keys(productOptions).forEach(prod => {
      productSelect.setChoices([{ value: prod, label: prod }], 'value', 'label', false);
    });

    // Form Submit
    document.getElementById('inquiryForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const location = document.getElementById('location').value.trim();
  const business = document.getElementById('business').value.trim();

  const selectedProducts = productSelect.getValue(true);

  let message = `*Inquiry Details:*\nName: ${name}\nMobile: ${mobile}\nBusiness Name: ${business}\nLocation: ${location}\n\n*Products & Sizes:*\n`;

  selectedProducts.forEach(product => {
    const sizes = sizeDropdownInstances[product]?.getValue(true) || [];
    message += `\n${product}:\n${sizes.join(', ')}\n`;
  });

  const whatsappNumber = "917878850851"; // ✅ WhatsApp number jema message javu che
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');
});

document.querySelector('.whatsapp-float').addEventListener('click', function () {
    console.log('WhatsApp button clicked!');
    // You can also integrate tracking here
  });
    

//banner section

 document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const countUp = (el) => {
      const target = +el.getAttribute("data-target");
      let count = 0;
      const speed = 50;
      const increment = Math.ceil(target / speed);

      const update = () => {
        count += increment;
        if (count < target) {
          el.textContent = count;
          requestAnimationFrame(update);
        } else {
          el.textContent = target + "+";
        }
      };
      update();
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countUp(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });

