//Import the library into your project
var easyinvoice = require("easyinvoice");
var fs = require("fs");

var data = {
  //"documentTitle": "RECEIPT", //Defaults to INVOICE
  currency: "usd",
  taxNotation: "vat", //or gst
  marginTop: 25,
  marginRight: 25,
  marginLeft: 25,
  marginBottom: 25,
  logo: "https://freepikpsd.com/logo-template-png-transparent-images-free/162789/", //or base64
  //"logoExtension": "png", //only when logo is base64
  sender: {
    company: "Ributech Computers",
    phone: "0722691006",
    email: "info@ributechcomputers.com",
    city: "Nairobi",
    country: "Kenya",
    //"custom1": "custom value 1",
    //"custom2": "custom value 2",
    //"custom3": "custom value 3"
  },
  client: {
    company: "Mr. Bean",
    phone: "0720000000",
    email: "bean@gmail.com",
    city: "Nairobi",
    country: "Kenya",
    //"custom1": "custom value 1",
    //"custom2": "custom value 2",
    //"custom3": "custom value 3"
  },
  invoiceNumber: "2020.0001",
  invoiceDate: "05-01-2022",
  products: [
    {
      quantity: "4",
      description: "Laptop Keyboard",
      tax: 16,
      price: 2500,
    },
    {
      quantity: "2",
      description: "Screen Replacement",
      tax: 16,
      price: 5000,
    },
  ],
  bottomNotice: "Thank You for your Business.",
};

//Executes the creation of the PDF
easyinvoice.createInvoice(data, async function (result) {
  //The response will contain a base64 encoded PDF file
  console.log(result.pdf);

  await fs.writeFileSync("invoice.pdf", result.pdf, "base64");
});
