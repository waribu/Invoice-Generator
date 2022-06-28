const easyinvoice = require("easyinvoice");
const fs = require("fs");
// Our new data object, this will replace the empty object we used earlier.
var data = {
  // recipient's details
  client: {
    company: "Mr. Bean",
    address: "Blue Hut Building",
    zip: "00200",
    city: "Nairobi",
    country: "Kenya",
  },

  // Now let's add our own sender details
  sender: {
    company: "Ributech Computers",
    address: "Bihi Towers",
    zip: "12243",
    city: "Nairobi",
    country: "Kanya",
  },

  // Of course we would like to use our own logo and/or background on this invoice. There are a few ways to do this.
  images: {
    //      Logo:
    // 1.   Use a url
    logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
  },

  // Let's add some standard invoice data, like invoice number, date and due-date
  information: {
    // Invoice number
    number: "2022.0561",
    // Invoice data
    date: "12-12-2022",
    // Invoice due date
    "due-date": "31-12-2022",
  },

  // Now let's add some products! Calculations will be done automatically for you.
  products: [
    {
      quantity: "1",
      description: "HP monitors",
      "tax-rate": 16,
      price: 113.0,
    },
    {
      quantity: "2",
      description: "laptop screen",
      "tax-rate": 16,
      price: 55.0,
    },
    {
      quantity: "4",
      description: "keyboard replacement",
      "tax-rate": 16,
      price: 25.0,
    },
  ],

  // Use bottomNotice to add a message of choice to the bottom of our invoice
  // bottomNotice: "Thank you for your Business!!",

  //invoice dimensions, currency, tax notation, and number formatting
  settings: {
    currency: "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.

    locale: "en-US", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
    "tax-notation": "vat", // Defaults to 'vat'
    // Using margin we can regulate how much white space we would like to have from the edges of our invoice
    "margin-top": 25, // Defaults to '25'
    "margin-right": 25, // Defaults to '25'
    "margin-left": 25, // Defaults to '25'
    "margin-bottom": 25, // Defaults to '25'
    format: "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
    height: "1000px", // allowed units: mm, cm, in, px
    width: "500px", // allowed units: mm, cm, in, px
    // orientation: "landscape", // portrait or landscape, defaults to portrait
  },
};
easyinvoice.createInvoice(data, function (result) {
  fs.writeFileSync("invoice.pdf", result.pdf, "base64");
});
