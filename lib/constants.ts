export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with SpeakEasy!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_00gg168b15ZqdUsfZ2",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1Q0frrP84MboHid0Nm8i7acc"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let’s go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_eVacOUcrh9bCeYw7sv",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1Q0fsiP84MboHid0LtimCY2r"
          : "",
    },
  ];
  
  export const ORIGIN_URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://blogtext.vercel.app";