import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card', 'klarna'],
                automatic_tax: {
                    enabled: true
                },
                billing_address_collection: 'auto',
                shipping_address_collection: { allowed_countries: ['BE', 'FR', 'DE', 'SE', 'FI'] },
                shipping_options: [
                    { shipping_rate: 'shr_1MRHX8BWgPkjJ6mgoCHTcQHO' },
                    { shipping_rate: 'shr_1MQvFVBWgPkjJ6mgu1cLX2Jx' },
                ],
                tax_id_collection: {
                    enabled: true,
                },
                line_items: req.body.map((item) => {
                    const img = item.image[0].asset._ref;
                    console.log(img)
                    const newImage = img.replace('image-', 'https://cdn.sanity.io/images/p2gynb4v/production/').replace('-jpg', '.jpg');
                    console.log(newImage)

                    return {
                        price_data: {
                            currency: 'eur',
                            product_data: {
                                name: item.name,
                                images: [newImage],
                            },
                            tax_behavior: 'inclusive',
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity,

                    }
                }),
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            }

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);

            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}