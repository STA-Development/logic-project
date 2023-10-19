let uploadedFileNames = {}
let selectedRadioButton = ''

function findRadioButtonName(name) {
  selectedRadioButton = name
}

const form = document.querySelector('.needs-validation')

async function UploadImages(event, name) {

  const backendEndpoint = 'http://localhost:3000/api/upload'

  const file = event.target.files[0]

  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await axios.post(backendEndpoint, formData, {
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
  const fromCity1Inputs = document.getElementById('fromCity1').value
  const fromCity2Inputs = document.getElementById('fromCity2').value
  const fromCity3Inputs = document.getElementById('fromCity3').value
  const fromCity4Inputs = document.getElementById('fromCity4').value
  const fromCity5Inputs = document.getElementById('fromCity5').value
  const toCity1Inputs = document.getElementById('toCity1').value
  const toCity2Inputs = document.getElementById('toCity2').value
  const toCity3Inputs = document.getElementById('toCity3').value
  const toCity4Inputs = document.getElementById('toCity4').value
  const toCity5Inputs = document.getElementById('toCity5').value

  try {
    const response = await axios.post('http://localhost:3000/api/company', {
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
      fromCity1: fromCity1Inputs,
      fromCity2: fromCity2Inputs,
      fromCity3: fromCity3Inputs,
      fromCity4: fromCity4Inputs,
      fromCity5: fromCity5Inputs,
      toCity1: toCity1Inputs,
      toCity2: toCity2Inputs,
      toCity3: toCity3Inputs,
      toCity4: toCity4Inputs,
      toCity5: toCity5Inputs,
      optionCity: optionCityInput,
      optionState: optionStateInput,
      optionZip: optionZipInput,
    })
    showAlert('success', 'Form submitted successfully!')
  } catch (error) {
   throw new Error()
  }
}
function hideShowDiv(val) {
  if (val === 1) {
    document.getElementById('box').style.display = 'block'
    document.getElementById('boxSecond').style.display = 'none'
  }
  if (val === 2) {
    document.getElementById('box').style.display = 'none'
    document.getElementById('boxSecond').style.display = 'block'
  }
}
const formId = document.getElementById('my_form')
document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault()
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    form.classList.add('was-validated');
  } else {
    postData()
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

function showAlert(type, message) {
  const alertDiv = document.createElement('div')
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`
  alertDiv.textContent = message

  const container = document.querySelector('.container')
  container.appendChild(alertDiv)

  setTimeout(function () {
    alertDiv.remove()
  }, 3000)
}

const radioButtons = document.querySelectorAll('input[name="example"]')

radioButtons.forEach((radio) => {
  radio.addEventListener('click', handleRadioClick)
})
