import React from 'react';

export const FAQ = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:p-10 p-6 bg-white text-black'>
      <h1 className="text-4xl font-bold underline transition-transform duration-300 hover:scale-150 font-custom">FAQ</h1>
      <div className="flex flex-col space-y-6 mt-6 w-full  p-10">
        
        {/* FAQ 1 */}
        <div className="border-b-2 border-rose-300  pb-4 ">
          <h2 className="text-xl font-semibold">1. Can I get a Brow Lamination or Lash Lift while pregnant?</h2>
          <p className="mt-2">
            Yes, but we recommend consulting with your healthcare provider first. Some ingredients used in brow lamination and lash lifts may cause sensitivities during pregnancy. A patch test is always recommended before proceeding with the treatment.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">2. How long does Brow Lamination last?</h2>
          <p className="mt-2">
            Brow Lamination typically lasts 6 to 8 weeks, depending on your brow growth cycle. To maintain the best results, avoid wetting your brows for 24 hours after the treatment and follow any aftercare instructions provided.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">3. Are the tints used safe for sensitive skin?</h2>
          <p className="mt-2">
            We use high-quality, skin-safe products for all tinting services. However, if you have particularly sensitive skin, we recommend a patch test 48 hours before the appointment to avoid any adverse reactions.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">4. Can I wear makeup after a Lash Lift or Brow Tint?</h2>
          <p className="mt-2">
            We recommend waiting at least 24 hours after a Lash Lift or Brow Tint before applying makeup or any oil-based products. This allows the treatment to fully set for optimal results.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">5. How often can I get a Brow Henna treatment?</h2>
          <p className="mt-2">
            Brow Henna treatments can be done every 4-6 weeks. It’s important to let your natural brows rest between treatments to maintain healthy hair growth.
          </p>
        </div>

        {/* FAQ 6 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">6. Can I swim after a Lash Lift or Brow Tint?</h2>
          <p className="mt-2">
            We recommend avoiding swimming or excessive moisture around the treated area for at least 24-48 hours after your Lash Lift or Brow Tint to ensure the best results.
          </p>
        </div>

        {/* FAQ 7 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">7. What should I do before my appointment?</h2>
          <p className="mt-2">
            Before your appointment, ensure your face is clean and free from makeup, lotions, and oils. If you are getting a brow or lash tint, avoid any exfoliating treatments 24 hours before the service.
          </p>
        </div>

        {/* FAQ 8 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">8. How should I care for my skin after a Lash Lift or Brow Tint?</h2>
          <p className="mt-2">
            After a Lash Lift or Brow Tint, avoid direct sun exposure and harsh skincare products for at least 24 hours. Apply a gentle moisturizer or nourishing oil to keep the area hydrated.
          </p>
        </div>

        {/* FAQ 9 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">9. How soon can I book a follow-up appointment?</h2>
          <p className="mt-2">
            Depending on the service, you can book a follow-up appointment after 4-6 weeks. Our team can help recommend the best timing for your next visit.
          </p>
        </div>

        {/* FAQ 10 */}
        <div className="border-b-2 border-rose-300  pb-4">
          <h2 className="text-xl font-semibold">10. What is Brow Henna and how does it differ from regular tint?</h2>
          <p className="mt-2">
            Brow Henna is a natural dye made from plant-based ingredients that tints both the brow hairs and the skin, giving a fuller, more defined look. It lasts longer on the skin compared to regular brow tints.
          </p>
        </div>

      </div>
    </div>
  );
};
