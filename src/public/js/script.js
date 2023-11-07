let uploadedFileNames = {}
let selectedRadioButton = ''
const backendEndpoint = '/api/'

function findRadioButtonName(name) {
  selectedRadioButton = name
}

const form = document.querySelector('.needs-validation')

async function UploadImages(event, name) {
  const file = event.target.files[0]

  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await axios.post(`${backendEndpoint}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    uploadedFileNames = {...uploadedFileNames, [name]: response.data}
  } catch (error) {
    throw new Error(error)
  }
}

async function postData() {
  const companyNameInput = document.getElementById('companyName').value
  const mcInput = document.getElementById('mc').value
  const addressInput = document.getElementById('address').value
  const cityInput = document.getElementById('city').value
  const stateInput = document.getElementById('state').value
  const zipInput = document.getElementById('zip').value
  const primaryPhInput = document.getElementById('primaryPh').value
  const extInput = document.getElementById('ext').value
  const secondaryPhInput = document.getElementById('secondaryPh').value
  const generalContactInput = document.getElementById('generalContact').value
  const cellInput = document.getElementById('cell').value
  const legalNameInput = document.getElementById('legalName').value
  const dbaNameInput = document.getElementById('dbaName').value
  const fidInput = document.getElementById('fid').value
  const insuranceCompanyInput = document.getElementById('insuranceCompany').value
  const liabilityCoverageInput = document.getElementById('liabilityCoverage').value
  const cargoCoverageInput = document.getElementById('cargoCoverage').value
  const liabilityExpInput = document.getElementById('liabilityExp').value
  const cargoExpInput = document.getElementById('cargoExp').value
  const powerUnitsInput = document.getElementById('powerUnits').value
  const payCompanyNameInput = document.getElementById('payCompanyName').value
  const payCompanyAddressInput = document.getElementById('payCompanyAddress').value
  const optionCityInput = document.getElementById('optionCity').value
  const optionStateInput = document.getElementById('optionState').value
  const optionZipInput = document.getElementById('optionZip').value
  const routingNumberInput = document.getElementById('routingNumber').value
  const accountNumberInput = document.getElementById('accountNumber').value
  const typeInput = document.getElementById('type').value
  const type2Input = document.getElementById('type2').value
  const type3Input = document.getElementById('type3').value
  const qtyInput = document.getElementById('qty').value
  const qty2Input = document.getElementById('qty2').value
  const qty3Input = document.getElementById('qty3').value
  const additionalNotesInput = document.getElementById('additionalNote').value
  const fromCityOptionalInput = document.querySelectorAll('.fromCity')
  const toCityOptionalInput = document.querySelectorAll('.toCity')
  let desiredLanesArray = [];
  fromCityOptionalInput.forEach((input, index) => {
    desiredLanesArray.push({
      fromCity: input.value,
      toCity: toCityOptionalInput[index].value
    });
    desiredLanesArray = desiredLanesArray.filter(item => item.fromCity !== '' || item.toCity !== '')
  });


  try {
    const response = await axios.post(`${backendEndpoint}/company`, {
      customerInfo: {
        companyName: companyNameInput,
        mc: mcInput,
        address: addressInput,
        city: cityInput,
        state: stateInput,
        zip: zipInput,
        primaryPh: primaryPhInput,
        ext: extInput,
        secondaryPh: secondaryPhInput,
        generalContact: generalContactInput,
        cell: cellInput,
        legalName: legalNameInput,
        dbaName: dbaNameInput,
        fid: fidInput,
        w9File: uploadedFileNames.w9File,
        insuranceCompanyName: insuranceCompanyInput,
        liabilityCoverage: liabilityCoverageInput,
        cargoCoverage: cargoCoverageInput,
        liabilityExpDate: liabilityExpInput,
        cargoExpDate: cargoExpInput,
        coiFile: uploadedFileNames.coiFile,
        payment: selectedRadioButton,
        payToCompanyName: payCompanyNameInput,
        payToCompanyAddress: payCompanyAddressInput,
        paymentCity: optionCityInput,
        paymentState: optionStateInput,
        paymentZip: optionZipInput,
        routingNumber: routingNumberInput,
        accountNumber: accountNumberInput,
        noaFile: uploadedFileNames.noaFile,
        directPaymentFile: uploadedFileNames.directPaymentFile,
        type: typeInput,
        type2: type2Input,
        type3: type3Input,
        quantity: qtyInput,
        quantity2: qty2Input,
        quantity3: qty3Input,
        powerOfUnits: powerUnitsInput,
        additionalNote: additionalNotesInput,
        optionCity: optionCityInput,
        optionState: optionStateInput,
        optionZip: optionZipInput,
      },
      desiredLanes: desiredLanesArray,
    })
    window.location.href = '/success'
  } catch (error) {
    throw new Error()
  }
}

function toggleRequireds(boxInputToRequire, boxInputToRemoveRequire) {
  const allInputs = boxInputToRequire.querySelectorAll('input')
  allInputs.forEach(oneInput => oneInput.setAttribute('required', 'true'))
  const removedAllInputs = boxInputToRemoveRequire.querySelectorAll('input')
  removedAllInputs.forEach(oneInput => oneInput.removeAttribute('required'))
}

function hideShowDiv(val) {
  const boxToOne = document.getElementById('box')
  const boxToSecond = document.getElementById('boxSecond')
  if (val === 1) {
    boxToOne.style.display = 'block'
    boxToSecond.style.display = 'none'
    toggleRequireds(boxToOne, boxToSecond)
  }
  if (val === 2) {
    boxToOne.style.display = 'none'
    boxToSecond.style.display = 'block'
    toggleRequireds(boxToSecond, boxToOne)
  }
}
const formId = document.getElementById('my_form')
document.getElementById('submit').addEventListener('click', async function(event) {
  event.preventDefault()
  if (!form.checkValidity()) {
    event.preventDefault()
    form.classList.add('was-validated');
  } else {
    await postData()
    formId.reset()
    form.classList.remove('was-validated');
  }
})
const box = document.getElementById('box')
const boxSecond = document.getElementById('box')
function handleRadioClick() {
  if (document.getElementById('option1').checked) {
    box.style.display = 'block'
    boxSecond.style.display = 'none'
  }
  if (document.getElementById('option3').checked) {
    box.style.display = 'block'
    boxSecond.style.display = 'none'
  } else {
    box.style.display = 'none'
    boxSecond.style.display = 'block'
  }
}

const radioButtons = document.querySelectorAll('input[name="example"]')

radioButtons.forEach((radio) => {
  radio.addEventListener('click', handleRadioClick)
})
const addButton = document.getElementById("add");

const usaCities = jsonData.map((item) => {
  return `${item.name}, ${item.state}`
})

function initializeAutocomplete() {
  $(".autocomplete-input").each(function() {
    const fromCityInput = $(this);

    fromCityInput.autocomplete({
      source: usaCities
    });

    $(document).on("click", function(event) {
      if (!$(event.target).closest(".ui-autocomplete").length) {
        const userInput = fromCityInput.val();
        const matched = $.ui.autocomplete.filter(usaCities, userInput);

        if (matched.length === 0) {
          fromCityInput.val("");
        }

        fromCityInput.autocomplete("close");
      }
    });
  });
}

$(document).ready(function() {
  initializeAutocomplete();
});

function removeInputFields(event) {
  const parentDiv = event.target.closest('.row');
  parentDiv.remove();
}
addButton.addEventListener("click", function() {
  const newInputFields = document.createElement("div");
  newInputFields.classList.add('row')
  newInputFields.style.marginLeft = '5px'
  newInputFields.innerHTML = `
            <div class="col-md-2">
                <div class="mb-3">
                    <label for="fromCity" class="form-label">From (City,State)</label>
                    <input type="text" class="form-control fromCity autocomplete-input" required>
                </div>
            </div>
            <div class="col-md-2">
                <div class="mb-3">
                    <label for="toCity" class="form-label">To (City, State)</label>
                    <input type="text" class="form-control toCity autocomplete-input" required>
                </div>
            </div>
            <div class="col-md-2" style='margin-top: 33px'>
                <div class="mb-3">
                    <button style='border: 2px solid #6699cc; font-weight: bold; width:40px' type="button" class="btn btn-light removeDeliveryAddress">-</button>
                </div>
            </div>
           `;
  $(document).ready(function() {
    initializeAutocomplete();
  });
  document.querySelector(".delivery-address").appendChild(newInputFields);

  const removeDeliveryAddressBtns = document.querySelectorAll(".removeDeliveryAddress");
  removeDeliveryAddressBtns.forEach(item => item.addEventListener('click', removeInputFields))

});


