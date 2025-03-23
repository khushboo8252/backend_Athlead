const getFakeProductDetails = (req, res) => {
  const fakeData = {
    productName: "Samsung 55-inch 4K Ultra HD Smart LED TV",
    rating: "4.5",
    numberOfRatings: "12,345",
    sellingPrice: "₹54,999",
    totalDiscount: "₹10,000",
    bankOffers: [
      "10% instant discount with SBI Credit Cards",
      "No-cost EMI available on Bajaj Finserv"
    ],
    aboutThisItem: [
      "Resolution: 4K Ultra HD (3840 x 2160)",
      "Sound Output: 20 Watts with Dolby Audio",
      "Smart Features: Netflix, Prime Video, Disney+ Hotstar"
    ],
    productInformation: {
      Brand: "Samsung",
      Model: "UA55TU8000",
      Weight: "14 kg",
      Dimensions: "123 x 25 x 77 cm"
    },
    images: [
      "https://crdms.images.consumerreports.org/f_auto,w_1200/prod/products/cr/models/410360-70-inch-and-larger-tvs-samsung-qn77s90c-10036404.png", 
      "https://cdn.mos.cms.futurecdn.net/7jjQ7v7DqGajMW39QTEiMj.jpg"
      
    ],
    fromManufacturer: [
      "https://crdms.images.consumerreports.org/f_auto,w_1200/prod/products/cr/models/410025-70-inch-and-larger-tvs-hisense-85ux-10035720.png",
      "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2015/11/158/g15865W850C-o_left.jpg"
    ],
    aiGeneratedReviewSummary: "Most users appreciate the picture quality and smart features, but some mention the sound output could be better."
  };

  res.json(fakeData);
};

// Export correctly for CommonJS
module.exports = { getFakeProductDetails };
