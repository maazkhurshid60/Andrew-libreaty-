import { Fragment } from "react";
import { Cta, Figure } from "./_parts";

/**
 * Body for "Tips for Showing Your House", supplied as Andrew Blog.docx.
 *
 * Rendered as DIRECT children of `.ar-narrow` — blog.css styles body copy with
 * `.ar-body .ar-narrow > p`, so wrapping any of this in an extra element
 * silently drops the type styling. That is also why the CTA below is a sibling
 * rather than a section wrapper.
 *
 * Headings follow the document: its Heading 2s are the article's sections (h2)
 * and its Heading 3s the sub-steps (h3). blog.css styles exactly those two
 * levels, so nothing here needs a new rule.
 *
 * The two in-article images are the ones the document marked "Check Your
 * Slack" — the thermostat after "Keep the Temperature Comfortable", and the
 * safe after "What Should You Hide During a House Showing". Both are in place.
 */

/**
 * The FAQ block, kept as data because it is rendered twice: as visible copy
 * here, and as FAQPage structured data in app/blog/[slug]/page.tsx. Google
 * requires the two to match — schema whose answers are not on the page is a
 * violation, not just a wasted rich result — so they read from one array.
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: "How clean should my house be for a showing?",
    a: "Your house should be clean, tidy, and free of strong odors. Focus on floors, kitchens, bathrooms, windows, surfaces, and areas buyers may inspect.",
  },
  {
    q: "What should I do right before a house showing?",
    a: "Make the beds, clear counters, put away clutter, remove trash, open blinds, turn on lights, check the temperature, secure valuables, and leave before buyers arrive.",
  },
  {
    q: "Should I leave during a house showing?",
    a: "Usually, yes. Leaving gives buyers more freedom to look around and discuss the property with their agent.",
  },
  {
    q: "What should I hide when selling my house?",
    a: "Secure valuables, medication, personal documents, financial information, spare keys, electronics, and other private or sensitive items.",
  },
  {
    q: "Should I remove family photos when showing my house?",
    a: "You do not have to remove every photo. However, reducing highly personal items can help buyers imagine themselves living in the home.",
  },
  {
    q: "Should I leave the lights on for a house showing?",
    a: "Yes. Turn on lights in darker rooms and open blinds or curtains to make the home easier to see.",
  },
  {
    q: "What should I do with my pets during a showing?",
    a: "Take pets with you when possible. If that is not possible, keep them secure and let your agent know where they are.",
  },
  {
    q: "How do I keep my house clean for repeated showings?",
    a: "Keep clutter low, pack away items you rarely use, create a simple daily cleaning routine, and use the same quick checklist before every showing.",
  },
  {
    q: "What should I do if a buyer arrives early?",
    a: "Follow your agent's showing process. Do not feel pressured to let an unexpected visitor into your home without confirming who they are and why they are there.",
  },
  {
    q: "How do I make my house look bigger during a showing?",
    a: "Remove extra furniture and clutter, keep walkways open, clear surfaces, and let in natural light. A simple layout can make rooms feel more open.",
  },
  {
    q: "Do I need to remodel my house before showing it?",
    a: "Not always. Start with cleaning, decluttering, basic repairs, lighting, and curb appeal. Ask your real estate agent which improvements are most likely to help before spending money on a major project.",
  },
];

export default function TipsForShowingYourHouse() {
  return (
    <>
      <p>
        To show your house in the best light, keep it clean, bright, clutter-free, comfortable,
        and safe.
      </p>
      <p>
        Before each showing, make the beds, clear surfaces, remove odors, open the blinds, turn
        on the lights, secure valuables, and take pets with you if possible.
      </p>
      <p>
        The goal is simple: help buyers focus on the home and picture themselves living there.
      </p>

      <h2>How to Prepare Your House for a Showing</h2>
      <p>
        Start preparing before your first showing. A clean and well-organized home can help
        buyers see its space and features more clearly.
      </p>

      <h3>Clean Every Room</h3>
      <p>Focus on the areas buyers notice first:</p>
      <ul>
        <li>Clean floors and carpets.</li>
        <li>Wipe counters and surfaces.</li>
        <li>Clean windows and mirrors.</li>
        <li>Dust shelves and furniture.</li>
        <li>Clean kitchen appliances.</li>
        <li>Scrub sinks, tubs, and showers.</li>
        <li>Clean toilets and bathroom floors.</li>
        <li>Remove trash and empty bins.</li>
      </ul>
      <p>
        Do not forget areas buyers may open or inspect, such as closets, cabinets, the pantry,
        and the garage.
      </p>

      <h3>Remove Clutter</h3>
      <p>Clutter can make rooms and storage areas feel smaller.</p>
      <p>Put away:</p>
      <ul>
        <li>Extra furniture</li>
        <li>Toys</li>
        <li>Shoes</li>
        <li>Clothes</li>
        <li>Mail and papers</li>
        <li>Excess decorations</li>
        <li>Kitchen items you do not use every day</li>
      </ul>
      <p>Keep walkways open so buyers can move through each room easily.</p>

      <h3>Depersonalize Your Home</h3>
      <p>Give buyers room to imagine the property as their own.</p>
      <p>Consider putting away:</p>
      <ul>
        <li>Family photos</li>
        <li>Personal documents</li>
        <li>Children&rsquo;s artwork</li>
        <li>Very personal collections</li>
        <li>Items with private information</li>
      </ul>
      <p>
        You do not need to remove everything that makes your house feel like home. Just reduce
        distractions.
      </p>

      <Cta label="Let&rsquo;s talk about your home sale">
        Ready to sell your home? We can help you prepare, market, and sell your home with
        confidence.
      </Cta>

      <h2>Make Your House Look Bright and Welcoming</h2>
      <p>Lighting can change how a room feels.</p>

      <h3>Use Natural Light</h3>
      <p>Before buyers arrive:</p>
      <ul>
        <li>Open curtains and blinds.</li>
        <li>Clean windows.</li>
        <li>Remove objects blocking windows.</li>
        <li>Turn on lights in darker rooms.</li>
        <li>Replace burned-out bulbs.</li>
      </ul>
      <p>A bright room can feel more open and inviting.</p>

      <h3>Keep the Temperature Comfortable</h3>
      <p>Do not make buyers walk into a house that feels too hot or too cold.</p>
      <p>
        Set the thermostat to a comfortable temperature based on the weather. A comfortable home
        lets buyers focus on the property instead of the temperature.
      </p>
      <Figure
        src="/images/blog/thermostat.webp"
        alt="A hand adjusting a smart thermostat to 72 degrees in a bright, tidy living room"
        width={1513}
        height={1039}
      />

      <h2>Remove Strong Odors Before a Showing</h2>
      <p>Bad smells can turn buyers away quickly.</p>
      <p>Before a showing:</p>
      <ul>
        <li>Take out the trash.</li>
        <li>Clean pet areas.</li>
        <li>Wash dirty dishes.</li>
        <li>Check the refrigerator.</li>
        <li>Clean the garbage disposal.</li>
        <li>Air out the home when practical.</li>
        <li>Avoid cooking foods with strong smells.</li>
      </ul>
      <p>
        Do not try to cover a bad smell with heavy air fresheners. Find the source and fix it.
      </p>

      <h2>Make the Outside Look Ready</h2>
      <p>Buyers see the outside before they see the inside.</p>

      <h3>Improve Your Curb Appeal</h3>
      <p>Before a showing:</p>
      <ul>
        <li>Mow the lawn.</li>
        <li>Trim overgrown plants.</li>
        <li>Sweep walkways.</li>
        <li>Remove leaves and debris.</li>
        <li>Clean the front door.</li>
        <li>Clear clutter from the porch.</li>
        <li>Empty visible trash cans.</li>
        <li>Make the entry look clean and welcoming.</li>
      </ul>
      <p>
        You do not need an expensive landscaping project. A neat exterior can make a strong first
        impression.
      </p>

      <h2>What Should You Do 30 Minutes Before a Showing?</h2>
      <p>A quick final check can help you avoid small problems.</p>

      <h3>30-Minute Showing Checklist</h3>
      <ul>
        <li>Make all beds.</li>
        <li>Put away clothes and shoes.</li>
        <li>Clear kitchen counters.</li>
        <li>Clear bathroom counters.</li>
        <li>Put dishes away.</li>
        <li>Take out the trash.</li>
        <li>Remove pet items if possible.</li>
        <li>Open blinds and curtains.</li>
        <li>Turn on the lights.</li>
        <li>Check the temperature.</li>
        <li>Check for strong odors.</li>
        <li>Close toilet lids.</li>
        <li>Make sure walkways are clear.</li>
        <li>Secure valuables and personal documents.</li>
        <li>Leave the house before buyers arrive.</li>
      </ul>
      <p>
        Keep this checklist somewhere easy to access. It can make repeated showings much easier.
      </p>

      <h2>How Do You Keep Your House Show-Ready While Living in It?</h2>
      <p>Selling an occupied home can be hard because daily life creates clutter.</p>
      <p>Create a simple routine:</p>

      <h3>Morning</h3>
      <ul>
        <li>Make the beds.</li>
        <li>Put clothes away.</li>
        <li>Clear bathroom counters.</li>
        <li>Put dishes away.</li>
      </ul>

      <h3>During the Day</h3>
      <ul>
        <li>Keep toys in one place.</li>
        <li>Keep laundry contained.</li>
        <li>Avoid leaving food and dishes out.</li>
        <li>Keep high-traffic areas clean.</li>
      </ul>

      <h3>Before a Showing</h3>
      <ul>
        <li>Do a quick room-by-room reset.</li>
        <li>Remove personal items.</li>
        <li>Empty the trash.</li>
        <li>Check the kitchen and bathrooms.</li>
        <li>Turn on the lights.</li>
        <li>Leave on time.</li>
      </ul>
      <p>The easier your routine is, the easier it will be to keep the house ready.</p>

      <h2>What Should You Do With Pets During a Showing?</h2>
      <p>Take pets with you when possible.</p>
      <p>
        Some buyers may have allergies, fear animals, or simply want to view the house without
        distractions.
      </p>
      <p>If you cannot take your pet with you:</p>
      <ul>
        <li>Keep the pet in a secure area.</li>
        <li>Tell your agent where the pet is.</li>
        <li>Remove pet waste.</li>
        <li>Clean food and water areas.</li>
        <li>Reduce pet odors.</li>
        <li>Follow any showing instructions for your home.</li>
      </ul>
      <p>Never assume a buyer is comfortable around your pet.</p>

      <h2>What Should You Hide During a House Showing?</h2>
      <p>Protect anything valuable, private, or sensitive.</p>
      <p>Secure:</p>
      <ul>
        <li>Jewelry</li>
        <li>Cash</li>
        <li>Prescription medication</li>
        <li>Personal documents</li>
        <li>Credit cards</li>
        <li>Electronics</li>
        <li>Spare keys</li>
        <li>Financial information</li>
        <li>Expensive collectibles</li>
        <li>Items containing private information</li>
      </ul>
      <p>
        Secure firearms and other weapons according to safe-storage practices and applicable
        laws.
      </p>
      <p>
        It is better to secure personal items before every showing than to assume they will be
        safe in plain sight.
      </p>
      <Figure
        src="/images/blog/what-should-you-hide-during-a-house-showing.webp"
        alt="Cash, a wallet, jewellery, a passport, credit cards, keys, a phone and prescription medication being locked into a home safe"
        width={1513}
        height={1040}
      />

      <h2>Should You Leave During a House Showing?</h2>
      <p>Yes, sellers should usually leave during a showing.</p>
      <p>
        Buyers often feel more comfortable looking around and discussing the home when the seller
        is not present.
      </p>
      <p>Before leaving:</p>
      <ul>
        <li>Take your pets with you.</li>
        <li>Take personal items you need.</li>
        <li>Secure valuables.</li>
        <li>Follow your agent&rsquo;s showing instructions.</li>
        <li>Make sure the home is ready.</li>
      </ul>
      <p>
        Avoid following buyers from room to room or trying to sell the house yourself. Let the
        buyer and their agent experience the home.
      </p>

      <h2>What Should Sellers Avoid During a Showing?</h2>
      <p>Small mistakes can make a showing less comfortable for buyers.</p>
      <p>Avoid:</p>
      <ul>
        <li>Staying in the house when you can leave.</li>
        <li>Leaving dirty dishes out.</li>
        <li>Leaving laundry on the floor.</li>
        <li>Using strong air fresheners.</li>
        <li>Leaving valuables visible.</li>
        <li>Blocking rooms with extra furniture.</li>
        <li>Leaving pets loose.</li>
        <li>Leaving personal documents out.</li>
        <li>Making buyers wait for access when possible.</li>
        <li>Talking about why you need to sell.</li>
      </ul>
      <p>Give buyers enough space to look, think, and ask questions through their agent.</p>

      <h2>How Should You Prepare for Multiple Showings in One Day?</h2>
      <p>
        Multiple showings can become tiring, especially when you still live in the house.
      </p>
      <p>Make the process easier by:</p>
      <ul>
        <li>Keeping clutter to a minimum every day.</li>
        <li>Packing items you rarely use.</li>
        <li>Creating a place for daily essentials.</li>
        <li>Keeping cleaning supplies together.</li>
        <li>Having a quick exit plan for pets and family.</li>
        <li>Using the same pre-showing checklist each time.</li>
      </ul>
      <p>
        If several showings are scheduled close together, reset the home only where needed
        between visits and do a full check after the last showing.
      </p>

      <h2>What Should You Do After a House Showing?</h2>
      <p>A showing should not end when the buyer leaves.</p>

      <h3>Check the House</h3>
      <p>Make sure:</p>
      <ul>
        <li>Doors and windows are secure.</li>
        <li>Lights are set the way you want them.</li>
        <li>Personal items are still where they belong.</li>
        <li>Nothing was left behind.</li>
        <li>Pets are safe if they stay home.</li>
      </ul>

      <h3>Review the Feedback</h3>
      <p>If your agent receives feedback from buyers, look for patterns.</p>
      <p>For example, if several buyers mention:</p>
      <ul>
        <li>A room feels dark</li>
        <li>A home feels crowded</li>
        <li>A strong odor</li>
        <li>A specific repair</li>
        <li>An uncomfortable temperature</li>
      </ul>
      <p>Consider fixing the issue before the next showing.</p>
      <p>Repeated feedback can help you understand how buyers experience your home.</p>

      <h2>How to Prepare for an Open House</h2>
      <p>
        An open house needs the same basic preparation as a private showing, but more people may
        visit.
      </p>
      <p>Before the open house:</p>
      <ul>
        <li>Deep clean the home.</li>
        <li>Remove clutter.</li>
        <li>Secure valuables and personal information.</li>
        <li>Make closets and storage areas easy to view.</li>
        <li>Tidy the yard and entry.</li>
        <li>Turn on the lights.</li>
        <li>Open blinds and curtains.</li>
        <li>Remove pets.</li>
        <li>Follow your agent&rsquo;s safety plan.</li>
      </ul>
      <p>
        Your agent can also help decide which features of the home should receive the most
        attention.
      </p>

      <Cta label="Get started today">
        Planning to sell? Our team can help you prepare your home and create a strong selling
        plan.
      </Cta>

      <h2>What Are the Most Common House Showing Mistakes?</h2>
      <p>Some of the biggest mistakes are simple and easy to avoid:</p>
      <ul>
        <li>Leaving the house too cluttered — Buyers may struggle to see the space.</li>
        <li>Ignoring closets and storage — Buyers want to understand how much storage the home offers.</li>
        <li>Leaving strong odors — Unpleasant smells can become a major distraction.</li>
        <li>Staying during the showing — Buyers may feel less comfortable speaking freely.</li>
        <li>Leaving valuables exposed — Personal and valuable items should be secured.</li>
        <li>Ignoring small repairs — Small problems can affect how buyers view the home&rsquo;s condition.</li>
        <li>Making the home too dark — Use natural and artificial light.</li>
        <li>Forgetting the exterior — The showing starts at the front door.</li>
        <li>Leaving pets behind — Pets can distract buyers or create safety concerns.</li>
        <li>Ignoring repeated feedback — Patterns in feedback can point to problems worth addressing.</li>
      </ul>

      <h2>Ready to Sell Your House?</h2>
      <p>
        From pricing and market research to negotiations and closing, we guide you through every
        step with a clear plan.
      </p>

      <Cta label="Book a call">
        Tell us about your home and where you want to be, and we will put a plan behind it.
      </Cta>

      <h2>FAQs</h2>
      {/* Fragment, not a wrapper div: `.ar-body .ar-narrow > p` is a direct-child
          selector, so a wrapper would strip the answers of their body styling. */}
      {FAQS.map((item) => (
        <Fragment key={item.q}>
          <h3>{item.q}</h3>
          <p>{item.a}</p>
        </Fragment>
      ))}

      <p>
        By preparing the same way before each showing, you can reduce stress and give buyers a
        better chance to see the value of your home.
      </p>
    </>
  );
}
