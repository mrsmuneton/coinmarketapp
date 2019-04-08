var stripe = require("stripe")("sk_test_3hVA6z4sUX3uXRvQH70cqwVd");

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: 'Legacy Membership',
    source: token,
  });
})();